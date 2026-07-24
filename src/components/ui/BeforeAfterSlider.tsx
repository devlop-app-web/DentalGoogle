import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  category?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  title,
  category,
  className = ""
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [beforeLoaded, setBeforeLoaded] = useState<boolean>(false);
  const [afterLoaded, setAfterLoaded] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const beforeImgRef = useRef<HTMLImageElement>(null);
  const afterImgRef = useRef<HTMLImageElement>(null);

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width || containerRef.current.offsetWidth;
      if (width > 0) {
        setContainerWidth(width);
      }
    }
  }, []);

  // Reset states & trigger dimension calculations on image change
  useEffect(() => {
    setBeforeLoaded(false);
    setAfterLoaded(false);
    setSliderPosition(50);

    updateDimensions();

    const rafId = requestAnimationFrame(() => {
      updateDimensions();
    });

    return () => cancelAnimationFrame(rafId);
  }, [beforeImage, afterImage, updateDimensions]);

  // Setup ResizeObserver, image completion checks, and Window listeners
  useEffect(() => {
    updateDimensions();

    // Check if images are already cached
    if (beforeImgRef.current?.complete) {
      setBeforeLoaded(true);
    }
    if (afterImgRef.current?.complete) {
      setAfterLoaded(true);
    }

    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    let resizeObserver: ResizeObserver | null = null;
    if (containerRef.current && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateDimensions();
      });
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [updateDimensions]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 2) percentage = 2;
    if (percentage > 98) percentage = 98;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const isReady = beforeLoaded && afterLoaded && containerWidth > 0;

  return (
    <div className={`relative select-none overflow-hidden rounded-3xl border border-slate-200/90 shadow-xl bg-slate-900 ${className}`}>
      {title && (
        <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 bg-slate-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-bold font-heading">{title}</span>
          {category && (
            <span className="text-[10px] font-extrabold text-cyan-300 uppercase tracking-wider bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-500/30 ml-1">
              {category}
            </span>
          )}
        </div>
      )}

      {/* Main Container */}
      <div 
        ref={containerRef}
        className={`relative w-full h-80 sm:h-96 md:h-[420px] cursor-ew-resize overflow-hidden transition-opacity duration-300 ${
          isReady ? 'opacity-100' : 'opacity-90'
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background - Full Width) */}
        <img 
          ref={afterImgRef}
          src={afterImage} 
          alt={afterLabel} 
          onLoad={() => {
            setAfterLoaded(true);
            updateDimensions();
          }}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute bottom-4 right-4 z-10 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-black px-3 py-1 rounded-lg border border-emerald-400/40 shadow-md">
          {afterLabel}
        </div>

        {/* Before Image (Foreground - Clipped Width) */}
        <div 
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none z-10"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            ref={beforeImgRef}
            src={beforeImage} 
            alt={beforeLabel} 
            onLoad={() => {
              setBeforeLoaded(true);
              updateDimensions();
            }}
            className="absolute inset-y-0 left-0 h-full object-cover object-center pointer-events-none max-w-none"
            style={{ width: containerWidth > 0 ? `${containerWidth}px` : '100%' }}
          />
          <div className="absolute bottom-4 left-4 z-10 bg-slate-900/90 backdrop-blur-md text-slate-200 text-xs font-black px-3 py-1 rounded-lg border border-white/20 shadow-md">
            {beforeLabel}
          </div>
        </div>

        {/* Vertical Divider & Drag Handle */}
        <div 
          className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical Line */}
          <div className="w-1 h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]"></div>

          {/* Drag Knob */}
          <div className="absolute w-10 h-10 -ml-5 rounded-full bg-white text-[#0B4F6C] shadow-2xl flex items-center justify-center border-2 border-[#0B4F6C] transition-transform active:scale-110">
            <MoveHorizontal className="w-5 h-5 text-[#0B4F6C]" />
          </div>
        </div>
      </div>

      {/* Instruction hint */}
      <div className="bg-slate-900 px-4 py-2.5 text-center text-slate-400 text-[11px] font-medium flex items-center justify-center space-x-2 border-t border-slate-800">
        <MoveHorizontal className="w-3.5 h-3.5 text-cyan-400" />
        <span>Drag or swipe slider horizontally to compare before & after</span>
      </div>
    </div>
  );
};

