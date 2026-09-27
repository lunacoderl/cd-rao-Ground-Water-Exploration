import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'ground-water-survey',
    slug: 'ground-water-survey',
    title: 'Ground Water Survey',
    badge: 'Core Geological Expertise',
    shortDescription: 'Scientific survey for sustainable groundwater sources and aquifer depth mapping.',
    heroImage: '/hero-bg.png',
    overview: {
      paragraph1: 'Ground water survey is the scientific exploration to locate potential aquifers, determine subsurface water strata, and identify sustainable borewell points. Utilizing specialized geophysical tools, we measure the electrical resistivity of soil and rock layers to detect underground water saturation.',
      paragraph2: 'Conducted under the direct supervision of Geologist Chigurupati Durga Rao (M.Sc Geology, recognized by Ground Water and Water Audit Department, Govt. of A.P.), our surveys eliminate guesswork and minimize dry borewell risks for agricultural lands, residential apartments, and commercial projects across Visakhapatnam and surrounding districts.',
      features: [
        'Accurate aquifer depth & thickness mapping',
        'Scientific resistivity curve analysis',
        'Prevention of expensive dry borewell drilling',
        'Comprehensive post-survey recommendation report'
      ],
      visualImage: '/images/resistivity-survey.jpg'
    },
    features: [
      {
        icon: 'Droplets',
        title: 'Groundwater Survey',
        description: 'Pinpointing underground aquifers and continuous water-bearing strata.'
      },
      {
        icon: 'Activity',
        title: 'Scientific Analysis',
        description: 'Resistivity and frequency measurement for rock and fracture mapping.'
      },
      {
        icon: 'Layers',
        title: 'Suitable for All Land Types',
        description: 'Proven across red soil, rocky terrain, coastal sands, and clay formations.'
      },
      {
        icon: 'Award',
        title: 'High Success Rate',
        description: 'Verified track record of sustainable yields across Visakhapatnam region.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Initial Discussion',
        description: 'Understanding site topography, property boundaries, and estimated water requirements.'
      },
      {
        step: '02',
        title: 'Site Visit',
        description: 'On-site geological inspection and surface reconnaissance to assess soil formations.'
      },
      {
        step: '03',
        title: 'Field Survey',
        description: 'Deploying electrodes, sensors, and 3D scanning instruments to capture subsurface data.'
      },
      {
        step: '04',
        title: 'Data / Field Analysis',
        description: 'Plotting resistivity sounding graphs and cross-layer anomaly curves on the spot.'
      },
      {
        step: '05',
        title: 'Bore Point Suggestion',
        description: 'Marking the optimal drilling coordinates with recommended casing depth and expected yield.'
      }
    ],
    equipment: [
      {
        name: '3D Scanning Device',
        role: 'Sub-surface Imaging',
        image: '/images/3d-field-scan.jpg',
        description: 'Multi-frequency detector analyzing deep underground dielectric and electromagnetic variations.'
      },
      {
        name: 'Resistivity Meter Kit',
        role: 'Geophysical Survey',
        image: '/images/equipment-kit.jpg',
        description: 'Digital exploration instrument with copper probes measuring rock electrical resistivity.'
      },
      {
        name: 'GPS Field Mapping',
        role: 'Accurate Coordinates',
        image: '/images/bore-point-found.jpg',
        description: 'High-precision GPS logging to pinpoint exact drill rig positioning.'
      },
      {
        name: 'Layer Analysis Software',
        role: 'Interpretation Engine',
        image: '/images/resistivity-survey.jpg',
        description: 'Field-tested geological curve interpretation software indicating fracture zones.'
      }
    ],
    whyItMatters: {
      title: 'Why Ground Water Survey is Important?',
      points: [
        'Identifies potential water zones before you spend thousands on drilling rigs',
        'Drastically reduces failed and dry drilling attempts in difficult hard-rock terrains',
        'Calculates exact recommended drilling depth to avoid premature stopping or over-drilling',
        'Provides essential guidance for agricultural irrigation, residential apartments, and factories'
      ],
      waterImage: '/images/official-brochure.jpg'
    },
    gallery: [
      { url: '/images/cd-rao-field.jpg', caption: 'Geologist C.D. Rao calibrating handheld detector' },
      { url: '/images/resistivity-survey.jpg', caption: 'Resistivity meter survey in agricultural field' },
      { url: '/images/equipment-kit.jpg', caption: 'Digital exploration kit with sensors and cables' },
      { url: '/images/3d-field-scan.jpg', caption: '3D scanning in field conditions' },
      { url: '/images/bore-point-found.jpg', caption: 'Identified borewell marker point' }
    ],
    faqs: [
      {
        question: 'How long does the ground water survey take?',
        answer: 'A standard survey for an agricultural land or residential plot takes between 1.5 to 3 hours depending on the plot size and terrain complexity.'
      },
      {
        question: 'What is the accuracy level of the survey?',
        answer: 'By combining geophysical electrical resistivity with modern 3D field scanners, our scientific methodology offers significantly higher accuracy compared to traditional water divining.'
      },
      {
        question: 'Is this survey suitable for all types of soil and land?',
        answer: 'Yes. We conduct surveys on red soils, black cotton soils, hard granite bedrock, coastal sands, and hilly terrain across Visakhapatnam, Anakapalle, and Vizianagaram.'
      },
      {
        question: 'Will you provide a written report?',
        answer: 'Yes, a verbal summary and physical point marking are done on the spot, followed by an official consultation report detailing depth, rock layers, and estimated yield.'
      },
      {
        question: 'What should I prepare before the survey team arrives?',
        answer: 'Ensure property boundaries are clearly marked, someone familiar with the land is present, and clear path access for placing cables and sensor probes.'
      }
    ]
  },
  {
    id: 'borewell-point-identification',
    slug: 'borewell-point-identification',
    title: 'Borewell Point Identification',
    badge: 'Precise Point Pinpointing',
    shortDescription: 'Accurate bore point identification for drilling with depth and casing recommendations.',
    heroImage: '/hero-bg.png',
    overview: {
      paragraph1: 'Drilling a borewell without scientific point identification is a gamble that frequently leads to dry holes, wasted drilling fees, and structural damage to properties. Our borewell point identification uses geological soundings to pinpoint the exact location with highest water potential.',
      paragraph2: 'We evaluate subsurface fracture systems, joint intersections, and aquifer horizons. Rather than relying on unscientific guesswork, Geologist C.D. Rao measures electrical potential differences to establish the optimal drilling coordinates.',
      features: [
        'Precise GPS-tagged physical drill point marking on site',
        'Expected aquifer depth intervals (e.g., 180 ft, 320 ft, 450 ft)',
        'Recommended casing pipe depth to prevent collapse',
        'Advice on suitable drilling rig type (DTH / Rotary)'
      ],
      visualImage: '/images/bore-point-found.jpg'
    },
    features: [
      {
        icon: 'MapPin',
        title: 'Pinpoint Accuracy',
        description: 'Physical pegging and GPS coordinates for direct rig placement.'
      },
      {
        icon: 'Compass',
        title: 'Geological Triangulation',
        description: 'Multi-angle cross-verification to confirm aquifer continuity.'
      },
      {
        icon: 'ShieldCheck',
        title: 'Casing Guidance',
        description: 'Precise depth recommendation to safeguard against topsoil cave-ins.'
      },
      {
        icon: 'CheckCircle',
        title: 'Rig Coordination',
        description: 'Practical advice shared directly with your drilling contractor.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Site Perimeter Review',
        description: 'Analyzing legal setback distances, building foundations, and local drainage.'
      },
      {
        step: '02',
        title: 'Multi-Point Soundings',
        description: 'Testing 3 to 5 candidate points across the property using scanning equipment.'
      },
      {
        step: '03',
        title: 'Comparative Analysis',
        description: 'Comparing resistivity curves to determine the point with superior saturation.'
      },
      {
        step: '04',
        title: 'Physical Ground Marking',
        description: 'Securing the exact drill spot with stone or wooden pegs and photo documentation.'
      },
      {
        step: '05',
        title: 'Drilling Specification',
        description: 'Providing written specs on bit diameter, expected depths, and casing meters.'
      }
    ],
    equipment: [
      {
        name: 'Digital Resistivity Unit',
        role: 'Anomaly Detection',
        image: '/images/equipment-kit.jpg',
        description: 'Detects conductive groundwater zones trapped between impermeable hard rock.'
      },
      {
        name: '3D Ground Scanner',
        role: 'Field Verification',
        image: '/images/3d-field-scan.jpg',
        description: 'Handheld scanner providing immediate visual feedback on subsurface variations.'
      },
      {
        name: 'Electrode Array Setup',
        role: 'Depth Profiling',
        image: '/images/resistivity-survey.jpg',
        description: 'Wenner and Schlumberger electrode configurations for deep sounding.'
      },
      {
        name: 'Bore Point Marker Hardware',
        role: 'Site Staking',
        image: '/images/bore-point-found.jpg',
        description: 'Heavy-duty markers placed for the drilling rig operator.'
      }
    ],
    whyItMatters: {
      title: 'Why Accurate Point Identification is Crucial',
      points: [
        'Drilling costs in Visakhapatnam average ₹1,00,000 to ₹3,00,000 per attempt',
        'A difference of just 5 to 10 feet on the surface can mean hitting water vs solid dry granite',
        'Ensures your borewell stays far away from contamination sources and septic soakaways',
        'Maximizes the long-term lifespan and recharge capacity of your water source'
      ],
      waterImage: '/images/official-brochure.jpg'
    },
    gallery: [
      { url: '/images/bore-point-found.jpg', caption: 'Point marked in agricultural field' },
      { url: '/images/cd-rao-field.jpg', caption: 'Geologist verifying coordinates' },
      { url: '/images/resistivity-survey.jpg', caption: 'Field sounding setup' },
      { url: '/images/equipment-kit.jpg', caption: 'Instrument calibration' }
    ],
    faqs: [
      {
        question: 'Can you identify more than one point on large plots?',
        answer: 'Yes, on larger agricultural estates or layout lands we can identify primary and backup points, or design a multi-bore recharge system.'
      },
      {
        question: 'What if my neighbor drilled 500 ft and got no water?',
        answer: 'Subsurface geology is not uniform. Fractures and weathered zones are directional. Our survey identifies whether your property contains water-bearing joints that were missed next door.'
      },
      {
        question: 'Do you guarantee water?',
        answer: 'As certified geologists, we provide scientific probabilistic assessment based on physical resistivity data. Nature cannot be 100% controlled, but our scientific method reduces failure rates to the barest minimum.'
      }
    ]
  },
  {
    id: 'geophysical-survey',
    slug: 'geophysical-survey',
    title: 'Geophysical Survey',
    badge: 'Advanced Subsurface Analytics',
    shortDescription: 'Advanced geophysical methods for subsurface soil and rock formation analysis.',
    heroImage: '/hero-bg.png',
    overview: {
      paragraph1: 'Geophysical surveying investigates the physical properties of the earth’s crust through surface measurements. By measuring electrical resistivity, induced polarization, and electromagnetic responses, we obtain a vertical profile of subsurface geological strata.',
      paragraph2: 'This survey is invaluable for infrastructure engineers, commercial construction projects, mining assessments, and deep groundwater exploration. It maps bedrock depth, weathering profiles, fault lines, and fracture density without invasive excavation.',
      features: [
        'Vertical Electrical Sounding (VES) profiling',
        'Lithological boundary demarcation',
        'Fault and shear zone mapping',
        'Structural foundation bedrock depth estimation'
      ],
      visualImage: '/images/resistivity-survey.jpg'
    },
    features: [
      {
        icon: 'Activity',
        title: 'Electrical Resistivity',
        description: 'VES method to differentiate dry rock, weathered rock, and water-saturated strata.'
      },
      {
        icon: 'BarChart3',
        title: 'Apparent Resistivity Curves',
        description: 'Quantitative computational modeling of subsurface formations.'
      },
      {
        icon: 'Cpu',
        title: 'Digital Logging',
        description: 'Microprocessor-controlled measurements ensuring noise-free data.'
      },
      {
        icon: 'Layers',
        title: 'Strata Stratification',
        description: 'Clear separation of topsoil, weathered zone, fractured zone, and basement rock.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Survey Design',
        description: 'Selecting survey profile line and electrode spacing based on target depth (up to 800+ ft).'
      },
      {
        step: '02',
        title: 'Electrode Deployment',
        description: 'Setting steel and copper current and potential electrodes along the profile.'
      },
      {
        step: '03',
        title: 'Signal Acquisition',
        description: 'Injecting constant DC current and measuring potential drop across the ground.'
      },
      {
        step: '04',
        title: 'Data Inversion',
        description: 'Processing apparent resistivity into true resistivity and layer thickness models.'
      },
      {
        step: '05',
        title: 'Geological Cross-Section',
        description: 'Delivering detailed lithological interpretation chart with technical findings.'
      }
    ],
    equipment: [
      {
        name: 'Digital Resistivity Meter',
        role: 'Current & Voltage Measurement',
        image: '/images/equipment-kit.jpg',
        description: 'High-precision instrument with automated stacking to filter external noise.'
      },
      {
        name: 'Calibrated Cable Drums',
        role: 'Long-Baseline Deployment',
        image: '/images/resistivity-survey.jpg',
        description: 'Heavy duty insulated wire reels capable of hundreds of meters spread.'
      },
      {
        name: 'Copper / Steel Electrodes',
        role: 'Ground Coupling',
        image: '/images/equipment-kit.jpg',
        description: 'Low contact resistance rods driven into ground for maximum signal transmission.'
      },
      {
        name: 'Survey Interpretation Software',
        role: 'Curve Fitting',
        image: '/images/3d-field-scan.jpg',
        description: 'Software generating 2D and 3D subsurface models from field resistivity.'
      }
    ],
    whyItMatters: {
      title: 'Why Geophysical Surveys are Essential',
      points: [
        'Crucial for large commercial compounds, educational institutions, and industrial plants',
        'Identifies subsurface cavernous voids, weak shear zones, and high-salinity pockets',
        'Prevents drilling into saline or heavily mineralized unpotable water zones',
        'Provides engineering data for heavy structural foundations and retaining walls'
      ],
      waterImage: '/images/official-brochure.jpg'
    },
    gallery: [
      { url: '/images/resistivity-survey.jpg', caption: 'Geophysical survey array setup' },
      { url: '/images/equipment-kit.jpg', caption: 'Resistivity instrument ready for testing' },
      { url: '/images/cd-rao-field.jpg', caption: 'Field geologists recording measurement curves' }
    ],
    faqs: [
      {
        question: 'What is Vertical Electrical Sounding (VES)?',
        answer: 'VES is a geophysical method where current is introduced into the ground through electrodes. As electrode spacing expands, electric current penetrates deeper, revealing electrical resistance at varying depths.'
      },
      {
        question: 'How deep can a geophysical survey penetrate?',
        answer: 'Depending on land space available for electrode spread, we can survey from 50 feet down to 1000+ feet deep.'
      }
    ]
  },
  {
    id: '3d-earth-scanning',
    slug: '3d-earth-scanning',
    title: '3D Earth Scanning',
    badge: 'Modern Technology',
    shortDescription: 'Modern 3D scanning technology for comprehensive subsurface underground visualization.',
    heroImage: '/hero-bg.png',
    overview: {
      paragraph1: '3D Earth Scanning represents the forefront of modern groundwater exploration. By combining electromagnetic induction with digital frequency sensing, the scanner builds a three-dimensional visual model of underground density differences.',
      paragraph2: 'This modern equipment allows Geologist C.D. Rao to inspect underground fractures, water flows, and cavernous structures in real-time on a digital screen, providing landowners with clear, visible proof of water zones before drilling.',
      features: [
        'Real-time digital screen visualization of underground anomalies',
        'Direct identification of water-bearing fracture paths',
        'High portability for remote hills, tight residential plots, and farms',
        'Immediate visual confirmation for property owners'
      ],
      visualImage: '/images/3d-field-scan.jpg'
    },
    features: [
      {
        icon: 'Scan',
        title: '3D Sub-surface Imaging',
        description: 'Volumetric visualization of underground geological strata and moisture.'
      },
      {
        icon: 'Layers',
        title: 'Accurate Layer Identification',
        description: 'Distinguishes weathered mantle, fractured rock, and solid bedrock.'
      },
      {
        icon: 'TrendingUp',
        title: 'Better Borewell Success Rate',
        description: 'Drastically cuts down dry bore risks through visual confirmation.'
      },
      {
        icon: 'Check',
        title: 'Ideal for All Types of Land',
        description: 'Rapid scanning on agricultural estates, tight urban layouts, and hilly terrain.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Scanner Calibration',
        description: 'Tuning the instrument frequency to local mineral and geological background.'
      },
      {
        step: '02',
        title: 'Grid Traversal',
        description: 'Walking systematically across the property in parallel survey lanes.'
      },
      {
        step: '03',
        title: 'Signal Detection',
        description: 'Monitoring digital signal peaks indicating conductivity and moisture.'
      },
      {
        step: '04',
        title: 'Cross-Verification',
        description: 'Conducting perpendicular scan lines across the detected anomaly.'
      },
      {
        step: '05',
        title: 'Point Pinpointing',
        description: 'Pinpointing the epicenter of the underground water stream with depth estimate.'
      }
    ],
    equipment: [
      {
        name: '3D Earth Scanner / Water Detector',
        role: 'Electromagnetic Field Scanner',
        image: '/images/water-detector.jpg',
        description: 'High-frequency handheld exploration device with directional antenna arrays.'
      },
      {
        name: 'Mobile Display Receiver',
        role: 'Real-Time Graphic Output',
        image: '/images/3d-field-scan.jpg',
        description: 'Color screen showing graphic curves and anomaly color maps.'
      },
      {
        name: 'Ground Sensor Probes',
        role: 'Field Coupling',
        image: '/images/equipment-kit.jpg',
        description: 'Sensors detecting micro-variations in subsurface natural fields.'
      },
      {
        name: 'Geological Analysis Tablet',
        role: 'Field Interpretation',
        image: '/images/cd-rao-field.jpg',
        description: 'Assisting in correlating 3D anomalies with local geological maps.'
      }
    ],
    whyItMatters: {
      title: 'Why 3D Earth Scanning is a Game Changer',
      points: [
        'See the subsurface condition with your own eyes on the field screen',
        'Ideal for tight urban residential plots where long wire arrays cannot be spread',
        'Quickly screens large acreage lands to locate the most promising survey zones',
        'Works in conjunction with resistivity methods for 100% confidence'
      ],
      waterImage: '/images/official-brochure.jpg'
    },
    gallery: [
      { url: '/images/3d-field-scan.jpg', caption: '3D scanning in field' },
      { url: '/images/water-detector.jpg', caption: 'Water detector machine calibration' },
      { url: '/images/cd-rao-field.jpg', caption: 'Geologist operating 3D device' }
    ],
    faqs: [
      {
        question: 'How is 3D scanning different from traditional resistivity?',
        answer: 'Traditional resistivity uses physical wires and electrodes to measure electrical resistance, while 3D earth scanning uses electromagnetic and frequency sensing to quickly map directional anomalies without laying hundreds of meters of wire.'
      },
      {
        question: 'Can 3D scanning tell how many inches of water will be found?',
        answer: 'It indicates the intensity and width of water-bearing fractured zones. While exact water yield depends on aquifer pressure and seasonal recharge, it provides a strong relative indicator of yield potential.'
      }
    ]
  },
  {
    id: 'yield-test',
    slug: 'yield-test',
    title: 'Yield Test',
    badge: 'Flow Rate Measurement',
    shortDescription: 'Measuring flow rate to ensure sustainability and water output volume of borewells.',
    heroImage: '/hero-bg.png',
    overview: {
      paragraph1: 'A borewell yield test measures the actual discharge rate and recovery time of a newly drilled or existing borewell. Knowing your borewell yield in gallons or liters per hour allows proper pump sizing, irrigation planning, and residential tank management.',
      paragraph2: 'Using V-notch weirs, digital flow meters, or volumetric timing under controlled pumping cycles, we determine the safe sustainable pumping rate so your borewell never runs dry or burns out submersible motors.',
      features: [
        'Accurate discharge measurement in liters/hour and GPH',
        'Static water level and drawdown measurement',
        'Aquifer recovery rate calculation',
        'Custom pump horsepower (HP) and stage recommendation'
      ],
      visualImage: '/images/resistivity-survey.jpg'
    },
    features: [
      {
        icon: 'Gauge',
        title: 'Discharge Testing',
        description: 'V-notch weir or volumetric flow measurement under steady pumping.'
      },
      {
        icon: 'Clock',
        title: 'Drawdown & Recovery',
        description: 'Monitoring how fast the water level drops and recharges.'
      },
      {
        icon: 'Zap',
        title: 'Pump Sizing',
        description: 'Exact HP, stage, and installation depth recommendation for motors.'
      },
      {
        icon: 'FileText',
        title: 'Yield Certificate',
        description: 'Official yield test certificate for bank loans, layouts, and industries.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Static Level Measurement',
        description: 'Recording resting water depth inside the bore casing before pumping starts.'
      },
      {
        step: '02',
        title: 'Continuous Pumping Test',
        description: 'Pumping water at maximum rate for a sustained period (1 to 4 hours).'
      },
      {
        step: '03',
        title: 'Flow Rate Monitoring',
        description: 'Measuring water discharge at regular 5-minute intervals.'
      },
      {
        step: '04',
        title: 'Recovery Observation',
        description: 'Shutting off pump and logging the exact time taken for water to return to original level.'
      },
      {
        step: '05',
        title: 'Technical Calculation',
        description: 'Delivering sustainable pumping hours and motor specification.'
      }
    ],
    equipment: [
      {
        name: 'V-Notch Weir Apparatus',
        role: 'Precision Flow Measurement',
        image: '/images/equipment-kit.jpg',
        description: 'Standard hydrological equipment for accurate open-discharge measurement.'
      },
      {
        name: 'Water Level Sounder',
        role: 'Depth Measurement',
        image: '/images/bore-point-found.jpg',
        description: 'Electronic beeper probe to measure exact water surface in bore pipe.'
      },
      {
        name: 'Digital Flow Meters',
        role: 'Volumetric Rate Logging',
        image: '/images/3d-field-scan.jpg',
        description: 'High-precision inline sensors recording liters per minute.'
      },
      {
        name: 'Pressure Gauges',
        role: 'Head Calculation',
        image: '/images/resistivity-survey.jpg',
        description: 'Calibrated gauges to measure discharge head pressure.'
      }
    ],
    whyItMatters: {
      title: 'Why You Must Perform a Yield Test',
      points: [
        'Prevents buying oversized motors that run dry, overheat, and burn out repeatedly',
        'Helps farmers calculate exact irrigation capacity for drip or sprinkler systems',
        'Mandatory requirement for commercial approvals, apartments, and industries',
        'Diagnoses whether an old borewell can be revived with flushing or deepening'
      ],
      waterImage: '/images/official-brochure.jpg'
    },
    gallery: [
      { url: '/images/official-brochure.jpg', caption: 'High yield gushing water' },
      { url: '/images/bore-point-found.jpg', caption: 'Borewell head inspection' }
    ],
    faqs: [
      {
        question: 'When should a yield test be conducted?',
        answer: 'Immediately after drilling (before installing the permanent pump) or when an existing borewell begins to experience declining water output.'
      },
      {
        question: 'What is considered a good borewell yield for domestic use?',
        answer: 'For an independent house, 500 to 1,000 liters per hour (approx 1 to 1.5 inches continuous flow) is generally sufficient. For apartments or farming, 2,000 to 6,000+ LPH is preferred.'
      }
    ]
  },
  {
    id: 'water-quality-assessment',
    slug: 'water-quality-assessment',
    title: 'Water Quality Assessment',
    badge: 'Potability & Safety',
    shortDescription: 'Testing and analyzing groundwater quality for safe drinking, irrigation, and industrial use.',
    heroImage: '/hero-bg.png',
    overview: {
      paragraph1: 'Groundwater quality varies dramatically across different geological strata. Coastal areas often suffer from saline water intrusion, while crystalline rock belts may contain excessive fluoride, iron, or hardness.',
      paragraph2: 'Our water quality assessment analyzes physical, chemical, and biological parameters. We advise clients on potability, filtration requirements, and mineral treatment to protect health, plumbing fixtures, and crops.',
      features: [
        'TDS (Total Dissolved Solids) and pH testing',
        'Hardness, salinity, and mineral content testing',
        'Iron, fluoride, and chloride evaluation',
        'Custom recommendation for RO, softeners, or iron removal filters'
      ],
      visualImage: '/images/cd-rao-field.jpg'
    },
    features: [
      {
        icon: 'TestTube',
        title: 'TDS & Salinity',
        description: 'Checking total dissolved solids and marine intrusion levels.'
      },
      {
        icon: 'Shield',
        title: 'Safety Standards',
        description: 'Benchmarking against BIS (Bureau of Indian Standards) drinking water norms.'
      },
      {
        icon: 'Droplet',
        title: 'Agricultural Suitability',
        description: 'Analyzing SAR (Sodium Adsorption Ratio) for soil and crop safety.'
      },
      {
        icon: 'Filter',
        title: 'Treatment Advice',
        description: 'Guidance on proper filtration, softening, and aeration systems.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Sample Collection',
        description: 'Sterile sampling after continuous pumping to ensure representative aquifer water.'
      },
      {
        step: '02',
        title: 'Field Parameter Testing',
        description: 'Immediate on-site measurement of pH, temperature, and electrical conductivity.'
      },
      {
        step: '03',
        title: 'Laboratory Analysis',
        description: 'Comprehensive chemical testing for hardness, calcium, magnesium, and heavy minerals.'
      },
      {
        step: '04',
        title: 'Result Correlation',
        description: 'Matching chemical profile with surrounding geological strata.'
      },
      {
        step: '05',
        title: 'Recommendation Report',
        description: 'Detailed report with treatment and filter recommendations.'
      }
    ],
    equipment: [
      {
        name: 'Digital TDS & EC Meter',
        role: 'Solids & Conductivity',
        image: '/images/equipment-kit.jpg',
        description: 'Calibrated meter for instant salinity and dissolved minerals measurement.'
      },
      {
        name: 'Precision pH Tester',
        role: 'Acidity/Alkalinity',
        image: '/images/3d-field-scan.jpg',
        description: 'Laboratory-grade electronic sensor measuring water pH balance.'
      },
      {
        name: 'Chemical Reagent Kit',
        role: 'Field Titration',
        image: '/images/cd-rao-field.jpg',
        description: 'Field testing kit for rapid detection of hardness and chlorides.'
      },
      {
        name: 'Sterile Sample Containers',
        role: 'Sample Preservation',
        image: '/images/bore-point-found.jpg',
        description: 'Contamination-free containers for laboratory testing.'
      }
    ],
    whyItMatters: {
      title: 'Why Water Quality Testing is Vital in Visakhapatnam',
      points: [
        'Visakhapatnam coastal zones are prone to saline water intrusion if over-pumped',
        'High hardness destroys expensive water heaters, bathroom fittings, and RO membranes',
        'Saline or alkaline water degrades agricultural soil fertility and damages crop yields',
        'Ensures your family consumes healthy, safe water free from toxic mineral spikes'
      ],
      waterImage: '/images/official-brochure.jpg'
    },
    gallery: [
      { url: '/images/cd-rao-field.jpg', caption: 'Water sample collection on site' },
      { url: '/images/official-brochure.jpg', caption: 'Potable water aquifer identification' }
    ],
    faqs: [
      {
        question: 'What is an acceptable TDS for drinking water?',
        answer: 'According to BIS standards, TDS below 300 ppm is considered excellent, 300-600 ppm is good, and 600-900 ppm is fair. Above 1200 ppm requires RO purification.'
      },
      {
        question: 'Can you fix red or yellowish water from my borewell?',
        answer: 'Red/yellowish water usually indicates dissolved iron or clay suspension from the casing zone. We identify the source and recommend appropriate iron removal plants or casing sealing.'
      }
    ]
  },
  {
    id: 'bore-point-checking',
    slug: 'bore-point-checking',
    title: 'Bore Point Checking',
    badge: 'Second Opinion & Verification',
    shortDescription: 'Independent verification of points suggested by others before drilling.',
    heroImage: '/hero-bg.png',
    overview: {
      paragraph1: 'Already got a borewell point marked by a traditional water diviner or another surveyor? Drilling without cross-verification is risky. Our bore point checking service provides an independent scientific second opinion.',
      paragraph2: 'Geologist C.D. Rao evaluates the marked spot using scientific resistivity and 3D scanning. We confirm whether genuine water-bearing fractures exist at that point, recommend slight adjustments (often just a few feet away), or prevent drilling in a guaranteed dry zone.',
      features: [
        'Independent scientific cross-check of previously marked points',
        'Verification of fracture continuity and expected aquifer depth',
        'Honest assessment: confirms good points or saves money on bad points',
        'Adjustment suggestions to maximize yield'
      ],
      visualImage: '/images/water-detector.jpg'
    },
    features: [
      {
        icon: 'SearchCheck',
        title: 'Second Opinion',
        description: 'Unbiased scientific verification before you book a drilling machine.'
      },
      {
        icon: 'AlertTriangle',
        title: 'Dry Hole Prevention',
        description: 'Stopping drilling at points placed over solid dry boulders.'
      },
      {
        icon: 'Sliders',
        title: 'Micro-Adjustments',
        description: 'Shifting points by 5-15 feet to hit the center of the fracture zone.'
      },
      {
        icon: 'Award',
        title: 'Govt. Recognized Geologist',
        description: 'Certified expertise you can rely on with complete confidence.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Inspection of Marked Spot',
        description: 'Reviewing the existing point and asking who identified it and why.'
      },
      {
        step: '02',
        title: 'Sounding Over the Point',
        description: 'Running electrical resistivity directly centered on the marked peg.'
      },
      {
        step: '03',
        title: 'Perpendicular Scans',
        description: 'Scanning 10 to 20 feet on either side to check for fracture boundary edges.'
      },
      {
        step: '04',
        title: 'Yield Potential Evaluation',
        description: 'Determining if the point holds adequate water or is merely moist topsoil.'
      },
      {
        step: '05',
        title: 'Final Verdict',
        description: 'Clear approval to drill, or an optimized alternative point marked.'
      }
    ],
    equipment: [
      {
        name: '3D Point Scanner',
        role: 'Anomaly Checking',
        image: '/images/3d-field-scan.jpg',
        description: 'Instant verification of fracture presence beneath the marker.'
      },
      {
        name: 'Resistivity Verification Kit',
        role: 'Depth Sounding',
        image: '/images/equipment-kit.jpg',
        description: 'Confirms vertical continuity of the water-bearing zone.'
      },
      {
        name: 'Digital Compass & Clinometer',
        role: 'Dip & Strike Measurement',
        image: '/images/cd-rao-field.jpg',
        description: 'Measures angle of rock layers to ensure drill intersects aquifer.'
      },
      {
        name: 'Verification Marker Tags',
        role: 'Physical Certification',
        image: '/images/bore-point-found.jpg',
        description: 'Signed marker peg indicating verified drilling approval.'
      }
    ],
    whyItMatters: {
      title: 'Why Point Verification Saves Your Hard-Earned Money',
      points: [
        'Traditional dowsing with sticks or coconuts has high failure rates in hard rock',
        'Verification fee is less than 5% of what a single dry borewell costs to drill',
        'Ensures you drill with complete peace of mind and maximum confidence',
        'Helps optimize drilling depth so the rig does not stop prematurely'
      ],
      waterImage: '/images/official-brochure.jpg'
    },
    gallery: [
      { url: '/images/water-detector.jpg', caption: 'Point checking with 3D scanner' },
      { url: '/images/bore-point-found.jpg', caption: 'Verified bore point marker' }
    ],
    faqs: [
      {
        question: 'What if the point identified by my previous surveyor is bad?',
        answer: 'If the existing point is over dry solid rock, we will inform you honestly and immediately scan your land to locate the best genuine water-bearing point available.'
      },
      {
        question: 'Do you charge extra if you have to mark a new point?',
        answer: 'No, our checking service includes marking an alternative point on the same property if the original one fails our scientific verification.'
      }
    ]
  },
  {
    id: 'drilling-techniques-guidance',
    slug: 'drilling-techniques-guidance',
    title: 'Drilling Techniques Guidance',
    badge: 'Expert Supervision',
    shortDescription: 'Professional advice on drilling methods, rig selection, and casing pipe installation.',
    heroImage: '/hero-bg.png',
    overview: {
      paragraph1: 'Even with an accurate borewell point, improper drilling methods or incorrect casing installation can ruin a good water source. Cave-ins, silt intrusion, and casing failure frequently cause borewells to choke within weeks.',
      paragraph2: 'Geologist C.D. Rao provides technical oversight on the right drilling rig selection (DTH Hammer, Mud Rotary, or Combination), recommended drill bit diameter, casing pipe gauge, slotted strainer placements, and gravel pack filters.',
      features: [
        'Selection between DTH (Down-the-Hole) and Rotary drilling rigs',
        'Casing pipe depth and quality specifications (PVC / MS steel)',
        'Slotted filter pipe placement for sand and silt prevention',
        'Borewell development and flushing protocols'
      ],
      visualImage: '/images/bore-point-found.jpg'
    },
    features: [
      {
        icon: 'Wrench',
        title: 'Rig Selection',
        description: 'DTH for hard crystalline rock vs Rotary for coastal sand and silt.'
      },
      {
        icon: 'Shield',
        title: 'Casing Quality',
        description: 'Preventing collapsed borewalls and surface water contamination.'
      },
      {
        icon: 'Layers',
        title: 'Gravel Packing',
        description: 'Selection of pea gravel size to filter out fine silts and mud.'
      },
      {
        icon: 'Zap',
        title: 'Bore Flushing',
        description: 'High-pressure air compressor development to maximize flow.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Strata Review',
        description: 'Reviewing anticipated overburden, clay thickness, and hard rock depth.'
      },
      {
        step: '02',
        title: 'Rig & Bit Specification',
        description: 'Recommending 6.5 inch or larger bit and appropriate compressor capacity.'
      },
      {
        step: '03',
        title: 'Casing Installation Depth',
        description: 'Instructing driller to seal casing at least 5-10 ft into solid bedrock.'
      },
      {
        step: '04',
        title: 'Water Strike Logging',
        description: 'Advising driller on monitoring water strike depths during hammer action.'
      },
      {
        step: '05',
        title: 'Air Flushing & Cleaning',
        description: 'Supervising high-pressure air cleaning until crystal-clear water discharges.'
      }
    ],
    equipment: [
      {
        name: 'Lithological Inspection Tools',
        role: 'Cuttings Analysis',
        image: '/images/cd-rao-field.jpg',
        description: 'Examining rock cuttings from the drilling rig to identify water horizons.'
      },
      {
        name: 'Depth Counter & Tape',
        role: 'Depth Verification',
        image: '/images/bore-point-found.jpg',
        description: 'Ensuring drilling contractor reaches the exact agreed target depth.'
      },
      {
        name: 'Water Conductivity Probe',
        role: 'Water Quality Check',
        image: '/images/equipment-kit.jpg',
        description: 'Checking water quality as each successive aquifer layer is struck.'
      },
      {
        name: 'Drilling Specification Sheet',
        role: 'Contractor Handout',
        image: '/images/official-brochure.jpg',
        description: 'Clear written instructions handed directly to your borewell driller.'
      }
    ],
    whyItMatters: {
      title: 'Why Drilling Guidance Protects Your Investment',
      points: [
        'Drilling contractors frequently push to drill unnecessarily deep to increase their bill',
        'Inadequate casing allows surface dirty water and mud to seep into your clean drinking aquifer',
        'Drilling with wrong hammer pressure can crack the rock and divert the water stream away',
        'Proper air flushing increases the initial yield of your borewell by up to 30%'
      ],
      waterImage: '/images/official-brochure.jpg'
    },
    gallery: [
      { url: '/images/bore-point-found.jpg', caption: 'Drilling point prepared for rig' },
      { url: '/images/official-brochure.jpg', caption: 'High-pressure water discharge' }
    ],
    faqs: [
      {
        question: 'Should I install PVC or MS (Mild Steel) casing pipe?',
        answer: 'For standard residential and agricultural applications up to 60-80 ft of loose overburden, heavy-gauge ISI PVC casing (Class 4 / 6 kg) is economical and corrosion-proof. In unstable boulders, MS steel casing is recommended.'
      },
      {
        question: 'How long should a newly drilled borewell be flushed?',
        answer: 'A new borewell should be flushed with high-pressure air for at least 1 to 2 hours until the discharged water is completely free of rock dust, silt, and sand particles.'
      }
    ]
  }
];
