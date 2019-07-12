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
      linkName: 'Indoor Digital Signage',
      linkTitle: 'Indoor Digital Signage',
      route: '/indoor-digital-signage'
    },
    {
      linkName: 'Outdoor LEDs',
      linkTitle: 'Outdoor LEDs',
      route: '/outdoor-leds'
    },
    {
      linkName: 'About',
      linkTitle: 'About',
      route: '/about'
    },
    {
      linkName: 'Contact Us',
      linkTitle: 'Contact Us',
      route: '/contact'
    }
  ]
};

// Home Page Template DATA
let homePage = {
  // Featured Services Component Data
  // ARRAY - For looping through featured services.
  featuredServices: [
    {
      heading: 'Outdoor</br>LED</br>Signage',
      copy: 'Give your business the most effective platform to advertise, build brand awareness and deliver results. The high visibility of outdoor LEDs will give your business an edge over the competition.',
      factInfo: 'A majority of consumers (<span class="u-bold">85</span>%) state that digital signage could influence future purchase decisions.',
      // Button DATA
      btnData: {
        class: 'apex-base-btn apex-red-btn',
        route: '#TODO',
        a11y: 'LED Signage Benefits.',
        text: 'Learn More'
      },
      // Image DATA
      media: {
        source: 'home/featured-service-placeholder.jpeg',
        gif: false,
        a11y: 'Placeholder - TODO update'
      },
    },
    {
      heading: 'Indoor</br>Digital</br> Signage',
      copy: 'Help customers understand your business better. Express your brand messaging, promotions and expertly tell your story on our HD commerical indoor displays.',
      factInfo: 'Digital signage will become your most valuable on-site marketing tool.',
      // Button DATA
      btnData: {
        class: 'apex-base-btn apex-red-btn',
        route: '#TODO',
        a11y: 'Indoor Digital Signage Benefits.',
        text: 'Learn More'
      },
      // Image DATA
      media: {
        source: 'home/featured-service-placeholder.jpeg',
        gif: false,
        a11y: 'Placeholder - TODO update'
      },
    },
    {
      heading: 'Digital</br>Media</br>Management',
      copy: 'Quality design and motion graphics help convey eye-catching messaging.  With several membership packages available, there’s sure to be an option to fit your business needs.',
      factInfo: 'Expertly designed content maximizes your ROI in hardware.',
      // Button DATA
      btnData: {
        class: 'apex-base-btn apex-red-btn',
        route: '#TODO',
        a11y: 'How we keep your sign shining.',
        text: 'Learn More'
      },
      // Image DATA
      media: {
        source: 'home/featured-service-placeholder.jpeg',
        gif: false,
        a11y: 'Placeholder - TODO update'
      },
    }
  ],
  // Featured Block Single
  featuredBlock: {
    heading: 'Alternate</br>Display</br>Media',
    copy: [
      'Looking for static signage with impact? We also provide quality backlit signage and lettering for indoor and outdoor usage. Ideal for locations that want to show off their brand identity.',
      'Take generic acrylic panel signage to the next level with our custom LED backlit channel letter signage.'
    ],
    color: '--blue',
    // Image Data
    media: {
      source: 'home/featured-block-single-placeholder.jpeg',
      gif: false,
      a11y: 'Placeholder - TODO Update'
    }
  },
  // About Block Content
  aboutContent: {
    additionalServiceContent: {
      heading: 'We offer',
      copy: 'We offer the most technologically advanced digital signage available. Built for life in Canada, our energy efficient, weatherproof signage is manufactured to withstand the harshest environmental conditions, all year round. We can create a brand new installation or retrofit existing signage – depending on what your business needs. After your signage has been installed, our managed content services are here to keep your signage up-to-date with your latest sales, promotions and events.',
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
      copy: 'We are an end-to-end digital signage and content solution for your business. We provide custom design, manufacture, installation and content management – all backed by a full hardware warranty.',
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
          heading: 'Financing Options',
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
        class: 'apex-base-btn apex-red-btn',
        route: '/',
        a11y: '',
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
      TopLeft: 'home/image-showcase-placeholder-reg.jpeg',
      BotSquare: 'home/image-showcase-placeholder-sq.jpeg',
      BotLeft: 'home/image-showcase-placeholder-reg.jpeg',
      BotRight: 'home/image-showcase-placeholder-reg.jpeg',
      Vertical: 'home/image-showcase-placeholder-vert.jpeg'
    }
  }
}


let DigitalManagement = {

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
        route: null
      },
      {
        icon: 'icons/icon-strategy-white.svg',
        heading: 'Content strategies',
        copy: 'We can help you create an ongoing content plan to keep your signage fresh. We’ll work with your team to align with your current marketing strategies and business goals.',
        class: '',
        route: null
      },
      {
        icon: 'icons/icon-schedule-blue.svg',
        heading: 'Schedule your content ahead of time',
        copy: 'Work with our creative team to plan your content ahead of time so that your signage will always align with your current marketing strategy.',
        class: '',
        route: null
      },
      {
        icon: 'icons/icon-brand-blue.svg',
        heading: 'Brand management',
        copy: 'Already have an established brand and asset library? Our expert creative team will use your assets with care to create well-branded, informative or conversion-centred content.',
        class: '',
        route: null
      },
      {
        icon: 'icons/icon-photography-white.svg',
        heading: 'Professional Photography',
        copy: 'Put your best foot forward. Our professional photography team will capture your location, products and/or menu items to create professional content for your signs.',
        class: '',
        route: null
      },
      {
        icon: 'icons/icon-creative-blue.svg',
        heading: 'Graphic design and creative services',
        copy: 'An investment in digital signage should be backed by an investment in design. From comprehensive menu systems, to digital posters, we’ll make sure your messaging is clear.',
        class: '',
        route: null
      }
    ]
  }
};
// Indoor Signage Data
let indoorSignagePage = {
  // Service Sample Array
  serviceSamples: [
    {
      // Image Data
      media: {
        source: 'services/indoor/service-sample-placeholder.jpeg',
        gif: false,
        a11y: 'Placeholder - TODO Update'
      },
      heading: 'Digital Menu</br>Board Systems',
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
        source: 'services/indoor/service-sample-placeholder.jpeg',
        gif: false,
        a11y: 'Placeholder - TODO Update'
      },
      heading: 'Lobbies &</br>Waiting Rooms',
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
        source: 'services/indoor/service-sample-placeholder.jpeg',
        gif: false,
        a11y: 'Placeholder - TODO Update'
      },
      heading: 'Retail</br>Promotion',
      copy: 'interactive messaging engages customers more effectively than static signage. Customers are comfortable getting information from screens and are now seeking them out at retail locations. Digital signage also comes in many different shapes and sizes – making the options for on-site promotion endless. Not sure what you need? Get in touch, we’ll help you develop custom signage for your retail location.',
      benefits: [
        'Schedule sale & promo content',
        'Update content across multiple locations',
        'Customize content per location',
        'bullet highlighting special feature'
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
        'From initial concepts, to final digital content ready at launch, we take a tailored approached to indoor digital displays. Big or small, we can help you find the right signage for your business needs. Looking for something unique? Our installation specialists are always available for a free on-site consultation to help you determine how to maximize your signage opportunities.',
        'The true advantage of working with us is that we provide it all, in-house. No need for you to coordinate several companies to facilitate your digital signage requirements. We’ll take care of all your needs from start to finish including with ongoing content management and warranty coverage.',
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
    decoration: '--bot-dots-right',
    largeSplit: {
      heading: 'How We Help',
      copy: [
        'From initial concepts, to final digital content ready at launch, we take a tailored approached to indoor digital displays. Big or small, we can help you find the right signage for your business needs. Looking for something unique? Our installation specialists are always available for a free on-site consultation to help you determine how to maximize your signage opportunities.',
        'The true advantage of working with us is that we provide it all, in-house. No need for you to coordinate several companies to facilitate your digital signage requirements. We’ll take care of all your needs from start to finish including with ongoing content management and warranty coverage.',
      ],
      headingClass: 'd-heading-flair d-heading-flair-blue u-bold',
    },
    highlight: {
      heading: 'Digital Media Management',
      headingClass: 'd-heading-flair d-heading-flair-white u-bold --center-both',
    }
  },
}

// Export named variables
export {
  appData,
  mainNavigation,
  homePage,
  DigitalManagement,
  indoorSignagePage
};
