<template lang="pug">
  //- Wrapper Container
  section.mdev-main-content
    //- Hero section -----------
    home-hero( :heading="homeData.mainHero.heading"
      :subheading="homeData.mainHero.subheading"
      :action="homeData.mainHero.btnData"
      :media="homeData.mainHero.media")
    //- About Section
    .apex-about-section.--home-hero
      //- Apex Split Component
      apex-split(:content='homeData.aboutContent')
        template(slot='additional-service-content' v-if = 'homeData.aboutContent.additionalServiceContent.serviceList')
          //- Support Services Component
        template(slot='additional-service-content' v-else)
          h2.--margin-space-large(:class='homeData.aboutContent.additionalServiceContent.headingClass')
            | {{homeData.aboutContent.additionalServiceContent.heading}}
          p( v-for="paragraph in homeData.aboutContent.additionalServiceContent.copy" )
            |{{ paragraph }}
          router-link(
          v-if = 'homeData.aboutContent.additionalServiceContent.btnData.route'
          :class='homeData.aboutContent.additionalServiceContent.btnData.class'
          :to='homeData.aboutContent.additionalServiceContent.btnData.route')
            | {{homeData.aboutContent.additionalServiceContent.btnData.text}}
        template(slot='highlight')
          h2.--margin-space-large(:class='homeData.aboutContent.highlight.headingClass')
            | {{homeData.aboutContent.highlight.heading}}
          p
            | {{homeData.aboutContent.highlight.copy}}
          //router-link(
           v-if = 'homeData.aboutContent.highlight.btnData.route'
           :class='homeData.aboutContent.highlight.btnData.class'
           :to='homeData.aboutContent.highlight.btnData.route')
            | {{homeData.aboutContent.highlight.btnData.text}}
    featured-services(
      :featuredServices="homeData.featuredServices")
    //- Alternate Service Section ----
    featured-block-single(
      :heading="homeData.featuredBlock.heading"
      :copy="homeData.featuredBlock.copy"
      :color="homeData.featuredBlock.color"
      :media="homeData.featuredBlock.media")
    //- Support Services Section ----------
    .apex-support-services-section
      //- Apex Split Component
      apex-split(:content='homeData.supportServices')
        template(slot='additional-service-content' v-if = 'homeData.supportServices.additionalServiceContent.serviceList')
          support-services(:content='homeData.supportServices')
          router-link(
           v-if = 'homeData.supportServices.additionalServiceContent.btnData.route'
           :class='homeData.supportServices.additionalServiceContent.btnData.class'
           :to='homeData.supportServices.additionalServiceContent.btnData.route')
            | {{homeData.supportServices.additionalServiceContent.btnData.text}}
        template(slot='additional-service-content' v-else)
          h2.--margin-space-large(:class='homeData.supportServices.additionalServiceContent.headingClass')
            | {{homeData.supportServices.additionalServiceContent.heading}}
          p
            | {{homeData.supportServices.additionalServiceContent.copy}}
          router-link(
           v-if = 'homeData.supportServices.additionalServiceContent.btnData.route'
           :class='homeData.supportServices.additionalServiceContent.btnData.class'
           :to='homeData.supportServices.additionalServiceContent.btnData.route')
            | {{homeData.supportServices.additionalServiceContent.btnData.text}}
        template(slot='highlight')
          h2.--margin-space-large(:class='homeData.supportServices.highlight.headingClass')
            | {{homeData.supportServices.highlight.heading}}
            p
              | {{homeData.supportServices.highlight.copy}}
          router-link(
            v-if = 'homeData.supportServices.highlight.btnData.route'
           :class='homeData.supportServices.highlight.btnData.class'
           :to='homeData.supportServices.highlight.btnData.route')
            | {{homeData.supportServices.highlight.btnData.text}}
    //- ImageShowcase ----------
    image-showcase(
      :heading="homeData.imageShowcase.heading"
      :action="homeData.imageShowcase.btnData"
      :media="homeData.imageShowcase.media")
</template>

<script>

//Local Component registration
import MainHero from '../shared/main-hero.vue';
import ApexSplit from '../shared/apex-split.vue';
import ImageShowcase from '../shared/image-showcase.vue';
import FeaturedBlockSingle from '../shared/featured-block-single.vue';
import SupportServices from '../shared/support-services.vue';
import FeaturedServices from './home--featured-service.vue';
import HomeHero from './home--hero.vue';

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
    'main-hero'            : MainHero,
    'featured-block-single': FeaturedBlockSingle,
    'main-hero'            : MainHero,
    'featured-services'    : FeaturedServices,
    'apex-split'           : ApexSplit,
    'support-services'     : SupportServices,
    'home-hero'            : HomeHero,
    'image-showcase'       : ImageShowcase
  }
};
</script>



<style lang="scss">
/*-------------------------------------*/
/* HOME Component Styles
/--------------------------------------*/
.apex-support-services-section {
  margin-top: 100px;

  @media #{$portrait} {
    margin-top: 0;
  }
}
/*--------------------------------------*/
</style>
