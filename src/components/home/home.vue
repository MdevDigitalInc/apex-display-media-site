<template lang="pug">
  //- Wrapper Container
  section.mdev-main-content
    //- Hero section -----------
    main-hero
    //- About Section ----------
    //about-section(:homePage.aboutContent="homePage.homePage.aboutContent")
    .apex-about-section
      //- Apex Split Component
      apex-split(:content='homePage.aboutContent')
        template(slot='additional-service-content' v-if = 'homePage.aboutContent.additionalServiceContent.serviceList')
          //- Support Services Component
        template(slot='additional-service-content' v-else)
          h2.--margin-space-large(:class='homePage.aboutContent.additionalServiceContent.headingClass')
            | {{homePage.aboutContent.additionalServiceContent.heading}}
          p
            | {{homePage.aboutContent.additionalServiceContent.copy}}
          router-link(
          v-if = 'homePage.aboutContent.additionalServiceContent.btnData.route'
          :class='homePage.aboutContent.additionalServiceContent.btnData.class'
          :to='homePage.aboutContent.additionalServiceContent.btnData.route')
            | {{homePage.aboutContent.additionalServiceContent.btnData.text}}
        template(slot='highlight')
          h2.--margin-space-large(:class='homePage.aboutContent.highlight.headingClass')
            | {{homePage.aboutContent.highlight.heading}}
          p
            | {{homePage.aboutContent.highlight.copy}}
          router-link(
           v-if = 'homePage.aboutContent.highlight.btnData.route'
           :class='homePage.aboutContent.highlight.btnData.class'
           :to='homePage.aboutContent.highlight.btnData.route')
            | {{homePage.aboutContent.highlight.btnData.text}}
    //- Featured Services Section [ Lucas ] ----
    featured-services(
      :featuredServices="homePage.featuredServices"
      class="--section-space-xl")
    //- Alternate Service Section [ Lucas ] ----
    alternate-services
    //- Support Services Section ----------
    .apex-support-services-section
      //- Apex Split Component
      apex-split(:content='homePage.supportServices')
        template(slot='additional-service-content' v-if = 'homePage.supportServices.additionalServiceContent.serviceList')
          support-services(:content='homePage.supportServices')
          router-link(
           v-if = 'homePage.supportServices.additionalServiceContent.btnData.route'
           :class='homePage.supportServices.additionalServiceContent.btnData.class'
           :to='homePage.supportServices.additionalServiceContent.btnData.route')
            | {{homePage.supportServices.additionalServiceContent.btnData.text}}
        template(slot='additional-service-content' v-else)
          h2.--margin-space-large(:class='homePage.supportServices.additionalServiceContent.headingClass')
            | {{homePage.supportServices.additionalServiceContent.heading}}
          p
            | {{homePage.supportServices.additionalServiceContent.copy}}
          router-link(
           v-if = 'homePage.supportServices.additionalServiceContent.btnData.route'
           :class='homePage.supportServices.additionalServiceContent.btnData.class'
           :to='homePage.supportServices.additionalServiceContent.btnData.route')
            | {{homePage.supportServices.additionalServiceContent.btnData.text}}
        template(slot='highlight')
          h2.--margin-space-large(:class='homePage.supportServices.highlight.headingClass')
            | {{homePage.supportServices.highlight.heading}}
            p
              | {{homePage.supportServices.highlight.copy}}
          router-link(
            v-if = 'homePage.supportServices.highlight.btnData.route'
           :class='homePage.supportServices.highlight.btnData.class'
           :to='homePage.supportServices.highlight.btnData.route')
            | {{homePage.supportServices.highlight.btnData.text}}
    //- Pre-footer Section ----------
    pre-footer
    //- Main Footer
    main-footer
</template>




<script>

//Local Component registration
import MainHero from '../shared/main-hero.vue';
import FeaturedServices from './home--featured-service.vue';
import AlternateServices from '../shared/alternate-services.vue';
import ApexSplit from '../shared/apex-split.vue';
import SupportServices from '../shared/support-services.vue';

//import SupportServices from '../shared/support-services.vue';

// Import SEO From File
import { stagingBuild, template, social, general }       from '../../seo-meta.js';

// Data Import
import { homePage } from '../../apex-data.js';

export default{
  name: 'HomePage',
  // TODO - Edit meta Title

  data: function(){
    return {
      homePage: homePage
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
    'featured-services' : FeaturedServices,
    'alternate-services' : AlternateServices,
    'support-services'   : SupportServices,
    'apex-split' : ApexSplit,
    'support-services' : SupportServices
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* HOME Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
