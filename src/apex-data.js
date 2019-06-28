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
      heading: 'Outdoor LED Signage',
      copy: 'Give your business the most effective platform to advertise, build brand awareness and deliver results. The high visibility of outdoor LEDs will give your business an edge over the competition.',
      factInfo: 'A majority of consumers (<span class="u-bold">85</span>%) state that digital signage could influence future purchase decisions.',
      // Button DATA
      action: {
        route: '#TODO',
        a11y: 'LED Signage Benefits.',
        text: 'Learn More'
      },
      // Image DATA
      media: {
        source: '/home/featured-service-placeholder.jpeg',
        gif: false,
        a11y: 'Placeholder - TODO update'
      },
    },
    {
      heading: 'Indoor Digital Signage',
      copy: 'Help customers understand your business better. Express your brand messaging, promotions and expertly tell your story on our HD commerical indoor displays.',
      factInfo: 'Digital signage will become your most valuable on-site marketing tool.',
      // Button DATA
      action: {
        route: '#TODO',
        a11y: 'Indoor Digital Signage Benefits.',
        text: 'Learn More'
      },
      // Image DATA
      media: {
        source: '/home/featured-service-placeholder.jpeg',
        gif: false,
        a11y: 'Placeholder - TODO update'
      },
    },
    {
      heading: 'Digital Media Management',
      copy: 'Quality design and motion graphics help convey eye-catching messaging.  With several membership packages available, there’s sure to be an option to fit your business needs.',
      factInfo: 'Expertly designed content maximizes your ROI in hardware.',
      // Button DATA
      action: {
        route: '#TODO',
        a11y: 'How we keep your sign shining.',
        text: 'Learn More'
      },
      // Image DATA
      media: {
        source: '/home/featured-service-placeholder.jpeg',
        gif: false,
        a11y: 'Placeholder - TODO update'
      },
    }
  ]
}

// Export named variables
export {
  appData,
  mainNavigation,
  homePage
};
