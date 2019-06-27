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

// Export named variables
export {
  appData,
  mainNavigation
};
