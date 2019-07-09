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
    class: 'apex-split-services --flip-order'
  }
}

// Export named variables
export {
  appData,
  mainNavigation,
  homePage
};
