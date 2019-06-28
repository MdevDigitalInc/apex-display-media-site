<template lang="pug">
  //- Wrapper Container
  section.mdev-main-content
    //- Hero section -----------
    main-hero
    //- About Section ----------
    about-section
    //- Featured Services Section [ Lucas ] ----
    featured-services( :featuredServices="homeData.featuredServices" )
    //- Alternate Service Section [ Lucas ] ----
    alternate-services
    //- Support Services Section ----------
    support-services
    //- Pre-footer Section ----------
    pre-footer
    //- Main Footer
    main-footer
</template>




<script>

//Local Component registration
import MainHero from '../shared/main-hero.vue';
import AboutSection from './home--about-section.vue';
import FeaturedServices from './home--featured-service.vue';
import AlternateServices from '../shared/alternate-services.vue';
import SupportServices from '../shared/support-services.vue';

// Import SEO From File
import { stagingBuild, template, social, general }       from '../../seo-meta.js';

// Data Import
import { homePage } from '../../apex-data.js';

export default{
  name: 'HomePage',
  // TODO - Edit meta Title

  data: function(){
    return {
      homeData: homePage
    };
  },
  // Meta SEO Function
  metaInfo() {
    return {
      title: general.title,
      meta: [
        // SEO
        { vmid: 'desc', name: 'description', content: general.desc },
        { vmid: 'ogtitle', property: 'og:title', content: general.title + template.slugAddon },
        { vmid: 'ogimage', property: 'og:image', content: (stagingBuild ? template.stageUrl : template.liveUrl) + this.loadImage(social.ogimage) },
        { vmid: 'ogdesc', property: 'og:description', content: general.desc },
        { vmid: 'twtitle', name: 'twitter:title', content:  general.title + template.slugAddon },
        { vmid: 'twimage', name: 'twitter:image', content: (stagingBuild ? template.stageUrl : template.liveUrl) + this.loadImage(social.twimage) },
        { vmid: 'twdesc', name: 'twitter:description', content: general.desc }
      ]
    };
  },

  components: {
    'main-hero'         : MainHero,
    'about-section'     : AboutSection,
    'featured-services' : FeaturedServices,
    'alternate-services' : AlternateServices,
    'support-services'   : SupportServices
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* HOME Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
