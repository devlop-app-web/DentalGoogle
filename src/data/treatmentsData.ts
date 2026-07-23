export interface TreatmentSubcategory {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  overview: string;
  benefits: string[];
  whoNeedsThis: string[];
  symptoms: string[];
  treatmentOptions: string[];
  procedureSteps: { title: string; desc: string }[];
  technologyUsed: string[];
  faqs: { question: string; answer: string }[];
}

export interface TreatmentCategory {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  shortDesc: string;
  overview: string;
  benefits: string[];
  whoNeedsThis: string[];
  symptoms: string[];
  treatmentOptions: string[];
  procedureSteps: { title: string; desc: string }[];
  technologyUsed: string[];
  beforeAfterCase?: {
    title: string;
    description: string;
    beforeLabel: string;
    afterLabel: string;
  };
  faqs: { question: string; answer: string }[];
  subcategories: TreatmentSubcategory[];
}

export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    slug: 'general-dentistry',
    iconName: 'Stethoscope',
    shortDesc: 'Comprehensive oral healthcare, diagnostics, and routine dental hygiene for long-term health.',
    overview: 'General dentistry forms the cornerstone of sound oral health at Dr. Sheekha Shah DENTAL STUDIO. We focus on early detection, painless clinical interventions, and maintaining your natural tooth structure for life using advanced digital diagnostics.',
    benefits: [
      'Early detection of decay and gum disease before pain occurs',
      'Minimally invasive, painless clinical procedures',
      'Personalized oral hygiene counseling by senior specialists',
      'Preservation of original tooth enamel and bone structure'
    ],
    whoNeedsThis: [
      'Individuals requiring routine 6-month oral health checks',
      'Patients experiencing initial sensitivity or mild toothaches',
      'Anyone seeking thorough professional plaque & calculus removal',
      'Patients needing restoration of minor cavities'
    ],
    symptoms: [
      'Mild sensitivity to hot or cold foods',
      'Bleeding gums during brushing or flossing',
      'Persistent bad breath or sour taste',
      'Visible dark spots or micro-cracks on tooth surfaces'
    ],
    treatmentOptions: [
      'Comprehensive Digital 3D Dental Evaluation',
      'Ultrasonic Scaling & Air Polish Hygiene',
      'Tooth-Colored Aesthetic Composite Restorations',
      'Minimally Invasive Atraumatic Extraction'
    ],
    procedureSteps: [
      { title: 'Digital Examination', desc: 'Full oral screen using intraoral HD camera and low-radiation digital radiograph.' },
      { title: 'Personalized Plan', desc: 'Transparent discussion of findings with customized preventive or curative remedies.' },
      { title: 'Painless Care', desc: 'Gentle clinical execution using topical numbing gels and ultrasonic tools.' },
      { title: 'Maintenance Guidance', desc: 'Tailored home-care recommendations and future review scheduling.' }
    ],
    technologyUsed: [
      'iTero® Element 5D Intraoral Digital Scanner',
      'Low-Dose Digital Radiography (RVG)',
      'EMS Swiss Piezon® Ultrasonic Scaler',
      'Micro-abrasion Composite Curing Unit'
    ],
    faqs: [
      { question: 'How often should I visit Dr. Sheekha Shah DENTAL STUDIO?', answer: 'We recommend visiting every 6 months for routine cleaning and a preventive digital oral exam.' },
      { question: 'Are composite fillings tooth-colored?', answer: 'Yes! We use premium aesthetic nano-composite materials matched perfectly to your natural shade.' }
    ],
    subcategories: [
      {
        id: 'dental-consultation',
        title: 'Dental Consultation',
        slug: 'dental-consultation',
        shortDesc: 'In-depth digital evaluation and personalized treatment planning with Dr. Sheekha Shah.',
        overview: 'Our comprehensive dental consultation includes high-definition intraoral scanning, digital X-rays, medical history review, and a clear step-by-step treatment roadmap.',
        benefits: ['Complete oral health report', 'Transparent cost & timeline options', 'Zero-pressure clinical guidance'],
        whoNeedsThis: ['First-time visitors', 'Patients seeking a second opinion', 'Anyone planning aesthetic or reconstructive work'],
        symptoms: ['Unexplained oral discomfort', 'Desire to upgrade smile aesthetics'],
        treatmentOptions: ['Comprehensive Exam', 'Second Opinion Review', 'Digital Smile Mockup Consultation'],
        procedureSteps: [
          { title: 'History & Concerns', desc: 'Discussing goals, medical background, and dental history.' },
          { title: '3D Scan & HD Imaging', desc: 'Capturing precise digital records without messy impression trays.' },
          { title: 'Doctor Consultation', desc: 'Detailed discussion with Dr. Sheekha Shah on recommendations.' }
        ],
        technologyUsed: ['3D iTero HD Scanner', 'Digital Panoramic X-Ray'],
        faqs: [{ question: 'How long does a consultation take?', answer: 'Usually 30 to 45 minutes.' }]
      },
      {
        id: 'routine-check-up',
        title: 'Routine Check-up',
        slug: 'routine-check-up',
        shortDesc: 'Biannual dental check-ups to catch minor issues before they become major problems.',
        overview: 'Routine check-ups evaluate teeth, gums, jaw joint, and oral soft tissues to guarantee total oral well-being.',
        benefits: ['Prevents toothache emergencies', 'Saves long-term healthcare costs', 'Ensures fresh breath'],
        whoNeedsThis: ['All adults and children every 6 months'],
        symptoms: ['None (preventive screening)', 'Mild plaque buildup'],
        treatmentOptions: ['Standard 6-Month Review', 'High-Risk Caries Monitoring'],
        procedureSteps: [
          { title: 'Visual Inspection', desc: 'Screening enamel, restorations, and soft tissue.' },
          { title: 'Digital X-Ray Check', desc: 'Screening interdental areas for hidden decay.' }
        ],
        technologyUsed: ['Intraoral HD Camera', 'Digital RVG Sensor'],
        faqs: [{ question: 'Is a check-up painful?', answer: 'Not at all! It is a non-invasive evaluation.' }]
      },
      {
        id: 'dental-cleaning',
        title: 'Dental Cleaning',
        slug: 'dental-cleaning',
        shortDesc: 'Professional scaling and polishing for plaque, calculus, and stain elimination.',
        overview: 'Professional dental cleaning removes hard calculus and tough food stains that normal brushing cannot reach, restoring healthy pink gums.',
        benefits: ['Eliminates gum inflammation', 'Removes coffee/tea/tobacco stains', 'Brightens natural enamel'],
        whoNeedsThis: ['Patients with bleeding gums', 'Anyone with visible tartar buildup'],
        symptoms: ['Red/swollen gums', 'Bleeding when flossing', 'Yellowish plaque borders'],
        treatmentOptions: ['Ultrasonic Scaling', 'Air-flow Polish Finishing'],
        procedureSteps: [
          { title: 'Ultrasonic Removal', desc: 'Vibrational water-jet cleaning of hardened calculus.' },
          { title: 'Polishing', desc: 'Smoothing enamel surfaces to delay future stain accumulation.' }
        ],
        technologyUsed: ['Piezoelectric Ultrasonic Scaler', 'Swiss Air-flow Polisher'],
        faqs: [{ question: 'Does cleaning weaken teeth?', answer: 'No. Cleaning removes harmful bacteria and preserves tooth-supporting bone.' }]
      },
      {
        id: 'tooth-fillings',
        title: 'Tooth Fillings',
        slug: 'tooth-fillings',
        shortDesc: 'Seamless, tooth-colored composite restorations for cavities and chipped teeth.',
        overview: 'Nano-hybrid tooth fillings rebuild lost tooth structure caused by decay, restoring strength and natural tooth aesthetics seamlessly.',
        benefits: ['Matches exact tooth shade', 'Bonds directly to enamel', 'Restores masticatory strength'],
        whoNeedsThis: ['Patients with dental caries', 'Worn down or chipped teeth'],
        symptoms: ['Food catching between teeth', 'Sensitivity to sweet or cold', 'Visible dark pits'],
        treatmentOptions: ['Aesthetic Composite Filling', 'Biocompatible Glass Ionomer'],
        procedureSteps: [
          { title: 'Decay Removal', desc: 'Gentle cleaning of infected area under local numbing.' },
          { title: 'Layering & Curing', desc: 'Applying composite resin and hardening with blue LED light.' },
          { title: 'Polishing', desc: 'Contouring and polishing for a natural bite feel.' }
        ],
        technologyUsed: ['3M™ Nano-Composite Resin', 'High-Intensity LED Curing Light'],
        faqs: [{ question: 'How long do composite fillings last?', answer: 'Typically 7 to 10+ years with proper oral care.' }]
      },
      {
        id: 'gum-care',
        title: 'Gum Care',
        slug: 'gum-care',
        shortDesc: 'Preventive and therapeutic gum treatments to stop gingivitis and periodontitis.',
        overview: 'Targeted gum care cures inflammation, seals periodontal pockets, and protects the supporting alveolar bone structure.',
        benefits: ['Stops bleeding gums', 'Prevents tooth loosening', 'Fresh breath confidence'],
        whoNeedsThis: ['Patients with swollen, tender, or receding gums'],
        symptoms: ['Persistent bad breath', 'Bleeding on contact', 'Gum recession'],
        treatmentOptions: ['Subgingival Debridement', 'Antimicrobial Irrigation'],
        procedureSteps: [
          { title: 'Pocket Depth Charting', desc: 'Measuring space between gums and teeth.' },
          { title: 'Deep Cleaning', desc: 'Cleaning bacteria beneath the gum line.' }
        ],
        technologyUsed: ['Periodontal Probe', 'Diode Soft-Tissue Laser'],
        faqs: [{ question: 'Can bleeding gums be cured?', answer: 'Yes, early-stage gingivitis is 100% reversible with proper care.' }]
      },
      {
        id: 'tooth-extraction',
        title: 'Tooth Extraction',
        slug: 'tooth-extraction',
        shortDesc: 'Gentle, trauma-free removal of non-restorable or impacted teeth.',
        overview: 'When a tooth is severely broken or decayed beyond repair, painless atraumatic extraction preserves surrounding bone for future implant placement.',
        benefits: ['Immediate pain relief', 'Bone-preserving technique', 'Quick post-op recovery'],
        whoNeedsThis: ['Severely decayed teeth', 'Fractured roots', 'Overcrowded arch spaces'],
        symptoms: ['Severe constant throbbing', 'Extensive structural loss', 'Loose painful tooth'],
        treatmentOptions: ['Simple Atraumatic Extraction', 'Surgical Extraction'],
        procedureSteps: [
          { title: 'Targeted Anesthesia', desc: 'Ensuring total numbness around the tooth area.' },
          { title: 'Gentle Luxation', desc: 'Elevating tooth gently without bone damage.' },
          { title: 'Aftercare & Healing', desc: 'Packing sterile gauze and providing clear recovery instructions.' }
        ],
        technologyUsed: ['Luxators & Periotomes', 'Computerized Local Anesthesia'],
        faqs: [{ question: 'Will extraction hurt?', answer: 'No, you will feel mild pressure but zero pain during the procedure.' }]
      },
      {
        id: 'preventive-dentistry',
        title: 'Preventive Dentistry',
        slug: 'preventive-dentistry',
        shortDesc: 'Custom preventive protocols, sealants, and mouthguards to protect your smile.',
        overview: 'Preventive dentistry aims to shield your teeth from wear, trauma, and caries before any damage occurs.',
        benefits: ['Protects enamel layer', 'Prevents sports injuries', 'Safeguards night grinders'],
        whoNeedsThis: ['Night teeth grinders (bruxism)', 'Athletes', 'Caries-prone patients'],
        symptoms: ['Jaw stiffness in morning', 'Enamel wear facets', 'Frequent cavities'],
        treatmentOptions: ['Custom Night Guards', 'Fluoride Shield Treatment', 'Pit & Fissure Sealants'],
        procedureSteps: [
          { title: 'Evaluation', desc: 'Checking enamel wear patterns and bite force.' },
          { title: 'Digital Impression', desc: '3D scanning for custom-fit protective appliances.' }
        ],
        technologyUsed: ['3D Printing Appliance Lab', 'High-Fluoride Varnish'],
        faqs: [{ question: 'What is a night guard?', answer: 'A custom soft/hard tray worn at night to stop teeth grinding.' }]
      }
    ]
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    slug: 'cosmetic-dentistry',
    iconName: 'Sparkles',
    shortDesc: 'Bespoke smile design, ultra-thin porcelain veneers, and artistic smile transformations.',
    overview: 'Under Dr. Sheekha Shah’s expert artistic vision, cosmetic dentistry combines facial aesthetics, digital smile design (DSD), and micro-layered ceramics to craft stunning, natural-looking dream smiles.',
    benefits: [
      'Customized smile design aligned with your facial features and skin tone',
      'Minimally invasive or non-prep porcelain veneer options',
      'Correction of gaps, chips, discoloration, and crookedness',
      'High confidence boost with natural translucency and luster'
    ],
    whoNeedsThis: [
      'Patients with stained, discolored, or dull teeth',
      'Individuals with uneven gaps or misshapen teeth',
      'Anyone desiring a camera-ready, symmetrical Hollywood smile',
      'Patients with worn, short, or chipped front teeth'
    ],
    symptoms: [
      'Deep intrinsic stains resistant to surface whitening',
      'Asymmetrical tooth sizes or uneven smile line',
      'Gaps between teeth (diastema)',
      'Visible worn edges or chipped enamel'
    ],
    treatmentOptions: [
      'Digital Smile Design (DSD) Mockup',
      'Ultra-Thin E-Max Porcelain Veneers',
      'Composite Edge Bonding',
      'Gummy Smile Laser Contouring'
    ],
    procedureSteps: [
      { title: 'Digital Smile Scan', desc: 'High-res photography and 3D digital scan of your smile.' },
      { title: '3D Trial Mockup', desc: 'Preview and test your new smile in your mouth before treatment starts.' },
      { title: 'Micro-Preparation', desc: 'Minimal surface tooth preparation for ultra-precise fit.' },
      { title: 'Permanent Bonding', desc: 'Adhering custom master ceramics for a lifelike finish.' }
    ],
    technologyUsed: [
      'Digital Smile Design (DSD) Software',
      'E-Max Pressed Ceramic System',
      'CAD/CAM Precision Milling',
      'Ivoclar Vivadent Bonding Resins'
    ],
    faqs: [
      { question: 'Do veneers look artificial?', answer: 'Not at all. Dr. Sheekha Shah hand-crafts translucent ceramic layers that mimic natural tooth shade, texture, and light reflection.' },
      { question: 'Can I see my smile before starting?', answer: 'Yes! We create a 3D physical trial smile in your mouth during consultation.' }
    ],
    subcategories: [
      {
        id: 'smile-makeover',
        title: 'Smile Makeover',
        slug: 'smile-makeover',
        shortDesc: 'Full smile redesign combining veneers, whitening, and gum contouring.',
        overview: 'A complete smile makeover transforms your entire smile using a customized combination of aesthetic treatments harmonized with your unique facial geometry.',
        benefits: ['Complete aesthetic reboot', 'Tailored to facial shape', 'Permanent stain resistance'],
        whoNeedsThis: ['Anyone seeking a comprehensive smile transformation'],
        symptoms: ['Multiple aesthetic flaws (gaps, color, shape, alignment)'],
        treatmentOptions: ['Digital Smile Makeover', 'Full Arch Veneer Rehabilitation'],
        procedureSteps: [
          { title: 'Smile Analysis', desc: 'Capturing facial symmetry and smile dynamics.' },
          { title: 'In-Mouth Preview', desc: 'Trying the temporary mockup smile for patient approval.' },
          { title: 'Final Bonding', desc: 'Placing final custom porcelain work.' }
        ],
        technologyUsed: ['DSD Facial Photography', 'E-Max Lithium Disilicate'],
        faqs: [{ question: 'How many visits are needed?', answer: 'Usually 2 to 3 appointments.' }]
      },
      {
        id: 'dental-veneers',
        title: 'Dental Veneers',
        slug: 'dental-veneers',
        shortDesc: 'Ultra-thin porcelain or composite shells that cover front tooth imperfections.',
        overview: 'Veneers are razor-thin custom shells bonded to the front of teeth to correct color, alignment, shape, and size instantly.',
        benefits: ['Stain-proof ceramic surface', 'Long-lasting durability (15+ yrs)', 'Minimal tooth preparation'],
        whoNeedsThis: ['Patients with stubborn stains, chips, or gaps'],
        symptoms: ['Discolored front teeth', 'Chipped enamel', 'Minor overlap'],
        treatmentOptions: ['Porcelain E-Max Veneers', 'Direct Composite Veneers', 'No-Prep Lumineers'],
        procedureSteps: [
          { title: 'Shade Matching', desc: 'Selecting natural translucent tones.' },
          { title: 'Enamel Prep', desc: 'Removing 0.3mm to 0.5mm of outer enamel.' },
          { title: 'Bonding', desc: 'Curing high-strength dental cement.' }
        ],
        technologyUsed: ['Swiss Ceramic Porcelain', 'Adhesive Resin Cement'],
        faqs: [{ question: 'Are veneers permanent?', answer: 'Porcelain veneers are a permanent investment that lasts 15-20 years.' }]
      },
      {
        id: 'composite-bonding',
        title: 'Composite Bonding',
        slug: 'composite-bonding',
        shortDesc: 'Quick, single-visit cosmetic fix for minor chips, gaps, and spots.',
        overview: 'Composite bonding uses sculpting resin to fix minor aesthetic flaws in just one appointment with zero downtime.',
        benefits: ['Completed in 1 visit', 'No enamel reduction needed', 'Highly affordable'],
        whoNeedsThis: ['Patients with small chips, minor gaps, or cracked edges'],
        symptoms: ['Chipped front tooth', 'Small gap between front teeth'],
        treatmentOptions: ['Direct Edge Bonding', 'Diastema Closure'],
        procedureSteps: [
          { title: 'Resin Selection', desc: 'Selecting resin shade.' },
          { title: 'Artistic Sculpting', desc: 'Sculpting resin directly on tooth.' },
          { title: 'Polish', desc: 'Buffing to a natural high shine.' }
        ],
        technologyUsed: ['Nano-Hybrid Composite', 'Diamond Polishing Discs'],
        faqs: [{ question: 'Does composite bonding hurt?', answer: 'No anesthesia is usually required!' }]
      },
      {
        id: 'gum-contouring',
        title: 'Gum Contouring',
        slug: 'gum-contouring',
        shortDesc: 'Laser reshapes uneven or gummy smile lines for balanced tooth presentation.',
        overview: 'Laser gum re-contouring removes excess gum tissue painlessly, revealing more of your natural teeth for a balanced smile.',
        benefits: ['Zero-bleeding laser technique', 'Instant healing', 'Fixes gummy smiles'],
        whoNeedsThis: ['Patients showing excessive gums when smiling'],
        symptoms: ['Teeth appear too short', 'Uneven gum line'],
        treatmentOptions: ['Laser Gingivectomy', 'Aesthetic Gum Sculpting'],
        procedureSteps: [
          { title: 'Topical Numbing', desc: 'Applying comfort gel.' },
          { title: 'Laser Precision', desc: 'Sculpting excess gum tissue with dental diode laser.' }
        ],
        technologyUsed: ['Soft Tissue Diode Laser'],
        faqs: [{ question: 'How fast is recovery?', answer: 'Most patients recover completely within 24-48 hours.' }]
      },
      {
        id: 'tooth-reshaping',
        title: 'Tooth Reshaping',
        slug: 'tooth-reshaping',
        shortDesc: 'Subtle enamel contouring to smooth sharp, uneven, or long edges.',
        overview: 'Odontoplasty gently reshapes tiny imperfections on tooth edges for smooth, harmonious tooth contours.',
        benefits: ['Painless and instant', 'No shots required', 'Enhances smile symmetry'],
        whoNeedsThis: ['Teeth with sharp corners, uneven lengths, or minor overlaps'],
        symptoms: ['Jagged tooth edges', 'Slightly long canine teeth'],
        treatmentOptions: ['Enameloplasty', 'Edge Contouring'],
        procedureSteps: [{ title: 'Smoothing', desc: 'Gently buffing high spots with micro-fine instruments.' }],
        technologyUsed: ['Ultra-Fine Finishing Burs'],
        faqs: [{ question: 'Will it damage enamel?', answer: 'No, only microscopic surface layers are adjusted safely.' }]
      },
      {
        id: 'full-mouth-aesthetic-rehabilitation',
        title: 'Full-Mouth Aesthetic Rehabilitation',
        slug: 'full-mouth-aesthetic-rehabilitation',
        shortDesc: 'Comprehensive transformation for severely worn or broken-down teeth.',
        overview: 'Rebuilds the entire upper and lower arches for patients with severe acid erosion, heavy attrition, or extensive damage.',
        benefits: ['Restores correct bite height', 'Rejuvenates facial aesthetics', 'Eliminates jaw joint strain'],
        whoNeedsThis: ['Patients with severe teeth wear, multiple broken restorations'],
        symptoms: ['Short flattened teeth', 'TMJ muscle soreness', 'Collapsed lower face height'],
        treatmentOptions: ['Full Arch Ceramic Reconstruction'],
        procedureSteps: [{ title: 'Bite Deprogramming', desc: 'Finding ideal jaw relationship before ceramic placement.' }],
        technologyUsed: ['Facebow & Articulator System', 'Digital Occlusal Analyzer'],
        faqs: [{ question: 'How long does this take?', answer: 'Typically executed across 3 to 4 scheduled phases.' }]
      }
    ]
  },
  {
    id: 'restorative-dentistry',
    title: 'Restorative Dentistry',
    slug: 'restorative-dentistry',
    iconName: 'Shield',
    shortDesc: 'Biocompatible crowns, bridges, dentures, and full-mouth functional reconstruction.',
    overview: 'Restorative dentistry repairs damaged, broken, or missing teeth. We rebuild masticatory function and structural strength using high-strength zirconia and porcelain restorations.',
    benefits: [
      'Restores full chewing power and natural speech',
      'High-strength Zirconia materials engineered for decades of use',
      'Prevents surrounding teeth from shifting out of position',
      'Natural aesthetic appearance blended with existing teeth'
    ],
    whoNeedsThis: [
      'Patients with cracked, heavily filled, or fractured teeth',
      'Patients missing one or more teeth in an arch',
      'Patients seeking replacement of old, dark metal crowns',
      'Individuals with severe biting difficulties'
    ],
    symptoms: [
      'Inability to chew comfortably on both sides',
      'Gaps from missing teeth',
      'Broken or crumbling tooth structure',
      'Loose or uncomfortable old dental bridges'
    ],
    treatmentOptions: [
      'Monolithic Zirconia & E-Max Crowns',
      'Fixed Porcelain-Fused-to-Zirconia Bridges',
      'Custom Precision Dentures',
      'Lab-Milled Inlays & Onlays'
    ],
    procedureSteps: [
      { title: 'Tooth Prep & 3D Scan', desc: 'Shaping damaged tooth and taking precise 3D digital impressions.' },
      { title: 'Temporary Protection', desc: 'Placing custom interim crown to protect the tooth.' },
      { title: 'CAD/CAM Milling', desc: 'Precision manufacturing in ceramic dental laboratory.' },
      { title: 'Final Fixation', desc: 'Cementing crown with high-grade adhesive resin.' }
    ],
    technologyUsed: [
      'CAD/CAM 5-Axis Milling Unit',
      'High-Translucency Multilayer Zirconia',
      'Resin Cementing Systems',
      'iTero® Digital Impression Scanner'
    ],
    faqs: [
      { question: 'What is the difference between Zirconia and Metal-Ceramic crowns?', answer: 'Zirconia contains zero metal, will never show dark lines at the gumline, and offers vastly superior strength and translucency.' },
      { question: 'How long do dental bridges last?', answer: 'With good oral hygiene, fixed zirconia bridges last 15 years or more.' }
    ],
    subcategories: [
      {
        id: 'dental-crowns',
        title: 'Dental Crowns',
        slug: 'dental-crowns',
        shortDesc: 'Full-coverage tooth caps that protect weak or root-canal-treated teeth.',
        overview: 'Dental crowns encase damaged teeth completely, restoring natural shape, strength, and function with biocompatible ceramics.',
        benefits: ['Maximum tooth protection', 'Matches natural teeth', '15+ year longevity'],
        whoNeedsThis: ['Root-canal-treated teeth', 'Severely fractured teeth'],
        symptoms: ['Large broken filling', 'Deep tooth cracks'],
        treatmentOptions: ['Layered Zirconia Crown', 'E-Max Ceramic Crown'],
        procedureSteps: [{ title: 'Preparation & Scan', desc: 'Shaping tooth and scanning in 3D.' }],
        technologyUsed: ['3D CAD/CAM Milling', 'Multilayered Zirconia'],
        faqs: [{ question: 'Does getting a crown hurt?', answer: 'No, the area is completely numbed during shaping.' }]
      },
      {
        id: 'dental-bridges',
        title: 'Dental Bridges',
        slug: 'dental-bridges',
        shortDesc: 'Fixed multi-unit restorations to replace missing teeth anchored by neighboring teeth.',
        overview: 'Dental bridges bridge the gap created by one or more missing teeth, supported firmly by neighboring abutment teeth.',
        benefits: ['Fixed non-removable solution', 'Restores chewing power', 'Prevents tooth drifting'],
        whoNeedsThis: ['Patients missing 1 to 3 adjacent teeth'],
        symptoms: ['Gap in teeth row', 'Difficulty chewing'],
        treatmentOptions: ['Fixed Ceramic Bridge', 'Cantilever Bridge'],
        procedureSteps: [{ title: 'Abutment Prep', desc: 'Shaping anchor teeth and placing custom bridge.' }],
        technologyUsed: ['Computer-Guided Milling'],
        faqs: [{ question: 'Is a bridge better than an implant?', answer: 'Implants don’t require shaping neighboring teeth, but bridges offer a fast fixed option.' }]
      },
      {
        id: 'dentures',
        title: 'Dentures',
        slug: 'dentures',
        shortDesc: 'Modern lightweight full or partial removable tooth replacements.',
        overview: 'Custom precision dentures replace multiple missing teeth or full arches, restoring facial support and speech.',
        benefits: ['Restores facial profile', 'Natural look and fit', 'Affordable full arch option'],
        whoNeedsThis: ['Patients missing many or all teeth in an arch'],
        symptoms: ['Inability to chew food', 'Sunken cheek appearance'],
        treatmentOptions: ['Complete Acrylic Dentures', 'Flexible Cast Partial Dentures'],
        procedureSteps: [{ title: 'Impressions & Wax Try-in', desc: 'Testing fit and aesthetics before final acrylic process.' }],
        technologyUsed: ['High-Impact Acrylic Resin'],
        faqs: [{ question: 'Will dentures feel natural?', answer: 'Modern precision dentures fit much tighter and look completely natural.' }]
      },
      {
        id: 'inlays-and-onlays',
        title: 'Inlays and Onlays',
        slug: 'inlays-and-onlays',
        shortDesc: 'Custom ceramic inserts for medium-to-large cavities where full crowns aren’t needed.',
        overview: 'Partial ceramic restorations that preserve healthy natural tooth structure while reinforcing weakened cusps.',
        benefits: ['Preserves maximum natural enamel', 'Stronger than normal fillings', 'Perfect marginal seal'],
        whoNeedsThis: ['Teeth with large decay but intact outer walls'],
        symptoms: ['Broken molar cusp', 'Failing large filling'],
        treatmentOptions: ['Porcelain Inlay', 'Ceramic Onlay'],
        procedureSteps: [{ title: 'Decay Removal & Scan', desc: 'Creating custom milled insert.' }],
        technologyUsed: ['E-Max Ceramic Milling'],
        faqs: [{ question: 'When is an onlay preferred over a crown?', answer: 'When substantial healthy tooth enamel can still be saved.' }]
      },
      {
        id: 'full-mouth-rehabilitation',
        title: 'Full-Mouth Rehabilitation',
        slug: 'full-mouth-rehabilitation',
        shortDesc: 'Comprehensive functional rebuilding of all upper and lower teeth.',
        overview: 'Combines crowns, bridges, and implants to restore collapsed bites, joint pain, and worn teeth back to optimal function.',
        benefits: ['Complete functional renewal', 'Relieves jaw muscle strain', 'Enhances quality of life'],
        whoNeedsThis: ['Complex dental degradation cases'],
        symptoms: ['Worn down teeth, inability to chew'],
        treatmentOptions: ['Comprehensive Rehabilitation'],
        procedureSteps: [{ title: 'Multi-Phase Execution', desc: 'Systematically restoring arches step-by-step.' }],
        technologyUsed: ['Digital Bite Registration', 'Full Arch CAD/CAM'],
        faqs: [{ question: 'Is full mouth rehab painful?', answer: 'All treatment steps are carried out painless under localized anesthesia.' }]
      }
    ]
  },
  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    slug: 'root-canal-treatment',
    iconName: 'Activity',
    shortDesc: 'Single-sitting painless root canal therapy using micro-endodontic technology.',
    overview: 'Painless root canal treatment saves severely infected or painful teeth. Using rotary endodontic motors and digital apex locators, Dr. Sheekha Shah cleans infected nerve canals gently and seals them permanently.',
    benefits: [
      'Saves your natural tooth from extraction',
      'Immediate relief from throbbing dental pain and infection',
      'Single-sitting completion in under 60 minutes for most cases',
      'High success rate using rotary instrumentation and warm gutta-percha'
    ],
    whoNeedsThis: [
      'Patients experiencing constant throbbing toothaches',
      'Teeth with deep decay reaching the nerve (pulp)',
      'Teeth affected by physical trauma or deep cracks',
      'Swelling or pus discharge near a specific tooth'
    ],
    symptoms: [
      'Severe pain while chewing or pressing on a tooth',
      'Lingering sensitivity to hot liquids or cold drinks',
      'Dark discoloration of a single tooth',
      'Tender or swollen gum lump near the tooth root'
    ],
    treatmentOptions: [
      'Single-Sitting Micro-Endodontics',
      'Re-Root Canal (Revision) Therapy',
      'Fiber-Post & Core Reconstruction',
      'Custom Crown Protection Post-RCT'
    ],
    procedureSteps: [
      { title: 'Painless Numbing', desc: 'Targeted local anesthetic ensures complete comfort during treatment.' },
      { title: 'Canal Access & Debridement', desc: 'Micro-instruments clean out bacterial infection from internal nerve canals.' },
      { title: 'Ultrasonic Irrigation', desc: 'Disinfecting deep microscopic side canals thorough liquid flushing.' },
      { title: 'Thermoplastic Obutration', desc: 'Hermetically sealing canals with warm biocompatible sealant.' }
    ],
    technologyUsed: [
      'Rotary Endodontic Motor with Smart Torque Control',
      'Digital Electronic Apex Locator (Root ZX)',
      'Ultrasonic Irrigation Activator',
      'Dental Operating Loupes for Magnification'
    ],
    faqs: [
      { question: 'Is a root canal painful?', answer: 'No! Modern local anesthesia makes a root canal procedure as comfortable as getting a standard filling.' },
      { question: 'Is a crown always necessary after a root canal?', answer: 'Yes, a crown is required on back teeth to protect the treated tooth from fracturing under chewing forces.' }
    ],
    subcategories: [
      {
        id: 'single-sitting-root-canal',
        title: 'Single-Sitting Root Canal',
        slug: 'single-sitting-root-canal',
        shortDesc: 'Fast, comfortable root canal completed in a single 45-60 minute visit.',
        overview: 'Advanced rotary technology allows us to disinfect and seal infected nerve canals in one single convenient appointment.',
        benefits: ['Saves time', 'Immediate pain elimination', 'High precision sealing'],
        whoNeedsThis: ['Patients with acute pulpitis or deep decay'],
        symptoms: ['Constant throbbing pain', 'Hot/cold sensitivity'],
        treatmentOptions: ['Single-Visit Micro-RCT'],
        procedureSteps: [{ title: 'Cleaning & Sealing', desc: 'Rotary cleaning followed immediately by gutta-percha obturation.' }],
        technologyUsed: ['NiTi Rotary Files', 'Apex Locator'],
        faqs: [{ question: 'Can all teeth be done in one visit?', answer: 'Over 90% of non-complex infections are suitable for single-sitting treatment.' }]
      },
      {
        id: 're-root-canal-treatment',
        title: 'Re-Root Canal Treatment',
        slug: 're-root-canal-treatment',
        shortDesc: 'Retreatment of previously treated teeth with persistent or recurring infection.',
        overview: 'Removes old filling materials, cleans undetected canals, and seals the root system again to save the tooth.',
        benefits: ['Saves tooth from extraction', 'Eliminates recurring infection'],
        whoNeedsThis: ['Patients with pain in a tooth that had a root canal years ago'],
        symptoms: ['Pain on chewing old RCT tooth', 'Recurrent swelling'],
        treatmentOptions: ['Endodontic Retreatment'],
        procedureSteps: [{ title: 'Unsealing & Re-cleaning', desc: 'Removing old gutta-percha and disinfecting missed canals.' }],
        technologyUsed: ['Solvent Disinfection', 'Ultrasonic Tips'],
        faqs: [{ question: 'Why does an old root canal fail?', answer: 'Due to complex hidden canal anatomy or new decay under an old crown.' }]
      },
      {
        id: 'post-and-core',
        title: 'Post and Core',
        slug: 'post-and-core',
        shortDesc: 'Reinforces severely broken root-canal-treated teeth before crown placement.',
        overview: 'When little tooth structure remains above the gumline, a fiber post inserted into the canal provides internal support for a new crown.',
        benefits: ['Rebuilds lost tooth height', 'Biocompatible fiber material', 'Prevents root fracture'],
        whoNeedsThis: ['Teeth with heavy structural loss post-RCT'],
        symptoms: ['Broken down tooth stump'],
        treatmentOptions: ['Glass Fiber Post Build-up'],
        procedureSteps: [{ title: 'Post Space Prep & Cementation', desc: 'Placing fiber post and composite core build-up.' }],
        technologyUsed: ['Radiopaque Fiber Posts'],
        faqs: [{ question: 'Is a post visible?', answer: 'No, it sits inside the root canal under the tooth crown.' }]
      },
      {
        id: 'dental-crown-after-root-canal',
        title: 'Dental Crown After Root Canal',
        slug: 'dental-crown-after-root-canal',
        shortDesc: 'Essential protective ceramic cap placed post-RCT to ensure long-term durability.',
        overview: 'Protects fragile root-filled teeth from splitting under heavy bite loads, restoring natural appearance.',
        benefits: ['Prevents tooth fracture', 'Restores bite function', 'Seals out bacteria'],
        whoNeedsThis: ['All molars and premolars post-RCT'],
        symptoms: ['Fragile hollow tooth after RCT'],
        treatmentOptions: ['Zirconia Cap', 'E-Max Crown'],
        procedureSteps: [{ title: 'Crown Impression & Fitting', desc: 'Measuring and bonding final crown.' }],
        technologyUsed: ['CAD/CAM Digital Scan'],
        faqs: [{ question: 'How soon should the crown be placed?', answer: 'Ideally within 1-2 weeks after RCT completion.' }]
      }
    ]
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    slug: 'dental-implants',
    iconName: 'Zap',
    shortDesc: 'Permanent titanium tooth root replacements for single, multiple, or full-arch tooth loss.',
    overview: 'Dental implants are the gold standard for replacing missing teeth. Acting as artificial titanium roots integrated into the jawbone, they support hyper-realistic ceramic crowns with lifetime stability.',
    benefits: [
      'Looks, feels, and functions exactly like a natural tooth',
      'Prevents jawbone shrinkage and preserves facial structure',
      'Zero damage to adjacent healthy teeth',
      'Lifetime durability with a success rate exceeding 98%'
    ],
    whoNeedsThis: [
      'Patients missing one, several, or all natural teeth',
      'Individuals uncomfortable with loose removable dentures',
      'Patients seeking a permanent fixed tooth replacement solution',
      'Patients with failing bridges'
    ],
    symptoms: [
      'Gaps from extracted or missing teeth',
      'Difficulty chewing solid foods like nuts or apples',
      'Deteriorating jawbone density in toothless areas',
      'Loose fitting or slipping dentures'
    ],
    treatmentOptions: [
      'Single-Tooth Titanium Implant with Zirconia Crown',
      'All-on-4 / All-on-6 Full Arch Fixed Implant Rehabilitation',
      'Implant-Supported Stabilized Dentures',
      'Keyhole Guided Flapless Immediate Implants'
    ],
    procedureSteps: [
      { title: '3D CBCT Implant Scan', desc: 'Virtual 3D jaw mapping to analyze bone density and nerve position.' },
      { title: 'Computer-Guided Placement', desc: 'Painless keyhole insertion of pure titanium implant fixture into bone.' },
      { title: 'Osseointegration Phase', desc: 'Implant fuses naturally with surrounding jawbone over 8-12 weeks.' },
      { title: 'Crown Attachment', desc: 'Securing permanent custom zirconia crown onto implant abutment.' }
    ],
    technologyUsed: [
      '3D CBCT Cone Beam Computed Tomography',
      'Straumann® & Nobel Biocare® Implant Systems',
      'Digital Surgical Guides for Flapless Placement',
      'PRF (Platelet-Rich Fibrin) Bone Regeneration'
    ],
    faqs: [
      { question: 'Is implant surgery painful?', answer: 'Not at all! Local anesthesia ensures total numbness during the quick 20-minute keyhole procedure.' },
      { question: 'How long do dental implants last?', answer: 'With proper oral hygiene, dental implants last a lifetime.' }
    ],
    subcategories: [
      {
        id: 'single-tooth-implant',
        title: 'Single-Tooth Implant',
        slug: 'single-tooth-implant',
        shortDesc: 'Replaces a single missing tooth with a titanium post and ceramic crown.',
        overview: 'A single tooth implant replaces your missing root without needing to grind down neighboring natural teeth.',
        benefits: ['Preserves adjacent teeth', 'Prevents bone loss', 'Looks completely natural'],
        whoNeedsThis: ['Anyone missing 1 tooth'],
        symptoms: ['Single tooth gap'],
        treatmentOptions: ['Standard Titanium Implant', 'Zirconia Aesthetic Implant'],
        procedureSteps: [{ title: 'Placement & Crown', desc: 'Inserting fixture and attaching custom crown.' }],
        technologyUsed: ['Straumann Swiss Implant System'],
        faqs: [{ question: 'How long is recovery?', answer: 'Most patients return to work the very next day.' }]
      },
      {
        id: 'multiple-implants',
        title: 'Multiple Implants',
        slug: 'multiple-implants',
        shortDesc: 'Implant-supported bridge solution for multiple adjacent missing teeth.',
        overview: 'Replaces multiple missing teeth using fewer implants to anchor a fixed ceramic bridge securely.',
        benefits: ['Cost-effective for multi-tooth gaps', 'Maximum stability'],
        whoNeedsThis: ['Patients missing 2 to 4 consecutive teeth'],
        symptoms: ['Large gap in arch'],
        treatmentOptions: ['Implant Bridge'],
        procedureSteps: [{ title: 'Dual Placement', desc: 'Placing 2 implants to support a 3-unit or 4-unit bridge.' }],
        technologyUsed: ['CBCT 3D Surgical Guide'],
        faqs: [{ question: 'Can implants support a bridge?', answer: 'Yes, implant bridges are extremely sturdy and reliable.' }]
      },
      {
        id: 'full-mouth-implants',
        title: 'Full-Mouth Implants',
        slug: 'full-mouth-implants',
        shortDesc: 'All-on-4 or All-on-6 fixed full arch teeth replacement.',
        overview: 'Restores an entire arch of missing teeth permanently using 4 or 6 strategically angled dental implants.',
        benefits: ['Fixed teeth in 1 to 3 days', 'Restores 100% chewing power', 'No loose dentures'],
        whoNeedsThis: ['Fully edentulous patients or failing teeth'],
        symptoms: ['No natural teeth left or loose full denture'],
        treatmentOptions: ['All-on-4 Fixed Arch', 'All-on-6 Premium Zirconia Bridge'],
        procedureSteps: [{ title: 'Full Arch Fixed Protocol', desc: 'Placing implants and attaching fixed teeth bridge.' }],
        technologyUsed: ['Guided Flapless Surgery'],
        faqs: [{ question: 'Can I get teeth in a day?', answer: 'Yes! Immediate temporary fixed teeth can be attached on the same day.' }]
      },
      {
        id: 'implant-supported-dentures',
        title: 'Implant-Supported Dentures',
        slug: 'implant-supported-dentures',
        shortDesc: 'Snap-on dentures anchored by 2 to 4 implants for zero movement.',
        overview: 'Combines the affordability of dentures with the rock-solid retention of dental implants.',
        benefits: ['No slipping or clicking', 'No messy adhesive creams needed'],
        whoNeedsThis: ['Denture wearers seeking superior retention'],
        symptoms: ['Slipping denture when talking or eating'],
        treatmentOptions: ['Locatored Snap-On Denture'],
        procedureSteps: [{ title: 'Attachment Placement', desc: 'Fitting snap attachments to implants.' }],
        technologyUsed: ['Locator Abutment System'],
        faqs: [{ question: 'Can my old denture be adapted?', answer: 'In many cases, yes!' }]
      },
      {
        id: 'immediate-implant-placement',
        title: 'Immediate Implant Placement',
        slug: 'immediate-implant-placement',
        shortDesc: 'Implant placed into socket immediately following tooth extraction in one visit.',
        overview: 'Extracts a damaged tooth and places the implant fixture in the exact same sitting, cutting treatment timeline in half.',
        benefits: ['One surgical session', 'Preserves natural socket shape', 'Faster healing'],
        whoNeedsThis: ['Patients needing extraction of a front or premolar tooth'],
        symptoms: ['Cracked non-restorable front tooth'],
        treatmentOptions: ['Extraction + Immediate Placement'],
        procedureSteps: [{ title: 'Extraction & Immediate Fixture', desc: 'Gently removing tooth root and inserting titanium post.' }],
        technologyUsed: ['Atraumatic Extraction + PRF'],
        faqs: [{ question: 'Is immediate placement always possible?', answer: 'Provided there is sufficient healthy surrounding bone and no severe acute infection.' }]
      }
    ]
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    slug: 'orthodontics',
    iconName: 'Smile',
    shortDesc: 'Clear aligners, ceramic aesthetic braces, and precision bite correction for all ages.',
    overview: 'Orthodontic care at DENTAL STUDIO creates healthy, beautifully aligned smiles and proper jaw relationships. We specialize in invisible clear aligners and subtle ceramic braces.',
    benefits: [
      'Virtually invisible clear aligners for comfortable alignment without metal wires',
      'Improves bite function, chewing efficiency, and speech clarity',
      'Easier oral hygiene maintenance with straight teeth',
      'Computer-simulated 3D outcome preview before starting'
    ],
    whoNeedsThis: [
      'Patients with crowded, crooked, or overlapping teeth',
      'Patients with gaps between teeth',
      'Individuals with overbite, underbite, crossbite, or open bite',
      'Adults desiring discreet alignment solutions'
    ],
    symptoms: [
      'Difficulty flossing due to overlapping teeth',
      'Jaw clicking or joint discomfort from uneven bite',
      'Self-consciousness when smiling in photographs',
      'Uneven enamel wear from misaligned teeth'
    ],
    treatmentOptions: [
      'Invisalign® & Clear Aligners',
      'Self-Ligating Ceramic Aesthetic Braces',
      'Traditional Metal Precision Braces',
      'Myofunctional Bite Alignment Appliances'
    ],
    procedureSteps: [
      { title: '3D iTero® Digital Scan', desc: 'High-speed 3D impression capturing 6,000 images per second.' },
      { title: 'ClinCheck® 3D Simulation', desc: 'Virtual movement plan showing week-by-week progress to final smile.' },
      { title: 'Aligner Handout / Bracket Placement', desc: 'Receiving custom clear trays or precision bracket bonding.' },
      { title: 'Progress Monitoring', desc: 'Quick 6-8 week check-ins to monitor tooth movement.' }
    ],
    technologyUsed: [
      'iTero® Orthodontic Simulator',
      'SmartTrack® Medical Grade Thermoplastic',
      'Digital Cephalometric X-Ray Analysis'
    ],
    faqs: [
      { question: 'How long does clear aligner treatment take?', answer: 'Most adult clear aligner cases are completed in 6 to 14 months.' },
      { question: 'Are clear aligners really invisible?', answer: 'Yes! Clear aligners are made of ultra-clear medical polymer that is virtually imperceptible.' }
    ],
    subcategories: [
      {
        id: 'clear-aligners',
        title: 'Clear Aligners',
        slug: 'clear-aligners',
        shortDesc: 'Removable, invisible custom trays that straighten teeth discreetly.',
        overview: 'Clear aligners move teeth gently without wires or brackets. Remove them easily for eating, brushing, and special events.',
        benefits: ['100% invisible', 'Removable for meals', 'No food restrictions'],
        whoNeedsThis: ['Adults & teens seeking discreet orthodontic treatment'],
        symptoms: ['Crooked teeth, gaps, crowding'],
        treatmentOptions: ['Invisalign® System', 'Studio Clear Aligners'],
        procedureSteps: [{ title: '3D Scan & Tray Delivery', desc: 'Digital setup followed by set of custom aligner trays.' }],
        technologyUsed: ['3D iTero ClinCheck Setup'],
        faqs: [{ question: 'How many hours a day should I wear aligners?', answer: '20 to 22 hours daily for optimal results.' }]
      },
      {
        id: 'ceramic-braces',
        title: 'Ceramic Braces',
        slug: 'ceramic-braces',
        shortDesc: 'Tooth-colored ceramic brackets that blend in naturally with teeth.',
        overview: 'Ceramic braces offer the strong movement power of traditional braces with clear tooth-matched brackets.',
        benefits: ['Less noticeable than metal', 'Effective for complex bites', 'Stain-resistant ceramic'],
        whoNeedsThis: ['Patients needing fixed braces with aesthetic preference'],
        symptoms: ['Severe teeth misalignment'],
        treatmentOptions: ['Self-Ligating Ceramic Braces'],
        procedureSteps: [{ title: 'Bracket Bonding', desc: 'Bonding tooth-colored ceramic brackets to teeth.' }],
        technologyUsed: ['Translucent Micro-Ceramic Brackets'],
        faqs: [{ question: 'Do ceramic brackets stain?', answer: 'The ceramic brackets themselves do not stain.' }]
      },
      {
        id: 'metal-braces',
        title: 'Metal Braces',
        slug: 'metal-braces',
        shortDesc: 'Proven, high-precision stainless steel braces for all alignment cases.',
        overview: 'Classic metal braces remain the most versatile and cost-effective method for correcting complex severe bites.',
        benefits: ['Highly durable', 'Most economical orthodontic option', 'Handles severe crowding'],
        whoNeedsThis: ['Children, teens, and adults with complex bite issues'],
        symptoms: ['Severe crowding or rotated teeth'],
        treatmentOptions: ['Precision High-Grade Metal Braces'],
        procedureSteps: [{ title: 'Placement & Wire Adjustment', desc: 'Securing archwire with colored elastic ties.' }],
        technologyUsed: ['Mini Metal Low-Profile Brackets'],
        faqs: [{ question: 'How often are wire adjustments done?', answer: 'Every 4 to 6 weeks.' }]
      },
      {
        id: 'adult-orthodontics',
        title: 'Adult Orthodontics',
        slug: 'adult-orthodontics',
        shortDesc: 'Tailored orthodontic solutions engineered specifically for adult jaw bone dynamics.',
        overview: 'It is never too late to align your smile. We offer adult-focused aligners and ceramic solutions designed for busy lifestyle aesthetics.',
        benefits: ['Boosts professional confidence', 'Prevents uneven enamel wear'],
        whoNeedsThis: ['Adults over 21 seeking straight teeth'],
        symptoms: ['Relapsed alignment from childhood'],
        treatmentOptions: ['Discreet Adult Aligners'],
        procedureSteps: [{ title: 'Adult Scan & Consultation', desc: 'Tailoring setup to adult bone density.' }],
        technologyUsed: ['Digital 3D Movement Analysis'],
        faqs: [{ question: 'Am I too old for orthodontic treatment?', answer: 'No! As long as your gums and bone are healthy, teeth can be moved at any age.' }]
      },
      {
        id: 'teen-orthodontics',
        title: 'Teen Orthodontics',
        slug: 'teen-orthodontics',
        shortDesc: 'Aligners and aesthetic braces designed for teenage dental growth phases.',
        overview: 'Guides permanent teeth into perfect alignment while managing eruption spaces during teenage growth spurts.',
        benefits: ['Compliance indicators on aligners', 'Protects developing permanent teeth'],
        whoNeedsThis: ['Teens aged 11 to 18'],
        symptoms: ['Irregular teeth growth'],
        treatmentOptions: ['Invisalign Teen®', 'Aesthetic Braces'],
        procedureSteps: [{ title: 'Growth Evaluation & Setup', desc: 'Monitoring erupting premolars and molars.' }],
        technologyUsed: ['SmartTrack Teen Polymer'],
        faqs: [{ question: 'What if my teen loses an aligner tray?', answer: 'Invisalign Teen includes replacement aligners!' }]
      },
      {
        id: 'bite-correction',
        title: 'Bite Correction',
        slug: 'bite-correction',
        shortDesc: 'Fixes overbites, underbites, crossbites, and open bites for healthy joint alignment.',
        overview: 'Corrects jaw relationships to eliminate jaw clicking, chewing difficulty, and abnormal enamel wear.',
        benefits: ['Relieves jaw strain', 'Improves facial profile', 'Ensures balanced bite'],
        whoNeedsThis: ['Patients with functional bite misalignment'],
        symptoms: ['Jaw joint pain, inability to bite food evenly'],
        treatmentOptions: ['Inter-Arch Elastics & Alignment'],
        procedureSteps: [{ title: 'Cephalometric Analysis & Treatment', desc: 'Aligning top and bottom jaw arches.' }],
        technologyUsed: ['3D Occlusal Scan'],
        faqs: [{ question: 'Can bite correction improve my facial profile?', answer: 'Yes! Correcting severe overbites or underbites enhances chin and lip profile significantly.' }]
      }
    ]
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    slug: 'teeth-whitening',
    iconName: 'Sun',
    shortDesc: 'In-clinic laser whitening up to 8 shades brighter in 45 minutes with zero sensitivity.',
    overview: 'Professional laser teeth whitening safely eliminates years of stubborn coffee, tea, wine, and aging stains, revealing your brightest natural smile safely under specialist supervision.',
    benefits: [
      'Up to 8 shades lighter in a single 45-minute clinic session',
      'Advanced desensitizing formula guarantees a painless, comfortable treatment',
      'Long-lasting brilliance with customized take-home maintenance trays',
      'Safe on natural enamel and existing dental restorations'
    ],
    whoNeedsThis: [
      'Patients with yellowing or dull tooth discoloration',
      'Coffee, tea, wine, or tobacco users with surface stains',
      'Individuals preparing for weddings, interviews, or special events',
      'Patients seeking a fast, dramatic cosmetic upgrade'
    ],
    symptoms: [
      'Yellowed or brownish tooth enamel',
      'Stains resistant to commercial whitening toothpaste',
      'Dull smile appearance in daylight'
    ],
    treatmentOptions: [
      'In-Clinic Zoom!® / Philips Laser Whitening',
      'Custom Take-Home Whitening Kits',
      'Combined Hybrid Whitening Protocol',
      'Deep Stain Ultrasonic Removal'
    ],
    procedureSteps: [
      { title: 'Shade Assessment', desc: 'Measuring current tooth shade on Vita spectrum scale.' },
      { title: 'Gum Barrier Application', desc: 'Applying liquid dam to protect gums completely.' },
      { title: 'Gel & Laser Activation', desc: '3 cycles of 15-minute peroxide gel activated by blue LED laser.' },
      { title: 'Fluoride Polish', desc: 'Applying remineralizing desensitizing paste for instant shine.' }
    ],
    technologyUsed: [
      'Philips Zoom! WhiteSpeed LED Laser',
      'Liquid Light-Cured Dam Barrier',
      'ACP (Amorphous Calcium Phosphate) Desensitizer'
    ],
    faqs: [
      { question: 'Will teeth whitening cause extreme sensitivity?', answer: 'Our advanced Zoom! laser technology includes built-in ACP desensitizer, ensuring zero-to-minimal sensitivity.' },
      { question: 'How long do whitening results last?', answer: 'Results last 1 to 3 years depending on dietary habits and oral hygiene.' }
    ],
    subcategories: [
      {
        id: 'in-clinic-whitening',
        title: 'In-Clinic Whitening',
        slug: 'in-clinic-whitening',
        shortDesc: 'Fast laser whitening yielding up to 8 shades lighter in under an hour.',
        overview: 'Supervised laser whitening offers the fastest and most dramatic smile brightening available.',
        benefits: ['Instant 8 shade upgrade', 'Safe gum protection', 'Painless formula'],
        whoNeedsThis: ['Patients seeking immediate results for an upcoming event'],
        symptoms: ['Deep tooth yellowing'],
        treatmentOptions: ['Philips Zoom! In-Office Whitening'],
        procedureSteps: [{ title: 'Isolation & 3x15 Min Cycles', desc: 'Protecting gums and activating whitening gel.' }],
        technologyUsed: ['Philips Zoom! LED Accelerator'],
        faqs: [{ question: 'How long does in-clinic whitening take?', answer: 'About 45 to 60 minutes total.' }]
      },
      {
        id: 'home-whitening-kits',
        title: 'Home Whitening Kits',
        slug: 'home-whitening-kits',
        shortDesc: 'Professional custom-fitted trays and medical gel for home application.',
        overview: 'Customized clear whitening trays made from 3D scans, paired with professional gel to whiten teeth gradually at home.',
        benefits: ['Convenient at-home use', 'Reusable custom trays'],
        whoNeedsThis: ['Patients preferring gradual whitening over 7-10 days'],
        symptoms: ['Mild tooth dullness'],
        treatmentOptions: ['Studio Custom Home Gel Kit'],
        procedureSteps: [{ title: 'Scan & Kit Delivery', desc: 'Receiving custom trays and syringe gel.' }],
        technologyUsed: ['3D Printed Custom Trays'],
        faqs: [{ question: 'Are home kits as effective as clinic whitening?', answer: 'Yes! They achieve identical brightness over a 10-14 day period.' }]
      },
      {
        id: 'stain-removal',
        title: 'Stain Removal',
        slug: 'stain-removal',
        shortDesc: 'Air-flow abrasive polishing to erase stubborn tea, coffee, and tobacco stains.',
        overview: 'High-pressure air polishing gently blasts away deep extrinsic surface stains without harming enamel.',
        benefits: ['Eraser effect for dark stains', 'Smooth clean enamel surface'],
        whoNeedsThis: ['Smokers, heavy coffee/tea drinkers'],
        symptoms: ['Dark brown or black tooth surface lines'],
        treatmentOptions: ['Swiss Air-Flow Stain Polish'],
        procedureSteps: [{ title: 'Air-Flow Blast', desc: 'Gentle water and erythritol powder spray.' }],
        technologyUsed: ['EMS Airflow® Station'],
        faqs: [{ question: 'Does stain removal whiten natural enamel?', answer: 'It restores 100% of your natural bright enamel color.' }]
      },
      {
        id: 'whitening-maintenance',
        title: 'Whitening Maintenance',
        slug: 'whitening-maintenance',
        shortDesc: 'Touch-up protocols and desensitizing care to keep your smile glowing indefinitely.',
        overview: 'Simple periodic touch-up protocols to preserve your bright smile year-round.',
        benefits: ['Prolongs whitening results indefinitely'],
        whoNeedsThis: ['Patients who previously had whitening done'],
        symptoms: ['Slight stain rebound after 12 months'],
        treatmentOptions: ['Touch-up Gel Refills'],
        procedureSteps: [{ title: 'Overnight Touch-Up', desc: 'Wearing custom tray once every 6 months.' }],
        technologyUsed: ['ACP Remineralizing Formula'],
        faqs: [{ question: 'How often should I do touch-ups?', answer: 'Once every 6 to 12 months is sufficient.' }]
      }
    ]
  },
  {
    id: 'childrens-dentistry',
    title: "Children's Dentistry",
    slug: 'childrens-dentistry',
    iconName: 'Heart',
    shortDesc: 'Fear-free pediatric dental care, cavity prevention, fluoride shields, and habit counseling.',
    overview: 'We provide gentle, fun, and fear-free dental visits for infants, children, and teenagers. Our pediatric dentistry team focuses on building positive habits and protecting milk and permanent teeth.',
    benefits: [
      'Welcoming, playful environment designed to eliminate childhood dental anxiety',
      'Painless cavity treatments and protective sealants',
      'Early guidance on thumb sucking, mouth breathing, and jaw development',
      'Preventive fluoride applications to strengthen growing enamel'
    ],
    whoNeedsThis: [
      'Infants getting their first tooth (around 1 year of age)',
      'Children with tooth decay or white spot lesions',
      'Kids engaging in active sports needing mouthguards',
      'Children with thumb-sucking habits'
    ],
    symptoms: [
      'Visible dark spots or cavities on baby teeth',
      'Toothache or crying while chewing food',
      'Early loss of milk teeth',
      'Habitual mouth breathing or tongue thrusting'
    ],
    treatmentOptions: [
      'First Dental Visit & Acclimatization',
      'Painless Pediatric Cavity Fillings',
      'Pit & Fissure Protective Sealants',
      'Habit Breaking Oral Appliances'
    ],
    procedureSteps: [
      { title: 'Friendly Meet & Greet', desc: 'Fun tour of the dental clinic to establish trust with the child.' },
      { title: 'Gentle Examination', desc: 'Quick checkup using child-friendly terminology.' },
      { title: 'Painless Care / Sealant', desc: 'Applying protective fruit-flavored fluoride or cavity filling.' },
      { title: 'Reward & Certificate', desc: 'Rewarding the brave little patient with a smile champion gift.' }
    ],
    technologyUsed: [
      'Child-Sized Ergonomic Dental Chairs',
      'Painless Computerized Anesthesia',
      'Flavored Remineralizing Fluoride Varnishes',
      'No-Drill Laser Caries Treatment'
    ],
    faqs: [
      { question: 'When should my child have their first dental visit?', answer: 'We recommend bringing your child by their 1st birthday or when their first tooth appears.' },
      { question: 'Do baby teeth really matter if they fall out anyway?', answer: 'Yes! Healthy baby teeth are vital for proper chewing, speech, and maintaining space for permanent teeth.' }
    ],
    subcategories: [
      {
        id: 'first-dental-visit',
        title: 'First Dental Visit',
        slug: 'first-dental-visit',
        shortDesc: 'Fun, gentle introductory visit to build a lifelong positive relationship with dentistry.',
        overview: 'Introduces toddlers and young children to the dental office through fun, stress-free interaction.',
        benefits: ['Eliminates dental phobia', 'Teaches parents proper baby gum hygiene'],
        whoNeedsThis: ['Children aged 1 to 3 years'],
        symptoms: ['First tooth eruption'],
        treatmentOptions: ['Pediatric Consultation & Tell-Show-Do'],
        procedureSteps: [{ title: 'Tell-Show-Do Experience', desc: 'Demonstrating tools playfully before touching teeth.' }],
        technologyUsed: ['Child Comfort Amenities'],
        faqs: [{ question: 'What happens during the first visit?', answer: 'A gentle oral exam, fun demonstration, and parental guidance.' }]
      },
      {
        id: 'cavity-treatment',
        title: 'Cavity Treatment',
        slug: 'cavity-treatment',
        shortDesc: 'Painless fillings and pulpotomy treatments for milk teeth.',
        overview: 'Restores decayed baby teeth gently to stop pain and prevent premature tooth loss.',
        benefits: ['Painless composite filling', 'Saves space for permanent teeth'],
        whoNeedsThis: ['Kids with cavities or sensitivity'],
        symptoms: ['Black spots on teeth, difficulty eating'],
        treatmentOptions: ['Pediatric Tooth Restoration', 'Pulpotomy (Baby RCT)'],
        procedureSteps: [{ title: 'Gentle Cleaning & Filling', desc: 'Removing decay with minimal noise instruments.' }],
        technologyUsed: ['Biocompatible Pediatric Glass Ionomer'],
        faqs: [{ question: 'Will my child feel the shot?', answer: 'We use topical numbing gel before any local application.' }]
      },
      {
        id: 'fluoride-treatment',
        title: 'Fluoride Treatment',
        slug: 'fluoride-treatment',
        shortDesc: 'Tasty fruit-flavored varnish that fortifies developing tooth enamel against decay.',
        overview: 'In-office fluoride varnish strengthens young enamel and reverses early microscopic decay spots.',
        benefits: ['70% reduction in cavity risk', 'Quick 2-minute application'],
        whoNeedsThis: ['All children every 6 months'],
        symptoms: ['Chalky white spot caries'],
        treatmentOptions: ['Professional Fluoride Varnish'],
        procedureSteps: [{ title: 'Paint-On Application', desc: 'Painting delicious fruit varnish over teeth.' }],
        technologyUsed: ['5% Sodium Fluoride Varnish'],
        faqs: [{ question: 'Can my child eat after fluoride treatment?', answer: 'Yes, soft food is fine immediately after application.' }]
      },
      {
        id: 'dental-sealants',
        title: 'Dental Sealants',
        slug: 'dental-sealants',
        shortDesc: 'Protective plastic coating brushed into deep molar grooves to block decay.',
        overview: 'Fills the deep pits on new permanent molars so food particles cannot stick and cause decay.',
        benefits: ['80% protection against molar cavities', 'No drilling needed'],
        whoNeedsThis: ['Children aged 6 to 12 when permanent molars erupt'],
        symptoms: ['Deep fissures on new molars'],
        treatmentOptions: ['Pit & Fissure Sealant'],
        procedureSteps: [{ title: 'Paint & Cure', desc: 'Brushing liquid sealant into grooves and hardening with light.' }],
        technologyUsed: ['Flowable Resin Sealant'],
        faqs: [{ question: 'How long do sealants last?', answer: 'Up to 5 to 9 years.' }]
      },
      {
        id: 'habit-correction',
        title: 'Habit Correction',
        slug: 'habit-correction',
        shortDesc: 'Appliances that gently break thumb-sucking, tongue-thrusting, and mouth-breathing.',
        overview: 'Custom habit-breaking appliances prevent jaw distortion caused by prolonged sucking or thrusting.',
        benefits: ['Prevents crooked permanent teeth', 'Promotes natural jaw expansion'],
        whoNeedsThis: ['Kids sucking thumb past age 4'],
        symptoms: ['Protruding front teeth, open bite'],
        treatmentOptions: ['Habit Breaking Appliance'],
        procedureSteps: [{ title: 'Appliance Fitting', desc: 'Placing custom gentle mouth appliance.' }],
        technologyUsed: ['Myofunctional Trainer'],
        faqs: [{ question: 'How fast do habits stop?', answer: 'Usually within 3 to 8 weeks.' }]
      },
      {
        id: 'preventive-care',
        title: 'Preventive Care',
        slug: 'preventive-care',
        shortDesc: 'Comprehensive preventive checkups and oral hygiene training for kids.',
        overview: 'Custom preventive programs that teach kids correct brushing techniques in an engaging, memorable way.',
        benefits: ['Establishes lifelong healthy habits'],
        whoNeedsThis: ['All growing children'],
        symptoms: ['Plaque accumulation'],
        treatmentOptions: ['Pediatric Hygiene Session'],
        procedureSteps: [{ title: 'Brushing Demonstration & Polish', desc: 'Interactive hygiene lesson.' }],
        technologyUsed: ['Disclosing Solution Tablets'],
        faqs: [{ question: 'How often should kids brush?', answer: 'Twice daily with a pea-sized amount of toothpaste.' }]
      }
    ]
  },
  {
    id: 'gum-treatment',
    title: 'Gum Treatment',
    slug: 'gum-treatment',
    iconName: 'ShieldAlert',
    shortDesc: 'Deep scaling, root planing, soft-tissue laser therapy, and periodontitis control.',
    overview: 'Specialized periodontal care designed to cure gum infection, halt bone loss, and firm up loose teeth. We utilize state-of-the-art dental lasers for painless subgingival bacterial eradication.',
    benefits: [
      'Stops gum bleeding, red swelling, and halitosis (bad breath)',
      'Laser-assisted deep pocket sterilization with zero surgical cuts',
      'Saves natural teeth from becoming loose or requiring extraction',
      'Reduces systemic inflammation linked to heart disease & diabetes'
    ],
    whoNeedsThis: [
      'Patients with persistent bleeding gums during brushing',
      'Patients with receded gums exposing sensitive tooth roots',
      'Individuals with persistent foul breath or mouth taste',
      'Patients diagnosed with periodontitis'
    ],
    symptoms: [
      'Puffy, tender, or purplish gums',
      'Gums pulling away from teeth (pocket formation)',
      'Loose or shifting teeth',
      'Pus discharge between teeth and gums'
    ],
    treatmentOptions: [
      'Deep Subgingival Scaling & Root Planing (SRP)',
      'LANAP® / Laser-Assisted Periodontal Therapy',
      'Gingival Flap Surgery with Bone Grafting',
      'Periodontal Maintenance Protocols'
    ],
    procedureSteps: [
      { title: 'Microscopic Pocket Evaluation', desc: 'Measuring pocket depth around every tooth using calibrated probe.' },
      { title: 'Root Planing', desc: 'Smoothing rough root surfaces where bacterial colonies adhere.' },
      { title: 'Laser Sterilization', desc: 'Diode laser eliminates deep tissue bacteria and promotes tissue reattachment.' },
      { title: 'Maintenance Protocol', desc: 'Scheduled 3-4 month checkups to keep periodontitis in total remission.' }
    ],
    technologyUsed: [
      'Dental Diode Laser (940nm)',
      'Subgingival Ultrasonic Micro-Tips',
      'Antimicrobial Chip Placement (PerioChip®)',
      'PRP / PRF Centrifuge Regenerative Unit'
    ],
    faqs: [
      { question: 'What is the difference between regular cleaning and deep cleaning?', answer: 'Regular cleaning removes surface plaque above the gums. Deep cleaning (root planing) cleans deep bacterial pockets beneath the gumline.' },
      { question: 'Can loose teeth become firm again with gum treatment?', answer: 'Yes! Removing deep bacterial infection allows gum fibers and bone to heal, helping teeth firm up.' }
    ],
    subcategories: [
      {
        id: 'scaling-and-root-planing',
        title: 'Scaling and Root Planing',
        slug: 'scaling-and-root-planing',
        shortDesc: 'Deep cleaning beneath the gumline to smooth root surfaces and eradicate tartar.',
        overview: 'Removes deep bacterial calculus from root surfaces, allowing gums to reattach firmly to teeth.',
        benefits: ['Halts periodontitis progression', 'Reduces gum pocket depth'],
        whoNeedsThis: ['Patients with deep gum pockets (4mm+)'],
        symptoms: ['Bleeding gums, bad breath'],
        treatmentOptions: ['Subgingival SRP Therapy'],
        procedureSteps: [{ title: 'Deep Cleaning', desc: 'Ultrasonic and hand instrumentation under local numbing.' }],
        technologyUsed: ['Subgingival Micro-Scalers'],
        faqs: [{ question: 'Is root planing painful?', answer: 'No, local numbing ensures total comfort.' }]
      },
      {
        id: 'gum-infection-treatment',
        title: 'Gum Infection Treatment',
        slug: 'gum-infection-treatment',
        shortDesc: 'Targeted antimicrobial therapy and laser sterilization for acute gum abscesses.',
        overview: 'Treats painful localized gum infections and abscesses quickly using laser therapy and site-specific antibiotics.',
        benefits: ['Fast pain relief', 'Controls bacterial spread'],
        whoNeedsThis: ['Patients with swollen, painful gum lumps'],
        symptoms: ['Painful swelling, pus release'],
        treatmentOptions: ['Laser Debridement & Irrigation'],
        procedureSteps: [{ title: 'Drainage & Laser Flushing', desc: 'Sterilizing infected pocket.' }],
        technologyUsed: ['Diode Laser 940nm'],
        faqs: [{ question: 'How quickly does swelling go down?', answer: 'Usually within 24 to 48 hours.' }]
      },
      {
        id: 'gum-surgery',
        title: 'Gum Surgery',
        slug: 'gum-surgery',
        shortDesc: 'Flap surgery and bone grafting for advanced periodontitis bone restoration.',
        overview: 'Advanced surgical access to clean deep bone defects and place bone graft material for structural regeneration.',
        benefits: ['Regenerates lost bone', 'Saves severely compromised teeth'],
        whoNeedsThis: ['Patients with advanced periodontitis and bone defects'],
        symptoms: ['Severely loose teeth'],
        treatmentOptions: ['Gingival Flap + Bone Graft'],
        procedureSteps: [{ title: 'Flap Access & Grafting', desc: 'Lifting gum tissue, placing bone graft, and suturing.' }],
        technologyUsed: ['Synthetic Bone Graft Material'],
        faqs: [{ question: 'How long do sutures stay?', answer: 'Sutures are removed in 7 to 10 days.' }]
      },
      {
        id: 'gum-contouring',
        title: 'Gum Contouring',
        slug: 'gum-contouring',
        shortDesc: 'Laser re-shaping of uneven gumlines for harmonious smile proportions.',
        overview: 'Reshapes asymmetrical gum lines effortlessly using soft tissue diode lasers.',
        benefits: ['Instant aesthetic enhancement', 'Zero bleeding'],
        whoNeedsThis: ['Patients with uneven gum height'],
        symptoms: ['Asymmetrical smile line'],
        treatmentOptions: ['Laser Gingivoplasty'],
        procedureSteps: [{ title: 'Sculpting', desc: 'Contouring gum line with laser beam.' }],
        technologyUsed: ['Soft Tissue Diode Laser'],
        faqs: [{ question: 'Is laser contouring permanent?', answer: 'Yes, laser re-contoured gum shape is permanent.' }]
      },
      {
        id: 'periodontal-maintenance',
        title: 'Periodontal Maintenance',
        slug: 'periodontal-maintenance',
        shortDesc: 'Quarterly specialized cleaning to maintain periodontitis in permanent remission.',
        overview: 'Ongoing 3-month cleanings designed specifically for periodontitis patients to prevent bacterial reinfection.',
        benefits: ['Keeps periodontitis dormant', 'Protects long-term bone density'],
        whoNeedsThis: ['All patients who completed SRP or gum surgery'],
        symptoms: ['History of periodontitis'],
        treatmentOptions: ['3-Month Perio Cleaning'],
        procedureSteps: [{ title: 'Pocket Re-check & Polish', desc: 'Monitoring pockets and removing new biofilm.' }],
        technologyUsed: ['EMS Swiss Piezon Scaler'],
        faqs: [{ question: 'Why 3 months instead of 6?', answer: 'Periodontal bacteria take 90 days to recolonize deep pockets.' }]
      }
    ]
  },
  {
    id: 'oral-surgery',
    title: 'Oral Surgery',
    slug: 'oral-surgery',
    iconName: 'Crosshair',
    shortDesc: 'Impacted wisdom tooth extraction, sinus lifts, bone grafting, and minor oral surgery.',
    overview: 'Our oral and maxillofacial surgery services cover painless surgical tooth extractions, impacted wisdom tooth removal, sinus lifts, and pre-implant bone grafting performed with extreme precision.',
    benefits: [
      'Painless surgical protocols guided by 3D CBCT digital imaging',
      'Faster healing with PRF (Platelet-Rich Fibrin) natural growth factors',
      'Minimally invasive piezo-electric bone surgery instruments',
      'Comfortable sedation options available'
    ],
    whoNeedsThis: [
      'Patients with painful or impacted wisdom teeth',
      'Patients needing jawbone augmentation prior to implant placement',
      'Individuals with non-restorable severely broken roots',
      'Patients requiring sinus elevation surgery'
    ],
    symptoms: [
      'Severe jaw pain or swelling at the back of the mouth',
      'Inability to open mouth fully (trismus)',
      'Inadequate bone volume for implants',
      'Cysts or persistent localized infections'
    ],
    treatmentOptions: [
      'Painless Impacted Wisdom Tooth Surgery',
      'Guided Bone Regeneration (GBR)',
      'Direct & Indirect Sinus Lift Augmentation',
      'Frenectomy & Cysts Enucleation'
    ],
    procedureSteps: [
      { title: '3D CBCT Surgical Mapping', desc: 'Evaluating nerve paths and bone dimensions in full 3D.' },
      { title: 'Targeted Anesthesia', desc: 'Ensuring total regional numbness.' },
      { title: 'Piezo-Surgical Precision', desc: 'Gently sectioning tooth or placing graft using ultrasound waves.' },
      { title: 'PRF & Micro-Suturing', desc: 'Placing natural healing membrane and dissolvable sutures.' }
    ],
    technologyUsed: [
      'Piezosurgery® Ultrasonic Bone Surgery Unit',
      '3D CBCT Multi-planar Imaging',
      'PRF Centrifuge System',
      'Resorbable Collagen Membranes'
    ],
    faqs: [
      { question: 'How painful is wisdom tooth removal?', answer: 'With local anesthesia and piezo-ultrasonic equipment, you feel zero pain during the procedure.' },
      { question: 'What is PRF (Platelet-Rich Fibrin)?', answer: 'PRF uses a small sample of your own blood to create a natural healing membrane that speeds recovery by 50%.' }
    ],
    subcategories: [
      {
        id: 'wisdom-tooth-removal',
        title: 'Wisdom Tooth Removal',
        slug: 'wisdom-tooth-removal',
        shortDesc: 'Painless extraction of painful, impacted, or crooked third molars.',
        overview: 'Removes impacted wisdom teeth gently to eliminate jaw pain, crowding, and infection in neighboring molars.',
        benefits: ['Stops recurring jaw pain', 'Prevents damage to adjacent teeth'],
        whoNeedsThis: ['Teens & adults with painful or crowded third molars'],
        symptoms: ['Back jaw pain, swollen gums at back of mouth'],
        treatmentOptions: ['Surgical Wisdom Tooth Dissection'],
        procedureSteps: [{ title: 'Anesthesia & Sectioning', desc: 'Gently elevating and sectioning wisdom tooth.' }],
        technologyUsed: ['CBCT 3D Nerve Mapping'],
        faqs: [{ question: 'How long does healing take?', answer: 'Initial soft tissue healing takes 3 to 5 days.' }]
      },
      {
        id: 'surgical-extraction',
        title: 'Surgical Extraction',
        slug: 'surgical-extraction',
        shortDesc: 'Precise surgical removal of broken, curved, or fractured tooth roots.',
        overview: 'Gentle surgical approach for teeth broken flush with the gumline or with severely curved roots.',
        benefits: ['Protects surrounding jawbone', 'Zero pain guaranteed'],
        whoNeedsThis: ['Teeth broken at root level'],
        symptoms: ['Submerged broken tooth root'],
        treatmentOptions: ['Surgical Root Flap Removal'],
        procedureSteps: [{ title: 'Micro-Flap & Extraction', desc: 'Lifting tiny gum flap to access and remove root.' }],
        technologyUsed: ['Micro-Instruments'],
        faqs: [{ question: 'Are stitches required?', answer: 'Usually dissolvable sutures are placed.' }]
      },
      {
        id: 'minor-oral-surgery',
        title: 'Minor Oral Surgery',
        slug: 'minor-oral-surgery',
        shortDesc: 'Laser frenectomy, cyst removal, and soft tissue biopsy procedures.',
        overview: 'Covers laser frenectomies (tongue-tie release), benign lesion removals, and minor tissue adjustments.',
        benefits: ['Bloodless laser technique', 'Instant functional relief'],
        whoNeedsThis: ['Patients with tongue-tie, lip-tie, or oral cysts'],
        symptoms: ['Restricted tongue movement, soft tissue lump'],
        treatmentOptions: ['Laser Frenectomy / Cyst Removal'],
        procedureSteps: [{ title: 'Laser Excision', desc: 'Precise laser releasing of tissue band.' }],
        technologyUsed: ['Diode Dental Laser'],
        faqs: [{ question: 'Is laser frenectomy safe for babies?', answer: 'Yes, it takes less than 2 minutes with minimal discomfort.' }]
      },
      {
        id: 'bone-grafting',
        title: 'Bone Grafting',
        slug: 'bone-grafting',
        shortDesc: 'Rebuilds lost jawbone density to create a solid foundation for implants.',
        overview: 'Augments thin or shrunk jawbone using bio-compatible bone graft materials and PRF healing membranes.',
        benefits: ['Restores bone height & width', 'Enables successful implant placement'],
        whoNeedsThis: ['Patients with shrunk jawbone wanting implants'],
        symptoms: ['Thin, narrow bone ridge'],
        treatmentOptions: ['Guided Bone Regeneration (GBR)'],
        procedureSteps: [{ title: 'Graft Placement & Membrane', desc: 'Placing bone granules and sealing with collagen membrane.' }],
        technologyUsed: ['Bio-Oss® Bone Graft'],
        faqs: [{ question: 'How long does bone graft integrate?', answer: 'Typically 3 to 5 months before implant placement.' }]
      },
      {
        id: 'sinus-lift',
        title: 'Sinus Lift',
        slug: 'sinus-lift',
        shortDesc: 'Elevates maxillary sinus floor to make room for upper back implants.',
        overview: 'Gently lifts the sinus membrane in upper molar areas to place bone graft for upper dental implants.',
        benefits: ['Allows placement of long implants in upper jaw'],
        whoNeedsThis: ['Patients missing upper back molars with low sinus floor'],
        symptoms: ['Inadequate upper jawbone height'],
        treatmentOptions: ['Direct / Indirect Sinus Elevation'],
        procedureSteps: [{ title: 'Sinus Elevation & Grafting', desc: 'Gently lifting membrane and placing bone.' }],
        technologyUsed: ['Piezosurgery Sinus Kit'],
        faqs: [{ question: 'Is a sinus lift safe?', answer: 'Yes, when guided by 3D CBCT, it is a highly predictable routine procedure.' }]
      }
    ]
  },
  {
    id: 'emergency-dentistry',
    title: 'Emergency Dentistry',
    slug: 'emergency-dentistry',
    iconName: 'AlertCircle',
    shortDesc: '24/7 same-day emergency relief for severe toothaches, trauma, broken teeth, and swelling.',
    overview: 'Dental emergencies require immediate expert attention. At Dr. Sheekha Shah DENTAL STUDIO, we prioritize same-day emergency appointments for severe tooth pain, dislodged teeth, and acute trauma.',
    benefits: [
      'Same-day priority booking for immediate pain elimination',
      '24/7 direct helpline access for urgent clinical guidance',
      'Advanced trauma management and tooth re-implantation',
      'Comprehensive infection control and emergency prescriptions'
    ],
    whoNeedsThis: [
      'Patients experiencing unmanageable, severe toothache',
      'Individuals who suffered a knocked-out (avulsed) tooth in an accident',
      'Patients with acute facial or gum swelling',
      'Broken crowns, lost fillings, or fractured front teeth'
    ],
    symptoms: [
      'Throbbing pain that keeps you awake at night',
      'Facial or cheek swelling accompanied by fever',
      'Bleeding from mouth trauma that does not stop',
      'A tooth completely knocked out of its socket'
    ],
    treatmentOptions: [
      'Immediate Emergency Pain Relief & RCT Access',
      'Tooth Re-Implantation & Splinting',
      'Emergency Temporary Crown / Filling Placement',
      'Abscess Drainage & Antibiotic Protocol'
    ],
    procedureSteps: [
      { title: 'Immediate Triage', desc: 'Fast-track entry into emergency room suite.' },
      { title: 'Digital Diagnostic', desc: 'Rapid low-dose digital X-ray to pinpoint cause.' },
      { title: 'Pain Relief Intervention', desc: 'Immediate local anesthesia or emergency nerve access.' },
      { title: 'Stabilization', desc: 'Splinting, temporary restoration, or emergency prescription.' }
    ],
    technologyUsed: [
      'Emergency Digital Radiography',
      'Ultra-Fast Local Anesthetic Delivery',
      'Trauma Splinting Wire'
    ],
    faqs: [
      { question: 'What should I do if a tooth is completely knocked out?', answer: 'Do NOT touch the root. Rinse gently in milk or saline, place back in mouth if possible, and come to our clinic immediately within 60 minutes!' },
      { question: 'Do you take walk-in emergency appointments?', answer: 'Yes! Call our emergency line and come directly to the clinic.' }
    ],
    subcategories: [
      {
        id: 'severe-toothache',
        title: 'Severe Toothache',
        slug: 'severe-toothache',
        shortDesc: 'Immediate same-day pain relief for unmanageable tooth discomfort.',
        overview: 'Fast diagnosis and immediate nerve numbing/access to stop severe throbbing toothaches immediately.',
        benefits: ['Instant relief from agony', 'Same-day priority care'],
        whoNeedsThis: ['Anyone with severe toothache'],
        symptoms: ['Unbearable throbbing pain'],
        treatmentOptions: ['Emergency Nerve Debridement'],
        procedureSteps: [{ title: 'Emergency Numbing & Relief', desc: 'Relieving internal tooth pressure instantly.' }],
        technologyUsed: ['Rapid Acting Local Anesthetic'],
        faqs: [{ question: 'How fast can I be seen?', answer: 'We accommodate severe pain cases on the same day within hours.' }]
      },
      {
        id: 'broken-tooth',
        title: 'Broken Tooth',
        slug: 'broken-tooth',
        shortDesc: 'Urgent aesthetic and structural repair for cracked or snapped teeth.',
        overview: 'Restores sharp, jagged broken teeth instantly with composite bonding or temporary crowns.',
        benefits: ['Eliminates sharp tongue irritation', 'Protects exposed pulp'],
        whoNeedsThis: ['Accidents, eating hard foods'],
        symptoms: ['Snapped front or back tooth'],
        treatmentOptions: ['Emergency Bonding / Temp Crown'],
        procedureSteps: [{ title: 'Smoothing & Rebuilding', desc: 'Covering exposed dentin or nerve.' }],
        technologyUsed: ['High-Strength Composite'],
        faqs: [{ question: 'Can a broken piece be re-attached?', answer: 'If brought in clean milk/saline within hours, sometimes yes!' }]
      },
      {
        id: 'dental-trauma',
        title: 'Dental Trauma',
        slug: 'dental-trauma',
        shortDesc: 'Emergency care for sports injuries, knocked-out teeth, and facial impacts.',
        overview: 'Stabilizes dislodged or knocked-out teeth using dental splinting to save natural teeth.',
        benefits: ['Saves knocked-out teeth', 'Prevents permanent root loss'],
        whoNeedsThis: ['Sports injuries, falls'],
        symptoms: ['Knocked-out tooth, bleeding socket'],
        treatmentOptions: ['Tooth Re-Implantation & Splinting'],
        procedureSteps: [{ title: 'Re-implantation & Fiber Splint', desc: 'Fixing tooth back into jaw bone.' }],
        technologyUsed: ['Orthodontic Flexible Splint Wire'],
        faqs: [{ question: 'What is the golden window for re-implantation?', answer: 'Within 30 to 60 minutes after the accident.' }]
      },
      {
        id: 'swelling',
        title: 'Swelling',
        slug: 'swelling',
        shortDesc: 'Urgent treatment for facial abscesses, gum infections, and fever.',
        overview: 'Drains dental abscesses safely and provides systemic antibiotics to control spreading infections.',
        benefits: ['Prevents dangerous infection spread', 'Relieves facial pressure'],
        whoNeedsThis: ['Patients with swollen cheek, jaw, or gums'],
        symptoms: ['Facial swelling, fever, difficulty swallowing'],
        treatmentOptions: ['Emergency Abscess Drainage'],
        procedureSteps: [{ title: 'Drainage & Meds', desc: 'Relieving pus pressure and prescribing emergency antibiotics.' }],
        technologyUsed: ['Sterile Drain Tubes'],
        faqs: [{ question: 'Is dental swelling dangerous?', answer: 'Yes! Facial swelling requires immediate professional treatment.' }]
      },
      {
        id: 'lost-filling',
        title: 'Lost Filling',
        slug: 'lost-filling',
        shortDesc: 'Same-day replacement of fallen fillings to prevent pain and further decay.',
        overview: 'Cleans out exposed cavity and replaces lost filling material before bacteria infect the nerve.',
        benefits: ['Prevents root canal requirement', 'Restores bite'],
        whoNeedsThis: ['Patients whose filling fell out while eating'],
        symptoms: ['Hole in tooth, food packing'],
        treatmentOptions: ['Same-Day Composite Refill'],
        procedureSteps: [{ title: 'Cleaning & Refill', desc: 'Cleaning crater and placing new nano-filling.' }],
        technologyUsed: ['Nano-Hybrid Composite'],
        faqs: [{ question: 'Can I eat after replacing a filling?', answer: 'Yes, composite fillings are light-cured and ready instantly.' }]
      },
      {
        id: 'lost-crown',
        title: 'Lost Crown',
        slug: 'lost-crown',
        shortDesc: 'Immediate recementation or replacement of loose or fallen dental crowns.',
        overview: 'Re-cements clean, intact fallen crowns or places temporary caps to protect sensitive teeth.',
        benefits: ['Restores appearance', 'Eliminates sensitivity'],
        whoNeedsThis: ['Patients with a loose or detached crown'],
        symptoms: ['Cap came off tooth'],
        treatmentOptions: ['Emergency Recementation'],
        procedureSteps: [{ title: 'Recementing', desc: 'Cleaning stump and bonding crown back.' }],
        technologyUsed: ['High-Strength Resin Cement'],
        faqs: [{ question: 'Should I bring my fallen crown to the appointment?', answer: 'Yes! Always bring the fallen crown with you.' }]
      }
    ]
  },
  {
    id: 'preventive-dentistry',
    title: 'Preventive Dentistry',
    slug: 'preventive-dentistry',
    iconName: 'CheckCircle',
    shortDesc: 'Comprehensive oral cancer screenings, sports guards, night guards, and remineralization.',
    overview: 'Our preventive protocols safeguard your smile against future disease, enamel wear, and sports trauma. Prevention is always the gentlest and most affordable form of healthcare.',
    benefits: [
      'Protects tooth enamel from acidic wear and bruxism grinding',
      'Early painless detection of oral mucosal abnormalities and oral cancer',
      'Prevents 90% of dental emergencies through regular monitoring',
      'Custom fabricated night guards and sports mouth protectors'
    ],
    whoNeedsThis: [
      'Everyone seeking long-term natural tooth preservation',
      'Individuals who clench or grind teeth during sleep (bruxism)',
      'Athletes participating in contact sports',
      'Smokers or alcohol users requiring mucosal screening'
    ],
    symptoms: [
      'Waking up with jaw joint stiffness or dull headaches',
      'Chipped or flattened molar cusps from grinding',
      'White or red patches inside cheeks or tongue',
      'Frequent food packing between back teeth'
    ],
    treatmentOptions: [
      'Oral Cancer VelScope® Screenings',
      'Custom Heavy-Duty Bruxism Night Guards',
      'Custom Multi-Layer Sports Guards',
      'Fluoride Remineralization Shield Therapy'
    ],
    procedureSteps: [
      { title: 'VelScope® Fluorescent Screening', desc: 'Painless light screening detecting early cellular changes.' },
      { title: '3D Digital Impression', desc: 'High-precision scanning without messy mouth trays.' },
      { title: 'Custom Appliance Fabrication', desc: 'Precision lab thermoforming for perfect ergonomic fit.' },
      { title: 'Fitting & Guidance', desc: 'Verifying bite comfort and appliance care routine.' }
    ],
    technologyUsed: [
      'VelScope® Mucosal Fluorescence Scanner',
      'iTero® Ergonomic 3D Digital Scanner',
      'Thermoform Vacuum Pressure Machine'
    ],
    faqs: [
      { question: 'What are the signs of teeth grinding (bruxism)?', answer: 'Morning jaw stiffness, flattened teeth edges, frequent tension headaches, and sensitive enamel.' },
      { question: 'How does an oral cancer screening work?', answer: 'It is a quick, non-invasive 2-minute visual and light-fluorescence check performed during routine exams.' }
    ],
    subcategories: [
      {
        id: 'routine-examination',
        title: 'Routine Examination',
        slug: 'routine-examination',
        shortDesc: 'Thorough biannual 3D visual and digital assessment of teeth and soft tissue.',
        overview: 'Comprehensive checkup catching microscopic decay and early gum disease before symptoms start.',
        benefits: ['Complete peace of mind', 'Catches silent dental problems early'],
        whoNeedsThis: ['All patients twice a year'],
        symptoms: ['Maintenance screening'],
        treatmentOptions: ['Comprehensive 3D Examination'],
        procedureSteps: [{ title: '3D Scan & Inspection', desc: 'Checking teeth, fillings, and gums.' }],
        technologyUsed: ['Intraoral HD Camera'],
        faqs: [{ question: 'How long does a routine exam take?', answer: 'About 20 to 30 minutes.' }]
      },
      {
        id: 'professional-cleaning',
        title: 'Professional Cleaning',
        slug: 'professional-cleaning',
        shortDesc: 'Ultrasonic hygiene session to remove stubborn plaque, calculus, and stains.',
        overview: 'Painless ultrasonic hygiene keeping your gums firm, fresh, and free from destructive bacterial calculus.',
        benefits: ['Fresh breath', 'Bright smile', 'Prevents gum disease'],
        whoNeedsThis: ['Everyone every 6 months'],
        symptoms: ['Tartar buildup'],
        treatmentOptions: ['Ultrasonic Scaling & Polish'],
        procedureSteps: [{ title: 'Scaling & Polish', desc: 'Vibrational water-jet cleaning.' }],
        technologyUsed: ['EMS Piezon Swiss Scaler'],
        faqs: [{ question: 'Does professional cleaning hurt?', answer: 'No, ultrasonic tools are gentle and comfortable.' }]
      },
      {
        id: 'oral-cancer-screening',
        title: 'Oral Cancer Screening',
        slug: 'oral-cancer-screening',
        shortDesc: 'Painless 2-minute fluorescent light check detecting abnormal mucosal tissues.',
        overview: 'Detects microscopic cellular changes in tongue, cheeks, and floor of mouth years before visual symptoms show.',
        benefits: ['Life-saving early detection', 'Non-invasive 2-minute check'],
        whoNeedsThis: ['Adults over 18, smokers, alcohol users'],
        symptoms: ['Red/white spots or non-healing mouth sores'],
        treatmentOptions: ['VelScope® Fluorescence Scan'],
        procedureSteps: [{ title: 'Light Scan', desc: 'Illuminating oral tissues with specialized light.' }],
        technologyUsed: ['VelScope® Mucosal Imaging'],
        faqs: [{ question: 'Is the screening painful?', answer: 'Not at all, it is purely a special blue light check.' }]
      },
      {
        id: 'fluoride-application',
        title: 'Fluoride Application',
        slug: 'fluoride-application',
        shortDesc: 'Professional high-grade fluoride varnish that strengthens weak enamel.',
        overview: 'Remineralizes microscopic enamel erosion and reduces sensitivity to cold temperatures.',
        benefits: ['Reverses early decay', 'Stops cold sensitivity'],
        whoNeedsThis: ['Patients with sensitivity or high caries risk'],
        symptoms: ['Cold air/water sensitivity'],
        treatmentOptions: ['Professional Fluoride Varnish'],
        procedureSteps: [{ title: 'Varnish Paint', desc: 'Painting concentrated fluoride over teeth.' }],
        technologyUsed: ['High-Potency Fluoride Gel'],
        faqs: [{ question: 'How often should fluoride be applied?', answer: 'Once or twice a year.' }]
      },
      {
        id: 'night-guards',
        title: 'Night Guards',
        slug: 'night-guards',
        shortDesc: 'Custom-fitted appliances to protect teeth from sleep clenching and grinding.',
        overview: 'Prevents enamel fracture, jaw joint pain, and muscle tension caused by nocturnal bruxism.',
        benefits: ['Protects enamel from wear', 'Relieves morning jaw headaches'],
        whoNeedsThis: ['Night teeth grinders (bruxism)'],
        symptoms: ['Morning jaw soreness, flattened teeth'],
        treatmentOptions: ['Custom Dual-Laminate Night Guard'],
        procedureSteps: [{ title: '3D Scan & Guard Delivery', desc: 'Printing custom comfortable guard.' }],
        technologyUsed: ['3D Lab Thermoforming'],
        faqs: [{ question: 'Is a night guard comfortable to sleep in?', answer: 'Yes! Custom 3D fitted guards fit snugly and comfortably.' }]
      },
      {
        id: 'sports-guards',
        title: 'Sports Guards',
        slug: 'sports-guards',
        shortDesc: 'Heavy-duty multi-layer custom mouthguards for athletic collision protection.',
        overview: 'Absorbs heavy impacts to lips, teeth, and jaw joints during contact sports activities.',
        benefits: ['Prevents broken teeth', 'Reduces concussion impact force'],
        whoNeedsThis: ['Athletes in martial arts, basketball, soccer, cricket'],
        symptoms: ['Sports participation'],
        treatmentOptions: ['Custom Multi-Layer Sports Guard'],
        procedureSteps: [{ title: '3D Impression & Custom Guard', desc: 'Crafting shock-absorbing mouthguard.' }],
        technologyUsed: ['EVA Multi-Layer Polymer'],
        faqs: [{ question: 'Why are custom guards better than store-bought boil-and-bite?', answer: 'Custom guards provide 10x better protection, speech capability, and breathing comfort.' }]
      }
    ]
  }
];

export function getCategoryBySlug(slug: string): TreatmentCategory | undefined {
  return TREATMENT_CATEGORIES.find(cat => cat.slug === slug || cat.id === slug);
}

export function getSubcategoryBySlug(categorySlug: string, subcategorySlug: string): { category: TreatmentCategory; subcategory: TreatmentSubcategory } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const subcategory = category.subcategories.find(sub => sub.slug === subcategorySlug || sub.id === subcategorySlug);
  if (!subcategory) return undefined;
  return { category, subcategory };
}
