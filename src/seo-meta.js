// MDEV Site SEO
// Flat File JSON Object for easy SEO implementation

// Staging Build Flag -------------------------------
// This flag will tell the compiler wether you are working on
// staging or live. If the variable is True it means you are on
// staging build.
//
// This will affect which one of the URL's the builder will append
// to the social media images and the og:url attribute.
//
// This will allow for the staging branch to be tested on
// Facbeook / Twitter debugger panels.
//
// TODO -- Change stagingBuild to FALSE before live deploy.
let stagingBuild = true;

let template = {
  slug: '%s | Custom Signage',
  slugAddon: ' | Custom Signage',
  stageUrl: 'http://apexdisplay-staging.s3-website-us-east-1.amazonaws.com/',
  liveUrl: 'https://apexdisplaymedia.com',
}

let social = {
  appid: '443798143112942',
  ogtype: 'website',
  cardtype: 'summary_large_image',
  twsite: '@ApexDisplay',
  ogimage: 'social/MDEV-FB-OG-Home_v01.jpg',
  twimage: 'social/MDEV-TW-Card-Home_v01.png'
}

let general = {
  title: 'Apex Display Media',
  desc: 'We are a London-based hybrid digital agency offering process-driven branding, website development, software architecture, and business technology solutions'
}

export {
  stagingBuild,
  template,
  social,
  general
};
