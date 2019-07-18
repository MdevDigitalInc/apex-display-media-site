// This file is intended to serve as a flat file DB to centralize
// some of the repeated app data. This is not a substitute for a
// Dynamic DB but can work well for non-dynamic features and for
// brochure websites
//
// 1. Create variables to contain JSON objects with data.
// 2. Export the variable so it can be imported by components.
// 3. Import the JSON Objects that you need for the given component.

// General App data
let appData = {
  blackBrand: 'apex-logo-black.svg',
  whiteBrand: 'apex-logo-white.svg',
};

// Main Navigation Links
let mainNavigation = {
  // Refer to routes.js file for available routes.
  links: [
    {
      linkName: 'Home',
      linkTitle: 'Home',
      route: '/'
    },
    {
      linkName: 'Outdoor LEDs',
      linkTitle: 'Outdoor LEDs',
      route: '/services/outdoor-digital-signs'
    },
    {
      linkName: 'Indoor Digital Signage',
      linkTitle: 'Indoor Digital Signage',
      route: '/services/indoor-digital-signs'
    },
    {
      linkName: 'Digital Media Management',
      linkTitle: 'Media Management',
      route: '/services/digital-media-management'
    }
  ]
};

// Home Page Template DATA
let homePage = {
  // Main Hero
  mainHero : {
    heading: 'Enhance your business with custom signage',
    subheading: 'We provide quality signage for any industry or market.',
    btnData: {
      class: 'apex-base-btn apex-red-btn',
      route: '#TODO',
      a11y: 'Enhance your business with digital signs!',
      text: 'Get Started'
    },
    media: {
      source: 'home/hero-home.png',
      gif: false,
      a11y: 'Custom pylon indoor sign'
    }
  },
  // Featured Services Component Data
  // ARRAY - For looping through featured services.
  featuredServices: [
    {
      heading: 'Outdoor</br>LED</br>Signage',
      copy: 'Give your business an extremely effective platform to advertise, build brand awareness and deliver results. The high visibility of outdoor LEDs will give your business an edge over the competition and open up a whole new market.',
      factInfo: 'A majority of consumers (<span class="u-bold">85</span>%) state that digital signage could influence future purchase decisions.',
      // Button DATA
      btnData: {
        class: 'apex-base-btn apex-red-btn',
        route: '/services/outdoor-digital-signs',
        a11y: 'LED Signage Benefits.',
        text: 'Learn More'
      },
      // Image DATA
      media: {
        source: 'home/home-outdoorled.png',
        gif: false,
        a11y: 'High quality Outdoor LED Sign panels'
      },
    },
    {
      heading: 'Indoor</br>Digital</br> Signage',
      copy: 'Help customers understand your business better by promoting your brand messaging, sales and events. Express your story with confidence on our high definition indoor commercial displays.',
      factInfo: 'Digital signage will become your most valuable on-site marketing tool.',
      // Button DATA
      btnData: {
        class: 'apex-base-btn apex-red-btn',
        route: '/services/indoor-digital-signs',
        a11y: 'Indoor Digital Signage Benefits.',
        text: 'Learn More'
      },
      // Image DATA
      media: {
        source: 'home/home-indoordigital.png',
        gif: false,
        a11y: 'High Definition Indoor Digital Displays'
      },
    },
    {
      heading: 'Digital</br>Media</br>Management',
      copy: 'Expertly designed digital content will maximize your ROI in hardware. Quality design and motion graphics help convey your brand messaging. With several membership options available, there’s sure to be an option to fit your business needs.',
      factInfo: 'Inform and empower consumers at critical decision making moments.',
      // Button DATA
      btnData: {
        class: 'apex-base-btn apex-red-btn',
        route: '/services/digital-media-management',
        a11y: 'How we keep your sign shining.',
        text: 'Learn More'
      },
      // Image DATA
      media: {
        source: 'home/home-digitalmedia.png',
        gif: false,
        a11y: 'Content Creation and Management'
      },
    }
  ],
  // Featured Block Single
  featuredBlock: {
    heading: 'Alternate</br>Display</br>Media',
    copy: [
      'Looking for static signage with impact? We also provide quality backlit signage and lettering for indoor and outdoor usage. Ideal for locations that want to show off their brand identity.',
      'Take generic acrylic panel signage to the next level with custom LED backlit channel letter signage.'
    ],
    color: '--blue',
    // Image Data
    media: {
      source: 'home/channel-lettering.png',
      gif: false,
      a11y: 'Custom Channel Lettering'
    }
  },
  // About Block Content
  aboutContent: {
    additionalServiceContent: {
      heading: 'We Offer',
      copy: [ 'We offer the most technologically advanced digital signage available. Built for life in Canada, our energy efficient, weatherproof signage is manufactured to withstand the harshest environmental conditions, all year round.',' We can create a brand new installation or retrofit existing signage – depending on what your business needs.',' After your signage has been installed, our managed content services are here to keep your signage up-to-date with your latest sales, promotions and events.'],
      headingClass: 'd-heading-flair d-heading-flair-blue u-bold',
      bgClass: '',
      btnData: {
        class: 'apex-base-btn apex-blue-btn',
        route: null,
        a11y: '',
        text: 'Learn More'
      }
    },
    highlight: {
      heading: 'About',
      copy: 'We are an end-to-end digital signage and content solution for your business. We provide custom design, manufacture, installation and content management – all backed by our full hardware warranty.',
      headingClass: 'd-heading-flair d-heading-flair-white u-bold',
      bgClass: 'apex-split-block-red',
      btnData: {
        class: 'apex-base-btn apex-plain-btn',
        route: '/',
        a11y: '',
        text: 'Learn More'
      }
    },
    class: 'apex-split-about-home'
  },
  supportServices: {
    additionalServiceContent: {
      serviceList: [
        {
          heading: 'Conceptual Design',
          copy: 'Our team helps right from the start – providing site plans, renderings and launch-ready content.',
        },
        {
          heading: 'Custom Installation',
          copy: 'We have the equipment and expertise needed to retrofit your existing sign, or install a new one.',
        },
        {
          heading: 'City Permitting',
          copy: 'Let our team negotiate permitting requirements while you worry about running your business.',
        },
        {
          heading: 'Removal &amp; Disposal',
          copy: 'Wondering what happens to your old sign? We’ll take it away and dispose of it safely, at no extra cost.',
        },
        {
          heading: 'Leasing Options',
          copy: 'Need flexibility with your digital signage purchase?  No problem. Ask us about available options.',
        },
        {
          heading: 'Warranty Coverage',
          copy: 'Enjoy peace of mind knowing that your digital sign is locally serviced and warrantied.',
        },
      ],
      heading: '',
      copy: '',
      headingClass: 'd-heading-flair d-heading-flair-blue u-bold',
      bgClass: 'apex-service-list-container',
      btnData: {
        class: 'apex-base-btn apex-black-btn',
        route: '/services/digital-media-management',
        a11y: 'Learn more about our managed media services',
        text: 'Learn More'
      }

    },
    highlight: {
      heading: 'Support Services',
      headingClass: 'd-heading-flair d-heading-flair-white u-bold',
      bgClass: 'apex-split-block-red',
      btnData: {
        class: '',
        route: null,
        a11y: '',
        text: ''
      }
    },
    class: 'apex-split-services --flip-order',
  },
  // Image Showcase (Prefooter)
  // OBJECT - Image Showcase configuration
  imageShowcase: {
    heading: 'Ready to enhance your business with digital signage?',
    // Button Data
    btnData: {
      class: 'apex-base-btn apex-black-btn',
      route: '#TODO',
      a11y: 'Get your free quote today!',
      text: 'Get Started'
    },
    media: {
      TopLeft: 'home/1-retail-fashion-signage.png',
      BotSquare: 'home/3-wayfinding-travel-signage.png',
      BotLeft: 'home/4-fitness-sign.png',
      BotRight: 'home/5-craft-beer-sign.png',
      Vertical: 'home/2-retail-sale-promo-signage_06.png'
    }
  }
}


let DigitalManagement = {
  // Main Hero
  mainHero: {
    heading: 'Digital Media</br>Management',
    subheading: 'Let our expert creative team produce and maintain the content that appears on your signs.',
    btnData: {
      class: 'apex-base-btn apex-black-btn --button-space',
      route: '/services/digital-media-management',
      a11y: 'Learn more about our Digital Media Services',
      text: 'Get Started'
    },
    background: 'services/managed/hero-digitalmedia.png',
    media: {
      source: false,
      sourceMob: 'services/managed/hero-digitalmedia-mobile.png',
      gif: false,
      a11y: 'Managed Digital Services'
    },
  },
  // Featured Block Single
  featuredBlock: {
    heading: 'Fully</br>Custom',
    copy: [
      'Let us know what type of experience you envision your vistors having and we’ll make your vision a reality!',
      'If you need something truly unique, such as an interactive kiosk or internal screen with real-time information for your production floor, we can help!',
      'Our custom design and development services can bring any idea or application to life.'
    ],
    color: '--blue',
    // Image Data
    media: {
      source: 'services/managed/custom-kiosk.png',
      gif: false,
      a11y: 'Custom kiosks and point of sale displays'
    }
  },
  // About Block Content
  splitContent: {
    background: '--red',
    decoration: '--bot-dots',
    largeSplit: {
      heading: 'How We Help',
      copy: [
        'Once you’ve made an investment in digital signage, it’s important to maximize your return by using eye-catching graphics and strong messaging. That’s where our Digital Media Management services come in – our marketing strategists can help with content planning while our expert designers keep your sign up-to-date with quality designs and motion graphics.',
        'We offer different membership packages to suit different budgets – whether you have one screen, or many screens across multiple locations, we’re here to help. We also offer one-time setup options and can train your team to take over after we’ve create the initial deployment. Get in touch to find out what’s possible!'
      ],
      headingClass: 'd-heading-flair d-heading-flair-blue u-bold',
    },
    highlight: {
      heading: 'We Provide',
      copy: [
        'Membership Packages',
        'Design Expertise',
        'Content Scheduling',
        'Update Remotely'
      ],
      headingClass: 'd-heading-flair d-heading-flair-white u-bold',
    }
  },

  membershipPackages: {
    heading: 'Membership </br> packages',
    packageList: [
      {
        heading: 'Starter </br> Membership',
        copy: 'Ideal for clients with 1-3 screens at one locations or anyone who is just getting started with digital signage. Our team will provide intial static graphics for launch and then work with you to provide minor updates as needed.',
        listItems: [
          {
            copy: 'Content created by design professionals'
          },
          {
            copy: 'Monthly support for minor updates'
          },
          {
            copy: 'Up to 5 static views'
          }
        ]
      },
      {
        heading: 'Intermediate </br> Membership',
        copy: '3+ screens, multiple locations....',
        listItems: [
          {
            copy: 'Access to a team of creative professionals'
          },
          {
            copy: 'Strategic content planning'
          },
          {
            copy: 'Motion graphics, multiple screens'
          }
        ]
      },
      {
        heading: 'Ultimate </br> Membership',
        copy: 'Our largest and most robust package - an Ultimate Membership provides ongoing support. There’s no limit on the number of screens or locations; we’ll work with you to come up with a tailored content strategy that makes sense for your business. ',
        listItems: [
          {
            copy: 'Partner with our team of creative design professionals'
          },
          {
            copy: 'Collaborate with our marketing strategists'
          },
          {
            copy: 'Ongoing photography and videography services'
          },
          {
            copy: 'Motion graphics, video content and interactive messaging'
          },
          {
            copy: 'Monetize your signage with ad content'
          }
        ]
      }
    ]
  },

  serviceInfo: {
    heading: 'Why invest in managed media?',
    copy: "Our design experts know how to make your signage work for your business. Updating your interior and exterior signage on a regular basis keeps customers engaged and informed, maximizing your return on investment in hardware.",
    contentBlocks: [
      {
        icon: 'icons/icon-conversions-blue.svg',
        heading: 'Maximize conversions',
        copy: 'Informed consumers are able to make confident purchase decisions. Make sure your visitors are aware of the latest promotions, sales, amenities and events at your location.',
        class: '',
        link: false
      },
      {
        icon: 'icons/icon-strategy-white.svg',
        heading: 'Content strategies',
        copy: 'We can help you create an ongoing content plan to keep your signage fresh. We’ll work with your team to align with your current marketing strategies and business goals.',
        class: '',
        link: false
      },
      {
        icon: 'icons/icon-schedule-blue.svg',
        heading: 'Schedule your content ahead of time',
        copy: 'Work with our creative team to plan your content ahead of time so that your signage will always align with your current marketing strategy.',
        class: '',
        link: false
      },
      {
        icon: 'icons/icon-brand-blue.svg',
        heading: 'Brand management',
        copy: 'Already have an established brand and asset library? Our expert creative team will use your assets with care to create well-branded, informative or conversion-centred content.',
        class: '',
        link: false
      },
      {
        icon: 'icons/icon-photography-white.svg',
        heading: 'Professional Photography',
        copy: 'Put your best foot forward. Our professional photography team will capture your location, products and/or menu items to create professional content for your signs.',
        class: '',
        link: false
      },
      {
        icon: 'icons/icon-creative-blue.svg',
        heading: 'Graphic design and creative services',
        copy: 'An investment in digital signage should be backed by an investment in design. From comprehensive menu systems, to digital posters, we’ll make sure your messaging is clear.',
        class: '',
        link: false
      }
    ]
  },

  footSplitContent: {
    background: '--red',
    decoration: '--bot-dots-right --arrow-top-left --super-center',
    largeSplit: {
      heading: 'Find out how we can help you with indoor signage',
      headingClass: 'd-heading-flair d-heading-flair-blue u-bold',
      // Button Data
      btnData: {
        class: 'apex-base-btn apex-blue-btn --button-space ',
        route: '/services/outdoor-digital-signs',
        a11y: 'Learn more about our Outdoor Digital LED Signs!',
        text: 'Learn More'
      },
    },
    highlight: {
      heading: 'Outdoor</br>Displays',
      headingClass: 'd-heading-flair d-heading-flair-white u-bold --center-both',
      media: {
        source: 'services/managed/nextpage-outdoorled.png',
        gif: false,
        a11y: 'Outdoor LED Display Samples'
      }
    }
  },

};
// Indoor Signage Data
let indoorSignagePage = {
  // Main Hero
  mainHero: {
    heading: 'Indoor Digital</br>Signage',
    subheading: 'Have a unique idea or application? Let our team execute on your vision.',
    btnData: {
      class: 'apex-base-btn apex-black-btn --button-space',
      route: '/services/digital-media-management',
      a11y: 'Learn more about our Digital Media Services',
      text: 'Get Started'
    },
    background: 'services/indoor/hero-indoordigital.png',
    media: {
      source: false,
      sourceMob: 'services/indoor/hero-indoordigital-mobile.png',
      gif: false,
      a11y: 'Large format indoor LED Screen'
    },
  },

  // Service Sample Array
  serviceSamples: [
    {
      // Image Data
      media: {
        source: 'services/indoor/retail-signage-indoors.png',
        gif: false,
        a11y: 'Retail Digital Signage Sample'
      },
      heading: 'Digital Menu</br>In-Store Promos',
      copy: 'Skip the printing fees! Digital media is the best way to keep your customers up-to-date on your latest menu items, promotions and sales. From one simple screen to multiple screens across many locations, we can help you create a menu system, content strategy and scheduled content that updates as often as you like.',
      benefits: [
        'Schedule sales and promo content',
        'Update content across multiple locations',
        'Customize content per location',
        'Bullet highlighting special feature'
      ]
    },
    {
      // Image Data
      media: {
        source: 'services/indoor/boardroom-signage.png',
        gif: false,
        a11y: 'Reception & Corporate Digital Signage Sample'
      },
      heading: 'Reception Areas</br>& Corporate Use',
      copy: 'Your waiting room is an ideal place for a digital sign. Visitors will appreciate the entertainment, and you can educate them on your products and services while they wait. Not limited to public venues, a digital screen in your break room or office can also be a great way to provide education and entertainment for your employees. Digital screens can also be useful in production environments to share real-time information and training.',
      benefits: [
        'Schedule content ahead of time',
        'Include apps like news, social media, weather, cable and updatable ticker feeds.',
        'Robust CMS allows easy content management',
        'Attract customer attention with motion graphiics and eye-catching designs'
      ]
    },
    {
      // Image Data
      media: {
        source: 'services/indoor/arena-signage.png',
        gif: false,
        a11y: 'Custom arena digital signs'
      },
      heading: 'Custom</br>Digital Signs',
      copy: 'interactive messaging engages customers more effectively than static signage. Customers are comfortable getting information from screens and are now seeking them out at retail locations. Digital signage also comes in many different shapes and sizes – making the options for on-site promotion endless. Not sure what you need? Get in touch, we’ll help you develop custom signage for your retail location.',
      benefits: [
        'Curved screens, video walls, transparent LED film, flexible LED banners, portable LED displays and more!',
        'Update from any internet-connected device',
        'Fine pitch LED screens allows viewing at close range'
      ]
    }
  ],
  // About Block Content
  splitContent: {
    background: '--red',
    decoration: '--bot-dots',
    largeSplit: {
      heading: 'How We Help',
      copy: [
        'From initial concepts, to final digital content ready at launch, we take a tailored approach to indoor digital displays. Big or small, we can help you find the right signage for your business needs. Looking for something unique? Our installation specialists are always available for a free on-site consultation to help you determine how to maximize your signage opportunities.',
        'The true advantage of working with us is that we provide it all, in-house. No need for you to coordinate several companies to facilitate your digital signage requirements. We’ll take care of all your needs from start to finish including ongoing content management and warranty coverage.',
      ],
      headingClass: 'd-heading-flair d-heading-flair-blue u-bold',
    },
    highlight: {
      heading: 'We Provide',
      copy: [
        'Conceptual Design',
        'Custom Installation',
        'Digital Media Management',
        'Full Warranty Coverage '
      ],
      headingClass: 'd-heading-flair d-heading-flair-white u-bold',
    }
  },
  footSplitContent: {
    background: '--red',
    decoration: '--bot-dots-right --arrow-top-left --super-center',
    largeSplit: {
      heading: 'Find out how we can help keep your signage up-to-date.',
      headingClass: 'd-heading-flair d-heading-flair-blue u-bold',
      // Button Data
      btnData: {
        class: 'apex-base-btn apex-blue-btn --button-space',
        route: '/services/digital-media-management',
        a11y: 'Learn more about our Outdoor Digital LED Signs!',
        text: 'Learn More'
      },
    },
    highlight: {
      heading: 'Digital Media</br>Management',
      headingClass: 'd-heading-flair d-heading-flair-white u-bold --center-both',
      media: {
        source: 'services/indoor/nextpage-digitalmedia.png',
        gif: false,
        a11y: 'Outdoor LED Display Samples'
      }
    }
  },
  // Service Info Blocks
  serviceInfo: {
    heading: 'Why invest in digital signage?',
    copy: "Digital signage creates opportunities to engage with your audience at meaningful moments. Help your customers understand your business better by educating them on in-store offerings, promotions and sales.",
    contentBlocks: [
      {
        icon: 'icons/icon-influence-blue.svg',
        heading: 'Influence consumer behavior',
        copy: 'High quality, eye-catching content has been proven to increase profits by making purchase decisions easy during retail transactions.',
        link: false
      },
      {
        icon: 'icons/icon-targets-white.svg',
        heading: 'Drive in-store traffic',
        copy: 'Attract attention to your location and increase conversions by making visitors aware of your latest promotions and events.',
        link: {
          route: '/services/digital-media-management',
          a11y: 'How digital signs drive in store traffic',
          text: 'Learn More'
        }
      },
      {
        icon: 'icons/icon-waittimes-blue.svg',
        heading: 'Decrease percieved waiting times',
        copy: 'Digital displays are a great distraction for visitors. Inform them about your services and provide content like news and weather while they wait inside your location.',
        link: false
      },
      {
        icon: 'icons/icon-internal-blue.svg',
        heading: 'Decrease percieved waiting times',
        copy: 'Digital displays are a great distraction for visitors. Inform them about your services and provide content like news and weather while they wait inside your location.',
        link: false
      },
      {
        icon: 'icons/icon-scheduling-white.svg',
        heading: 'Content scheduling',
        copy: 'Plan ahead with digital signage; rotate your messaging daily, weekly or monthly to keep things fresh and up-to-date. Find out how we can help! ',
        link: {
          route: '/services/digital-media-management',
          a11y: 'Learn More about our managed digital services',
          text: 'Learn More'
        }
      },
      {
        icon: 'icons/icon-inform-blue.svg',
        heading: 'Inform and educate visitors',
        copy: 'Provide on-site information with custom educational kiosks. Help your visitors to navigate with confidence with well-placed directional signage.',
      }
    ]
  }
}

// Indoor Signage Data
let outdoorSignagePage = {
  // Main Hero
  mainHero: {
    heading: 'Outdoor LED</br>Signage',
    subheading: 'Give your business an edge over the competition',
    btnData: {
      class: 'apex-base-btn apex-black-btn --button-space',
      route: '/services/digital-media-management',
      a11y: 'Learn more about our Digital Media Services',
      text: 'Get Started'
    },
    background: 'services/outdoor/hero-outdoorled.png',
    media: {
      source: 'services/outdoor/hero-outdoorled-soccer.png',
      sourceMob: 'services/outdoor/hero-outdoorled-mobile.png',
      gif: false,
      a11y: 'Large format outdoor LED screen'
    },
  },
  // About Block Content
  splitContent: {
    background: '--red',
    decoration: '--bot-dots',
    largeSplit: {
      heading: 'How We Help',
      copy: [
        'No matter what type of external digital signage your business needs, we can provide an outdoor digital sign solution in any size and scope. Our installation specialists have expertise in retrofitting an existing sign or customizing a completely new build.',
        'Our process will include site measurements, engineered drawings and assistance with city permitting. We’ll also provide launch-ready content for the day your installation is complete.',
        'No need for you to coordinate several companies to facilitate your digital signage requirements. We’ll take care of all your needs from start to finish including with ongoing content management and warranty coverage.'
      ],
      headingClass: 'd-heading-flair d-heading-flair-blue u-bold',
    },
    highlight: {
      heading: 'We Provide',
      copy: [
        'Conceptual Design',
        'Custom Installation',
        'Digital Media Management',
        'Full Warranty Coverage '
      ],
      headingClass: 'd-heading-flair d-heading-flair-white u-bold',
    }
  },
  // Service Sample Array
  serviceSamples: [
    {
      // Image Data
      media: {
        source: 'services/outdoor/exterior-retail-sign.png',
        gif: false,
        a11y: 'Wall Mounted LED Displays'
      },
      heading: 'One-Sided</br>Wall Mount',
      copy: 'Attract attention to your location with bright, high contrast exterior digital signage. Built for harsh environments, our digital sign technology provides reliable performance year round with exceptional image quality.',
      benefits: [
        'Comes in a variety of shapes and sizes',
        'Retrofit an existing sign or install a completely new one',
        'Monetize your content by providing ad space',
        'Split panels to show different multimedia content',
        'Schedule content and promos in advance'
      ]
    },
    {
      // Image Data
      media: {
        source: 'services/outdoor/pylon-sign.png',
        gif: false,
        a11y: 'Outdoor Pylon LED Signs'
      },
      heading: 'Pylon</br>Signs',
      copy: 'Build a custom pylon sign for your storefront or retail complex. We’ll work with you to build a sign that suits the look of your neighborhood or building facade. Advertise one business, or many, these tall, eye-catching signs can be shared between several businesses.',
      benefits: [
        'Retrofit an existing sign or install a completely new one',
        'Create a new source of revenue with advertising',
        'Highly visible from the road',
        'Built to suit any location or neighborhood'
      ]
    },
    {
      // Image Data
      media: {
        source: 'services/outdoor/highway-billboard.png',
        gif: false,
        a11y: 'Custom LED Signs Installation'
      },
      heading: 'Custom</br>Installation',
      copy: 'Create your own billboard! Building large-format signage on your property can be a great way to make passive revenue. If you have a location with high visibility from a busy roadway, you have a great opportunity to create a new source of income by broadcasting advertsiting messages.',
      benefits: [
        'We can create any type of outdoor signage from large billboards, to smaller, custom outdoor installations',
        'Create a new source of revenue with advertising',
        'Our team will make sure your installation is aligned with the right pitch density to maximize viewing from all distances.'
      ]
    }
  ],
  footSplitContent: {
    background: '--red',
    decoration: '--bot-dots-right --arrow-top-left --super-center',
    largeSplit: {
      heading: 'Find out how we can help with indoor signage',
      headingClass: 'd-heading-flair d-heading-flair-blue u-bold',
      // Button Data
      btnData: {
        class: 'apex-base-btn apex-blue-btn --button-space',
        route: '/services/indoor-digital-signs',
        a11y: 'Learn more about our Digital Media Services',
        text: 'Learn More'
      },
    },
    highlight: {
      heading: 'Indoor</br>Displays',
      headingClass: 'd-heading-flair d-heading-flair-white u-bold --center-both',
      media: {
        source: 'services/outdoor/nextpage-indoordigital.png',
        gif: false,
        a11y: 'Outdoor LED Display Samples'
      }
    }
  },
  // Service Info Blocks
  serviceInfo: {
    heading: 'Why invest in outdoor LEDs?',
    copy: "Outdoor LEDs are a highly effective advertising medium, allowing you to broadcast your message to a huge audience. Build brand awareness and deliver comprehensive information by implementing an outdoor display.",
    contentBlocks: [
      {
        icon: 'icons/icon-conceptual-blue.svg',
        heading: 'Setup a new installation',
        copy: 'If you don’t have signage at your location yet, we can help. We’ll navigate permitting and permissions and our installation specialists are well-equipped to handle construction and setup requirements.',
        link: false
      },
      {
        icon: 'icons/icon-awareness-white.svg',
        heading: 'Raise brand awareness',
        copy: 'Attract attention to your location with a brightly coloured digital display proudly showcasing your brand, services, sales, news and events.',
        link: {
          route: '/services/digital-media-management',
          a11y: 'How digital signs increase brand awareness',
          text: 'Learn More'
        }
      },
      {
        icon: 'icons/icon-updates-blue.svg',
        heading: 'Hassle-free updates',
        copy: 'Sick of battling cold, heat and rain to update your outdoor signage? A digital display makes updates fast and easy so you can make updates more often – without any of the fuss. ',
        link: false
      },
      {
        icon: 'icons/icon-built-blue.svg',
        heading: 'Built for tough climates',
        copy: 'Our LED Panels are 100% weatherproof, with no moving parts to break down. Energy efficient and built to operate 24 hours a day, your sign ill not dim or lose quality over time. ',
        link: false
      },
      {
        icon: 'icons/icon-promote-white.svg',
        heading: 'Promote sales and news',
        copy: 'Keep passersby up-to-date on  your latest offerings with digital signage. Our managed services let you easily update graphics and schedule content.',
        link: {
          route: '/services/digital-media-management',
          a11y: 'Learn More about our managed digital services',
          text: 'Learn More'
        }
      },
      {
        icon: 'icons/icon-custom-blue.svg',
        heading: 'Upgrade existing signage',
        copy: 'If you’ve already invested in static outdoor signage, chances are we can help you convert all or part of it to an LED display. We’ll even remove your old signage and dispose of it at no additional cost.',
        ling: false
      }
    ]
  }
}
// Export named variables
export {
  appData,
  mainNavigation,
  homePage,
  DigitalManagement,
  indoorSignagePage,
  outdoorSignagePage
};
