export type Locale = 'en' | 'ar';

type ServiceContent = { title: string; description: string };
type ProjectContent = { title: string; description: string; category: string };

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    portfolio: string;
    coverage: string;
    clients: string;
    contact: string;
    getQuote: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    tagline: string;
    description: string;
    ctaServices: string;
    ctaPortfolio: string;
    productionHouse: string;
    stats: { projects: string; cities: string; clients: string };
    marquee: string[];
  };
  stats: {
    founded: string;
    citiesCovered: string;
    offices: string;
    officesLabel: string;
    reach: string;
    reachLabel: string;
  };
  capabilities: {
    label: string;
    title: string;
    description: string;
    learnMore: string;
    items: {
      cnc: string;
      printing: string;
      paint: string;
      fabrication: string;
      testing: string;
      installation: string;
    };
  };
  services: {
    label: string;
    title: string;
    description: string;
    hoverHint: string;
    viewAll: string;
    learnMore: string;
    categories: Record<string, string>;
    items: Record<string, ServiceContent>;
  };
  projects: {
    label: string;
    title: string;
    description: string;
    viewAll: string;
    viewAllShort: string;
    items: Record<string, ProjectContent>;
    categories: Record<string, string>;
  };
  portfolio: {
    label: string;
    title: string;
    description: string;
    filters: {
      all: string;
      exhibitions: string;
      cnc: string;
      laser: string;
      prints: string;
    };
    viewAll: string;
  };
  process: {
    label: string;
    title: string;
    description: string;
    step: string;
    steps: Record<
      'strategy' | 'consultation' | 'design' | 'manufacture' | 'test' | 'delivery' | 'installation',
      { title: string; description: string }
    >;
  };
  coverage: {
    label: string;
    title: string;
    description: string;
    viewAll: string;
    regions: Record<'western' | 'eastern' | 'central' | 'southern', string>;
    more: string;
    cities: Record<string, string>;
  };
  clients: { label: string; title: string; description: string };
  testimonials: {
    label: string;
    title: string;
    description: string;
    readOnGoogle: string;
  };
  about: {
    label: string;
    managementLabel: string;
    managementName: string;
    managementRole: string;
    managementQuote: string;
    teamCaption: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
  };
  footer: {
    tagline: string;
    company: string;
    services: string;
    contact: string;
    rights: string;
  };
  common: { viewDetails: string };
  pages: {
    about: {
      eyebrow: string;
      heroTitle: string;
      heroDescription: string;
      visionTitle: string;
      visionBody: string;
      missionTitle: string;
      missionBullets: string[];
      whoWeAreLabel: string;
      whoWeAreTitle: string;
      whoWeAreDescription: string;
      whoBody1: string;
      whoBody2: string;
      whoBody3: string;
      whoBody4: string;
      figures: { offices: string; cities: string; team: string; projects: string };
      valuesLabel: string;
      valuesTitle: string;
      values: {
        innovation: { title: string; description: string };
        exploration: { title: string; description: string };
        excellence: { title: string; description: string };
        partnership: { title: string; description: string };
      };
      journeyLabel: string;
      journeyTitle: string;
      milestones: { year: string; title: string; description: string }[];
    };
    services: { eyebrow: string; heroTitle: string; heroDescription: string };
    projects: { eyebrow: string; heroTitle: string; heroDescription: string };
    coverage: {
      eyebrow: string;
      heroTitle: string;
      heroDescription: string;
      regionsLabel: string;
      citiesTitle: string;
      locationLabel: string;
      locationTitle: string;
      locationDescription: string;
    };
    clients: {
      eyebrow: string;
      heroTitle: string;
      heroDescription: string;
      trustedBy: string;
      trustedByTitle: string;
      trustedByDescription: string;
      testimonialsLabel: string;
      testimonialsTitle: string;
      testimonialsDescription: string;
    };
    contact: {
      eyebrow: string;
      heroTitle: string;
      heroDescription: string;
      formTitle: string;
      formDescription: string;
      infoTitle: string;
      hours: string;
      locationLabel: string;
      locationTitle: string;
      locationDescription: string;
    };
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      portfolio: 'Portfolio',
      coverage: 'Coverage',
      clients: 'Clients',
      contact: 'Contact',
      getQuote: 'Get a Quote',
    },
    hero: {
      eyebrow: 'Kit Factory — Since 2018',
      headline: 'KIT Factory',
      tagline: 'where imagination comes to life',
      description:
        'End-to-end advertising, signage, exhibitions, and large-format production — engineered with precision from concept to installation across 33 cities in the GCC.',
      ctaServices: 'Our Services',
      ctaPortfolio: 'View Portfolio',
      productionHouse: 'PRODUCTION HOUSE',
      stats: { projects: 'Projects', cities: 'Cities', clients: 'Clients' },
      marquee: [
        'Billboards & Banners',
        'Exhibition Stands',
        'Vehicle Branding',
        'Digital Signage',
        'Retail Solutions',
        'Signage Systems',
        'Mall Activations',
        'Large Format Printing',
        'Corporate Branding',
        'Wayfinding Systems',
      ],
    },
    stats: {
      founded: 'Founded',
      citiesCovered: 'Cities Covered',
      offices: 'Offices',
      officesLabel: 'Jeddah & Dubai',
      reach: 'GCC',
      reachLabel: 'Regional Reach',
    },
    capabilities: {
      label: 'Craftsmanship',
      title: 'Production & Capabilities',
      description:
        'State-of-the-art facilities combining CNC precision, advanced printing, and expert craftsmanship under one roof.',
      learnMore: 'Learn More',
      items: {
        cnc: 'CNC & Laser Precision',
        printing: 'Advanced Printing Lab',
        paint: 'Paint Booths & Finishing',
        fabrication: 'Large-Scale Fabrication',
        testing: 'Quality Testing & Prototyping',
        installation: 'Installation & Delivery',
      },
    },
    services: {
      label: 'What We Do',
      title: 'Our Services',
      description:
        'From large-format printing to bespoke exhibition stands, we deliver end-to-end advertising and production services across the GCC.',
      hoverHint: 'Hover to learn more',
      viewAll: 'View All Services',
      learnMore: 'Learn more',
      categories: {
        All: 'All',
        Outdoor: 'Outdoor',
        Production: 'Production',
        Print: 'Print',
        Display: 'Display',
        Signage: 'Signage',
        Branding: 'Branding',
        Events: 'Events',
        Specialty: 'Specialty',
        Digital: 'Digital',
        Retail: 'Retail',
      },
      items: {
        'billboards-banners': {
          title: 'Billboards & Banners',
          description:
            'High-impact outdoor advertising solutions engineered for visibility and durability across all weather conditions.',
        },
        'full-color-printing': {
          title: 'Full Color Printing & Production',
          description:
            'State-of-the-art digital and large-format printing using HP Latex, Roland, Mutoh, Vutek, and Canon technologies.',
        },
        'flyers-brochures': {
          title: 'Flyers & Brochures',
          description:
            'Precision-printed marketing collateral that communicates your message with clarity and visual appeal.',
        },
        'display-holders-stands': {
          title: 'Display Holders & Stands',
          description:
            'Versatile display solutions for retail, events, and corporate environments designed for maximum product visibility.',
        },
        signage: {
          title: 'Signage',
          description:
            'Custom indoor and outdoor signage solutions from illuminated channel letters to architectural sign systems.',
        },
        'popups-rollups-counters': {
          title: 'Pop-ups / Roll-ups / Counters',
          description:
            'Self-assembling banners, dynamic roll-outs, and versatile promotional tables built durable for outdoor conditions.',
        },
        uniforms: {
          title: 'Uniforms',
          description:
            'Corporate and event uniforms that reinforce brand identity with quality materials and professional finishing.',
        },
        'exhibition-stands': {
          title: 'Exhibition Stands Design & Fabrication',
          description:
            'From modular shell schemes to bespoke builds that enhance identity and convey your narrative on the show floor.',
        },
        'mall-activation': {
          title: 'Mall Activation Strategy',
          description:
            'Concept-to-execution activations driving direct engagement and building loyal brand communities.',
        },
        'indoor-outdoor-branding': {
          title: 'Indoor & Outdoor Branding',
          description:
            'Comprehensive campaigns for interior spaces and outdoor reach, maximizing memorability and brand presence.',
        },
        'podiums-gondolas-showcases': {
          title: 'Podiums / Gondolas / Showcases',
          description:
            'Attention-capturing product displays designed to highlight merchandise and drive impulse engagement.',
        },
        'vehicle-branding': {
          title: 'Vehicle Branding Solutions',
          description:
            'Decals, full wraps, and skins that transform fleets into mobile billboards with high ROI.',
        },
        'shields-plaques': {
          title: 'Wooden & Acrylic Shields + Crystal Plaques',
          description:
            'Handcrafted awards and recognition pieces in 3D and 2D crystal, wood, and acrylic finishes.',
        },
        'wayfinding-systems': {
          title: 'Wayfinding & Guidance Sign Systems',
          description:
            'Intuitive navigation signage for malls, hospitals, campuses, and large commercial spaces.',
        },
        'digital-signage': {
          title: 'Retail / Sports / Events / Digital Signage',
          description:
            'Dynamic digital displays for retail, sports venues, events, and high-level corporate environments.',
        },
        'retail-facia': {
          title: 'Display Platforms / Shop & Retail Facia',
          description:
            'Storefront and in-store display solutions that transform retail spaces into immersive brand experiences.',
        },
      },
    },
    projects: {
      label: 'Portfolio',
      title: 'Featured Projects',
      description: 'A selection of our recent work across advertising, signage, and exhibitions.',
      viewAll: 'View All Projects',
      viewAllShort: 'All Projects',
      categories: {
        All: 'All',
        Events: 'Events',
        Signage: 'Signage',
        'Exhibition Stands': 'Exhibition Stands',
        'Vehicle Branding': 'Vehicle Branding',
        Retail: 'Retail',
        'Digital Signage': 'Digital Signage',
      },
      items: {
        'riyadh-season-activation': {
          title: 'Riyadh Season Activation',
          category: 'Events',
          description:
            'A large-scale mall activation for Riyadh Season featuring custom exhibition stands, interactive displays, and immersive brand environments spanning over 2,000 sqm.',
        },
        'jeddah-tower-signage': {
          title: 'Jeddah Tower Signage System',
          category: 'Signage',
          description:
            'Comprehensive wayfinding and brand signage system for a major commercial tower in Jeddah.',
        },
        'national-fleet-wrap': {
          title: 'National Fleet Branding',
          category: 'Vehicle Branding',
          description:
            'Full fleet vehicle branding for a national logistics company, covering 150+ trucks and vans with durable vinyl wraps.',
        },
        'retail-chain-facia': {
          title: 'Retail Chain Store Redesign',
          category: 'Retail',
          description:
            'Complete storefront redesign for a national retail chain, including new facia signage, in-store displays, and digital signage integration across 20 locations.',
        },
        'corporate-exhibition-dubai': {
          title: 'Corporate Exhibition Stand — Dubai',
          category: 'Exhibition Stands',
          description:
            'A bespoke double-decker exhibition stand at GITEX Dubai featuring LED walls, meeting pods, and interactive product showcases.',
        },
        'outdoor-campaign-ksa': {
          title: 'KSA-Wide Outdoor Campaign',
          category: 'Digital Signage',
          description:
            'Multi-city outdoor advertising campaign across 12 cities in KSA, deploying 200+ billboards and unipoles.',
        },
      },
    },
    portfolio: {
      label: 'Portfolio',
      title: 'Selected Works',
      description:
        'A curated selection of our recent projects across exhibitions, fabrication, and print.',
      filters: {
        all: 'All',
        exhibitions: 'Exhibition Booths',
        cnc: 'CNC',
        laser: 'Laser',
        prints: 'Prints',
      },
      viewAll: 'View Full Portfolio',
    },
    process: {
      label: 'Our Process',
      title: 'From Concept to Installation',
      description:
        'A proven seven-step journey that transforms your vision into reality with precision and care.',
      step: 'Step',
      steps: {
        strategy: { title: 'Strategy', description: 'Define objectives, research the market, and map the path to success.' },
        consultation: { title: 'Consultation', description: 'Collaborate with you to understand needs, challenges, and aspirations.' },
        design: { title: 'Design', description: 'Craft visual concepts that align with your brand identity and goals.' },
        manufacture: { title: 'Manufacture', description: 'Bring designs to life with precision CNC, laser cutting, and expert craftsmanship.' },
        test: { title: 'Test', description: 'Quality assurance at every stage ensures flawless output.' },
        delivery: { title: 'Delivery', description: 'Timely logistics across 33 cities with careful handling.' },
        installation: { title: 'Installation', description: 'On-site deployment by skilled technicians for a perfect finish.' },
      },
    },
    coverage: {
      label: 'Coverage',
      title: 'Reaching Every Corner of Saudi Arabia',
      description:
        'With offices across KSA reaching up to 33 cities, we deliver consistent quality nationwide.',
      viewAll: 'View Full Coverage',
      regions: {
        western: 'Western Region',
        eastern: 'Eastern Region',
        central: 'Central Region',
        southern: 'Southern Region',
      },
      more: 'more',
      cities: {
        Jeddah: 'Jeddah',
        Makkah: 'Makkah',
        Taif: 'Taif',
        Baha: 'Baha',
        Yanbu: 'Yanbu',
        Rabigh: 'Rabigh',
        Madainah: 'Madinah',
        Tabouk: 'Tabuk',
        Olaa: 'AlUla',
        Dammam: 'Dammam',
        Khubar: 'Khobar',
        Dhahran: 'Dhahran',
        Qateif: 'Qatif',
        'Al Jubail': 'Al Jubail',
        Haferalbaten: 'Hafr Al-Batin',
        'Al Hafouf': 'Al Hofuf',
        Ehssa: 'Al-Ahsa',
        Abha: 'Abha',
        'Khamis Mushait': 'Khamis Mushait',
        Jizan: 'Jizan',
        Najran: 'Najran',
        Bishah: 'Bishah',
        'Al Nimas': 'Al-Nimas',
        'Muhaiel Aseer': 'Muhayil Aseer',
        Riyadh: 'Riyadh',
        'Al Kharj': 'Al-Kharj',
        Buraidah: 'Buraidah',
        Unaizah: 'Unaizah',
        Haeil: 'Hail',
        Qurayat: 'Qurayyat',
        'Al Jouf': 'Al-Jawf',
        Arar: 'Arar',
        'Wadi Dawaser': 'Wadi Al-Dawasir',
      },
    },
    clients: {
      label: 'Trusted Partners',
      title: 'Clients Who Rely on Us',
      description:
        'We are proud to partner with leading brands and organizations across diverse industries.',
    },
    testimonials: {
      label: 'Testimonials',
      title: 'What Our Clients Say',
      description: 'Reviews shared by our clients on Google Maps.',
      readOnGoogle: 'Read on Google',
    },
    about: {
      label: 'About',
      managementLabel: 'Message from the Management',
      managementName: 'Mr. Abdullah',
      managementRole: 'Chief Executive Officer',
      managementQuote:
        'We transform ideas into exceptional experiences built to global standards. Refined design, precise execution, and results that can be seen and felt.',
      teamCaption: 'Our team on-site — turning designs into reality.',
    },
    cta: {
      eyebrow: 'Start Your Project',
      title: 'Ready to Bring Your Vision to Life?',
      description:
        'Whether you need a single banner or a full-scale national campaign, our team is ready to deliver. Get in touch today.',
      button: 'Get a Quote',
    },
    footer: {
      tagline:
        'Premier indoor & outdoor production house across the GCC. From concept to delivery, we bring imagination to life.',
      company: 'Company',
      services: 'Services',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
    common: { viewDetails: 'View details' },
    pages: {
      about: {
        eyebrow: 'About Us',
        heroTitle: "Forging Tomorrow's Vision",
        heroDescription:
          'Founded in 2018 to revolutionize the Middle East advertising landscape, Kit Factory is a premier indoor and outdoor production house delivering end-to-end solutions from Jeddah and Dubai across the entire GCC.',
        visionTitle: 'Our Vision',
        visionBody:
          'To forge our destiny from the untapped potential of tomorrow, rather than being bound by the limitations of yesterday.',
        missionTitle: 'Our Mission',
        missionBullets: [
          'Provide customers with the best, most innovative, and feasible solutions they dream of.',
          'Embark on an adventurous quest exploring boundless horizons of creativity.',
          'Weave a tapestry of the finest, most pioneering, realizable solutions under one roof.',
        ],
        whoWeAreLabel: 'Who We Are',
        whoWeAreTitle: 'A Legacy of Creative Excellence',
        whoWeAreDescription:
          'From our roots in Dubai to our headquarters in Jeddah, we have built a reputation for delivering exceptional advertising and production solutions.',
        whoBody1:
          'Kit Factory was founded in 2018 with a bold ambition: to revolutionize the Middle East advertising landscape. Through our strategic partnership with Kit Display Dubai, established in 2006, we amplify our presence and expertise across the region.',
        whoBody2:
          'With branches in Jeddah and Dubai, we operate as a premier indoor and outdoor production house across the GCC, handling projects of any size with strong attention to detail.',
        whoBody3:
          'From concept to delivery, we provide full advertising operations and marketing services, supported by advanced digital printing, workshops, and a highly skilled team.',
        whoBody4:
          'Our in-house facilities include CNC and laser equipment for precision, with printing capabilities spanning water-based, pigment, latex, solvent, and UV technologies.',
        figures: { offices: 'Offices', cities: 'Cities', team: 'Team Members', projects: 'Projects' },
        valuesLabel: 'Core Values',
        valuesTitle: 'What Drives Us',
        values: {
          innovation: { title: 'Innovation', description: 'We provide the most innovative and feasible solutions our customers dream of.' },
          exploration: { title: 'Exploration', description: 'We embark on adventurous quests exploring boundless horizons of creativity.' },
          excellence: { title: 'Excellence', description: 'We weave a tapestry of the finest, most pioneering, realizable solutions.' },
          partnership: { title: 'Partnership', description: 'We work hand-in-hand with clients to deliver results that exceed expectations.' },
        },
        journeyLabel: 'Our Journey',
        journeyTitle: 'Milestones',
        milestones: [
          { year: '2006', title: 'Kit Display Dubai Founded', description: 'Our parent company Kit Display established in Dubai, building the foundation of expertise.' },
          { year: '2018', title: 'Kit Factory Launched', description: 'Founded in Jeddah to revolutionize the Middle East advertising landscape.' },
          { year: '2020', title: 'GCC Expansion', description: 'Expanded operations across Saudi Arabia reaching major cities and regions.' },
          { year: '2022', title: '33 Cities Covered', description: 'Achieved nationwide coverage with offices and operations in 33+ cities across KSA.' },
          { year: '2024', title: 'Regional Leadership', description: 'Recognized as a premier indoor & outdoor production house across the GCC.' },
        ],
      },
      services: {
        eyebrow: 'Our Services',
        heroTitle: 'Everything Under One Roof',
        heroDescription:
          'A comprehensive suite of advertising, signage, and production services — delivered across the GCC with precision and care.',
      },
      projects: {
        eyebrow: 'Portfolio',
        heroTitle: 'Our Projects',
        heroDescription:
          'A selection of our recent work across advertising, signage, exhibitions, and brand experiences.',
      },
      coverage: {
        eyebrow: 'Our Reach',
        heroTitle: 'Nationwide Coverage',
        heroDescription:
          'Offices and operations across Saudi Arabia — serving over 33 cities with consistent quality and timely delivery.',
        regionsLabel: 'Regions',
        citiesTitle: 'Cities We Serve',
        locationLabel: 'Location',
        locationTitle: 'Find Us',
        locationDescription: 'Our main headquarters in Jeddah, Saudi Arabia.',
      },
      clients: {
        eyebrow: 'Partnerships',
        heroTitle: 'Our Clients',
        heroDescription:
          'We are proud to partner with leading brands and organizations across diverse industries.',
        trustedBy: 'Trusted By',
        trustedByTitle: 'Brands That Choose Kit Factory',
        trustedByDescription:
          'A selection of the brands and organizations we have partnered with to deliver exceptional results.',
        testimonialsLabel: 'Testimonials',
        testimonialsTitle: 'What Our Clients Say',
        testimonialsDescription:
          'Real feedback from the brands and organizations we serve.',
      },
      contact: {
        eyebrow: 'Get in Touch',
        heroTitle: 'Contact Us',
        heroDescription:
          "Have a project in mind? Let's talk. Fill out the form below or reach us directly — we typically respond within one business day.",
        formTitle: 'Send Us a Message',
        formDescription: 'Fill out the form below and we will get back to you shortly.',
        infoTitle: 'Company Information',
        hours: 'Sun – Thu: 9:00 AM – 6:00 PM',
        locationLabel: 'Location',
        locationTitle: 'Visit Our Office',
        locationDescription: 'Jeddah, Saudi Arabia',
      },
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      projects: 'المشاريع',
      portfolio: 'أعمالنا',
      coverage: 'التغطية',
      clients: 'العملاء',
      contact: 'تواصل معنا',
      getQuote: 'اطلب عرض سعر',
    },
    hero: {
      eyebrow: 'كِت فاكتوري — منذ 2018',
      headline: 'كِت فاكتوري',
      tagline: 'حيث يتحول الخيال إلى واقع',
      description:
        'حلول إعلانية ولافتات ومعارض وطباعة بمقاسات كبيرة — بدقة هندسية من الفكرة حتى التركيب في 33 مدينة بدول الخليج.',
      ctaServices: 'خدماتنا',
      ctaPortfolio: 'تصفح الأعمال',
      productionHouse: 'بيت الإنتاج',
      stats: { projects: 'مشروع', cities: 'مدينة', clients: 'عميل' },
      marquee: [
        'لوحات ولافتات إعلانية',
        'أجنحة المعارض',
        'تغليف المركبات',
        'لافتات رقمية',
        'حلول التجزئة',
        'أنظمة اللافتات',
        'تفعيلات المولات',
        'طباعة مقاسات كبيرة',
        'هوية المؤسسات',
        'أنظمة الإرشاد',
      ],
    },
    stats: {
      founded: 'تأسست',
      citiesCovered: 'مدينة نخدمها',
      offices: 'فرعين',
      officesLabel: 'جدة ودبي',
      reach: 'الخليج',
      reachLabel: 'تغطية إقليمية',
    },
    capabilities: {
      label: 'الحرفية',
      title: 'الإنتاج والإمكانيات',
      description:
        'منشآت متطورة تجمع دقة CNC والطباعة المتقدمة والحرفية عالية المستوى تحت سقف واحد.',
      learnMore: 'اعرف المزيد',
      items: {
        cnc: 'دقة CNC والليزر',
        printing: 'مختبر طباعة متقدم',
        paint: 'غرف دهان وتشطيب',
        fabrication: 'تصنيع بمقاسات كبيرة',
        testing: 'فحص جودة ونماذج أولية',
        installation: 'تركيب وتسليم',
      },
    },
    services: {
      label: 'ما نقدمه',
      title: 'خدماتنا',
      description:
        'من الطباعة بمقاسات كبيرة إلى أجنحة المعارض المصممة خصيصاً — نقدم حلول إعلان وإنتاج متكاملة في الخليج.',
      hoverHint: 'مرّر لمعرفة المزيد',
      viewAll: 'عرض كل الخدمات',
      learnMore: 'اعرف أكثر',
      categories: {
        All: 'الكل',
        Outdoor: 'خارجية',
        Production: 'إنتاج',
        Print: 'طباعة',
        Display: 'عرض',
        Signage: 'لافتات',
        Branding: 'هوية',
        Events: 'فعاليات',
        Specialty: 'متخصصة',
        Digital: 'رقمية',
        Retail: 'تجزئة',
      },
      items: {
        'billboards-banners': {
          title: 'لوحات ولافتات إعلانية',
          description:
            'حلول إعلانات خارجية عالية التأثير، مصممة للظهور والاستمرارية في جميع الظروف الجوية.',
        },
        'full-color-printing': {
          title: 'طباعة ملوّنة وإنتاج',
          description:
            'طباعة رقمية وبمقاسات كبيرة بأحدث تقنيات HP Latex و Roland و Mutoh و Vutek و Canon.',
        },
        'flyers-brochures': {
          title: 'فلايرز وبروشورات',
          description:
            'مواد تسويقية مطبوعة بدقة تنقل رسالتك بوضوح وجاذبية بصرية.',
        },
        'display-holders-stands': {
          title: 'حوامل وستاندات عرض',
          description:
            'حلول عرض متعددة الاستخدامات للتجزئة والفعاليات والبيئات المؤسسية.',
        },
        signage: {
          title: 'اللافتات',
          description:
            'حلول لافتات داخلية وخارجية مخصصة، من الحروف المضيئة إلى أنظمة اللافتات المعمارية.',
        },
        'popups-rollups-counters': {
          title: 'بوب أب / رول أب / كاونترات',
          description:
            'لافتات ذاتية التجميع ورول أب ديناميكية وكاونترات ترويجية متينة للاستخدام الخارجي.',
        },
        uniforms: {
          title: 'الزي الموحد',
          description:
            'زي موحد للشركات والفعاليات يعزز هوية العلامة بخامات عالية الجودة وتشطيب احترافي.',
        },
        'exhibition-stands': {
          title: 'تصميم وتصنيع أجنحة المعارض',
          description:
            'من الأنظمة المعيارية إلى التصاميم المخصصة التي تبرز هوية علامتك على أرض المعرض.',
        },
        'mall-activation': {
          title: 'استراتيجية تفعيل المولات',
          description:
            'تفعيلات من الفكرة للتنفيذ تقود التفاعل المباشر وتبني مجتمعات ولاء للعلامة.',
        },
        'indoor-outdoor-branding': {
          title: 'العلامة الداخلية والخارجية',
          description:
            'حملات شاملة للمساحات الداخلية والخارجية تعظّم التميز وحضور العلامة.',
        },
        'podiums-gondolas-showcases': {
          title: 'منصات / جندولات / فاترينات',
          description:
            'عروض منتجات لافتة للنظر مصممة لإبراز البضاعة ورفع التفاعل.',
        },
        'vehicle-branding': {
          title: 'تغليف المركبات',
          description:
            'لاصقات وتغليف كامل يحوّل الأسطول إلى لوحات إعلانية متحركة بعائد استثمار عالٍ.',
        },
        'shields-plaques': {
          title: 'دروع خشبية وأكريليك ودروع كريستال',
          description:
            'دروع وتكريمات مصنوعة يدوياً بتشطيبات كريستال وخشب وأكريليك ثلاثية وثنائية الأبعاد.',
        },
        'wayfinding-systems': {
          title: 'أنظمة الإرشاد والتوجيه',
          description:
            'لافتات إرشادية بديهية للمولات والمستشفيات والجامعات والمساحات التجارية الكبيرة.',
        },
        'digital-signage': {
          title: 'لافتات رقمية للتجزئة والفعاليات',
          description:
            'شاشات رقمية ديناميكية للتجزئة والملاعب والفعاليات والبيئات المؤسسية عالية المستوى.',
        },
        'retail-facia': {
          title: 'واجهات المحلات ومنصات العرض',
          description:
            'حلول واجهات محلات ومنصات عرض داخلية تحوّل مساحات التجزئة إلى تجارب علامة غامرة.',
        },
      },
    },
    projects: {
      label: 'معرض الأعمال',
      title: 'مشاريع مختارة',
      description: 'مجموعة من أحدث أعمالنا في الإعلان واللافتات والمعارض.',
      viewAll: 'عرض كل المشاريع',
      viewAllShort: 'كل المشاريع',
      categories: {
        All: 'الكل',
        Events: 'فعاليات',
        Signage: 'لافتات',
        'Exhibition Stands': 'أجنحة معارض',
        'Vehicle Branding': 'تغليف مركبات',
        Retail: 'تجزئة',
        'Digital Signage': 'لافتات رقمية',
      },
      items: {
        'riyadh-season-activation': {
          title: 'تفعيل موسم الرياض',
          category: 'فعاليات',
          description:
            'تفعيل مول واسع النطاق لموسم الرياض بأجنحة معارض مخصصة وعروض تفاعلية وبيئات غامرة بأكثر من 2000 متر مربع.',
        },
        'jeddah-tower-signage': {
          title: 'نظام لافتات برج جدة',
          category: 'لافتات',
          description: 'نظام إرشادي وهوية شامل لبرج تجاري كبير في جدة.',
        },
        'national-fleet-wrap': {
          title: 'تغليف أسطول وطني',
          category: 'تغليف مركبات',
          description: 'تغليف كامل لأسطول شركة لوجستيات وطنية يشمل 150+ شاحنة وفان بفينيل عالي المتانة.',
        },
        'retail-chain-facia': {
          title: 'إعادة تصميم سلسلة تجزئة',
          category: 'تجزئة',
          description: 'إعادة تصميم واجهات سلسلة تجزئة وطنية مع لافتات ومنصات عرض داخلية ولافتات رقمية في 20 فرعاً.',
        },
        'corporate-exhibition-dubai': {
          title: 'جناح معرض شركات — دبي',
          category: 'أجنحة معارض',
          description: 'جناح معرض دبل ديكر مخصص في معرض GITEX دبي بشاشات LED وغرف اجتماعات وعروض منتجات تفاعلية.',
        },
        'outdoor-campaign-ksa': {
          title: 'حملة خارجية على مستوى المملكة',
          category: 'لافتات رقمية',
          description: 'حملة إعلان خارجية في 12 مدينة بالمملكة بنشر 200+ بيلبورد ويونيبول.',
        },
      },
    },
    portfolio: {
      label: 'أعمالنا',
      title: 'مختارات من مشاريعنا',
      description: 'مجموعة مختارة من مشاريعنا الحديثة في المعارض والتصنيع والطباعة.',
      filters: {
        all: 'الكل',
        exhibitions: 'أجنحة المعارض',
        cnc: 'CNC',
        laser: 'ليزر',
        prints: 'مطبوعات',
      },
      viewAll: 'عرض كل الأعمال',
    },
    process: {
      label: 'خطوات العمل',
      title: 'من الفكرة إلى التركيب',
      description: 'رحلة من سبع خطوات تحوّل رؤيتك إلى واقع بدقة وعناية.',
      step: 'الخطوة',
      steps: {
        strategy: { title: 'الاستراتيجية', description: 'تحديد الأهداف ودراسة السوق ورسم خارطة النجاح.' },
        consultation: { title: 'الاستشارة', description: 'نعمل معك لفهم احتياجاتك وتحدياتك وطموحاتك.' },
        design: { title: 'التصميم', description: 'ابتكار مفاهيم بصرية تعكس هوية علامتك وتحقق أهدافها.' },
        manufacture: { title: 'التصنيع', description: 'تنفيذ التصاميم بدقة CNC وقطع الليزر وحرفية عالية.' },
        test: { title: 'الفحص', description: 'ضمان الجودة في كل مرحلة لنتيجة خالية من العيوب.' },
        delivery: { title: 'التسليم', description: 'توصيل في الوقت المحدد عبر 33 مدينة بعناية تامة.' },
        installation: { title: 'التركيب', description: 'تركيب في الموقع بأيدي فنيين خبراء للحصول على لمسة نهائية مثالية.' },
      },
    },
    coverage: {
      label: 'التغطية',
      title: 'نصل إلى كل أنحاء المملكة',
      description: 'بمكاتب منتشرة في المملكة تصل إلى 33 مدينة، نقدم جودة موحّدة في كل مكان.',
      viewAll: 'عرض التغطية الكاملة',
      regions: {
        western: 'المنطقة الغربية',
        eastern: 'المنطقة الشرقية',
        central: 'المنطقة الوسطى',
        southern: 'المنطقة الجنوبية',
      },
      more: 'أخرى',
      cities: {
        Jeddah: 'جدة',
        Makkah: 'مكة',
        Taif: 'الطائف',
        Baha: 'الباحة',
        Yanbu: 'ينبع',
        Rabigh: 'رابغ',
        Madainah: 'المدينة',
        Tabouk: 'تبوك',
        Olaa: 'العُلا',
        Dammam: 'الدمام',
        Khubar: 'الخبر',
        Dhahran: 'الظهران',
        Qateif: 'القطيف',
        'Al Jubail': 'الجبيل',
        Haferalbaten: 'حفر الباطن',
        'Al Hafouf': 'الهفوف',
        Ehssa: 'الأحساء',
        Abha: 'أبها',
        'Khamis Mushait': 'خميس مشيط',
        Jizan: 'جازان',
        Najran: 'نجران',
        Bishah: 'بيشة',
        'Al Nimas': 'النماص',
        'Muhaiel Aseer': 'محايل عسير',
        Riyadh: 'الرياض',
        'Al Kharj': 'الخرج',
        Buraidah: 'بريدة',
        Unaizah: 'عنيزة',
        Haeil: 'حائل',
        Qurayat: 'القريات',
        'Al Jouf': 'الجوف',
        Arar: 'عرعر',
        'Wadi Dawaser': 'وادي الدواسر',
      },
    },
    clients: {
      label: 'شركاؤنا الموثوقون',
      title: 'عملاء يثقون بنا',
      description: 'نفخر بشراكتنا مع علامات ومؤسسات رائدة في قطاعات متنوعة.',
    },
    testimonials: {
      label: 'آراء العملاء',
      title: 'ماذا يقول عملاؤنا',
      description: 'تقييمات شاركها عملاؤنا على خرائط جوجل.',
      readOnGoogle: 'اقرأ على جوجل',
    },
    about: {
      label: 'من نحن',
      managementLabel: 'كلمة الإدارة',
      managementName: 'الأستاذ عبدالله',
      managementRole: 'الرئيس التنفيذي',
      managementQuote:
        'نُحوّل الأفكار إلى تجارب استثنائية تُبنى وفق معايير عالمية. تصميم راقٍ وتنفيذ دقيق ونتائج تُرى وتُحس.',
      teamCaption: 'فريقنا في الموقع — نحوّل التصاميم إلى واقع.',
    },
    cta: {
      eyebrow: 'ابدأ مشروعك',
      title: 'جاهز لتحويل رؤيتك إلى واقع؟',
      description:
        'سواء احتجت لافتة واحدة أو حملة وطنية شاملة، فريقنا جاهز للتنفيذ. تواصل معنا اليوم.',
      button: 'اطلب عرض سعر',
    },
    footer: {
      tagline:
        'بيت الإنتاج الرائد للإعلانات الداخلية والخارجية في الخليج. من الفكرة إلى التسليم، نحوّل الخيال إلى واقع.',
      company: 'الشركة',
      services: 'الخدمات',
      contact: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
    },
    common: { viewDetails: 'عرض التفاصيل' },
    pages: {
      about: {
        eyebrow: 'من نحن',
        heroTitle: 'نصنع رؤية الغد',
        heroDescription:
          'تأسست كِت فاكتوري في 2018 لإحداث نقلة نوعية في مشهد الإعلان بالشرق الأوسط، كبيت إنتاج رائد للإعلانات الداخلية والخارجية، نقدم حلولاً متكاملة من جدة ودبي إلى كامل دول الخليج.',
        visionTitle: 'رؤيتنا',
        visionBody: 'أن نصنع مصيرنا من إمكانات الغد غير المستغلة، لا أن نتقيد بحدود الأمس.',
        missionTitle: 'رسالتنا',
        missionBullets: [
          'أن نقدم لعملائنا أفضل الحلول المبتكرة والقابلة للتنفيذ التي يحلمون بها.',
          'أن ننطلق في رحلة مغامرة لاستكشاف آفاق لا محدودة من الإبداع.',
          'أن ننسج لوحة من أرقى الحلول الرائدة القابلة للتحقيق تحت سقف واحد.',
        ],
        whoWeAreLabel: 'من نحن',
        whoWeAreTitle: 'إرث من التميز الإبداعي',
        whoWeAreDescription:
          'من جذورنا في دبي إلى مقرنا الرئيسي في جدة، بنينا سمعة بتقديم حلول إعلان وإنتاج استثنائية.',
        whoBody1:
          'تأسست كِت فاكتوري في 2018 بطموح جريء: إحداث نقلة في مشهد الإعلان بالشرق الأوسط. بشراكتنا الاستراتيجية مع Kit Display Dubai التي تأسست في 2006، نعزّز حضورنا وخبرتنا في المنطقة.',
        whoBody2:
          'بفرعين في جدة ودبي، نعمل كبيت إنتاج رائد للإعلانات الداخلية والخارجية في الخليج، ونتعامل مع مشاريع بمختلف الأحجام باهتمام كبير بالتفاصيل.',
        whoBody3:
          'من الفكرة إلى التسليم، نقدم عمليات إعلانية وخدمات تسويق متكاملة، مدعومة بطباعة رقمية متقدمة وورش ومجموعة من المحترفين.',
        whoBody4:
          'تشمل منشآتنا أجهزة CNC وليزر للدقة العالية، مع قدرات طباعة تشمل تقنيات الحبر المائي والبيغمنت واللاتكس والسولفنت والـ UV.',
        figures: { offices: 'فروع', cities: 'مدينة', team: 'عضو فريق', projects: 'مشروع' },
        valuesLabel: 'قيمنا الأساسية',
        valuesTitle: 'ما يحركنا',
        values: {
          innovation: { title: 'الابتكار', description: 'نقدم أكثر الحلول ابتكاراً وقابلية للتطبيق التي يحلم بها عملاؤنا.' },
          exploration: { title: 'الاستكشاف', description: 'نخوض مغامرات لاستكشاف آفاق لا محدودة من الإبداع.' },
          excellence: { title: 'التميز', description: 'ننسج لوحة من أرقى وأكثر الحلول ريادة وقابلية للتنفيذ.' },
          partnership: { title: 'الشراكة', description: 'نعمل يداً بيد مع عملائنا لتحقيق نتائج تفوق التوقعات.' },
        },
        journeyLabel: 'رحلتنا',
        journeyTitle: 'محطات بارزة',
        milestones: [
          { year: '2006', title: 'تأسيس Kit Display دبي', description: 'تأسست شركتنا الأم Kit Display في دبي، وأرست أساس الخبرة.' },
          { year: '2018', title: 'انطلاقة كِت فاكتوري', description: 'تأسست في جدة لإحداث نقلة في مشهد الإعلان بالشرق الأوسط.' },
          { year: '2020', title: 'التوسع الخليجي', description: 'توسعنا في أنحاء المملكة العربية السعودية وصولاً إلى مدن ومناطق رئيسية.' },
          { year: '2022', title: 'تغطية 33 مدينة', description: 'حققنا تغطية وطنية بوجود عمليات في أكثر من 33 مدينة في المملكة.' },
          { year: '2024', title: 'ريادة إقليمية', description: 'نحن بيت الإنتاج الرائد للإعلانات الداخلية والخارجية في الخليج.' },
        ],
      },
      services: {
        eyebrow: 'خدماتنا',
        heroTitle: 'كل شيء تحت سقف واحد',
        heroDescription: 'باقة شاملة من خدمات الإعلان واللافتات والإنتاج — نقدمها في الخليج بدقة وعناية.',
      },
      projects: {
        eyebrow: 'معرض الأعمال',
        heroTitle: 'مشاريعنا',
        heroDescription: 'مجموعة من أحدث أعمالنا في الإعلان واللافتات والمعارض وتجارب العلامات.',
      },
      coverage: {
        eyebrow: 'انتشارنا',
        heroTitle: 'تغطية وطنية',
        heroDescription: 'مكاتب وعمليات في جميع أنحاء المملكة — نخدم أكثر من 33 مدينة بجودة موحّدة وتسليم في الوقت المحدد.',
        regionsLabel: 'المناطق',
        citiesTitle: 'المدن التي نخدمها',
        locationLabel: 'الموقع',
        locationTitle: 'تجدنا هنا',
        locationDescription: 'مقرنا الرئيسي في جدة، المملكة العربية السعودية.',
      },
      clients: {
        eyebrow: 'الشراكات',
        heroTitle: 'عملاؤنا',
        heroDescription: 'نفخر بشراكتنا مع علامات ومؤسسات رائدة في قطاعات متنوعة.',
        trustedBy: 'يثق بنا',
        trustedByTitle: 'علامات اختارت كِت فاكتوري',
        trustedByDescription: 'مجموعة من العلامات والمؤسسات التي شاركناها تقديم نتائج استثنائية.',
        testimonialsLabel: 'آراء العملاء',
        testimonialsTitle: 'ماذا يقول عملاؤنا',
        testimonialsDescription: 'تقييمات حقيقية من العلامات والمؤسسات التي نخدمها.',
      },
      contact: {
        eyebrow: 'تواصل معنا',
        heroTitle: 'اتصل بنا',
        heroDescription: 'لديك مشروع في ذهنك؟ هيا نتحدث. املأ النموذج أدناه أو تواصل معنا مباشرة — نرد عادةً خلال يوم عمل واحد.',
        formTitle: 'أرسل لنا رسالة',
        formDescription: 'املأ النموذج أدناه وسنعود إليك قريباً.',
        infoTitle: 'معلومات الشركة',
        hours: 'الأحد – الخميس: 9:00 ص – 6:00 م',
        locationLabel: 'الموقع',
        locationTitle: 'قم بزيارتنا',
        locationDescription: 'جدة، المملكة العربية السعودية',
      },
    },
  },
};
