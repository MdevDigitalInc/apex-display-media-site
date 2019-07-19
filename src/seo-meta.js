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
let stagingBuild = false;

let template = {
  slug: '%s | Digital Signage | London, Canada',
  slugAddon: ' | Digital Signage | London, Canada',
  stageUrl: 'http://apexdisplay-staging.s3-website-us-east-1.amazonaws.com/',
  liveUrl: 'https://apexdisplaymedia.com',
}

let templateInner = {
  slug: '%s | Apex Display Media | London, Canada',
  slugAddon: ' | Apex Display Media | London, Canada',
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
  desc: 'We are a digital signage and content solution for your business. We provide custom design, installation and content management – with a full hardware warranty.'
}

let outdoor = {
  title: 'Outdoor LED Signage',
  desc: 'We provide weather-proof, professionally installed, custom outdoor LED signage with ongoing personalized content management - including full hardware warranty.'
}

let indoor = {
  title: 'Indoor Digital Signage',
  desc: 'From initial concepts, to final digital content ready at launch, we\'ll provide a tailored solution to your indoor digital signage and business needs.'
}

let managed = {
  title: 'Digital Media Management',
  desc: 'Our expert team will provide on-brand content strategies, professional phtography and eye-catching graphic designs - with focus on maximizing value & conversions.'
}

export {
  stagingBuild,
  template,
  social,
  general,
  indoor,
  templateInner,
  outdoor,
  managed
};
