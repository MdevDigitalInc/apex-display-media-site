<template lang="pug">
  section.mdev-main-content
    //- Hero Main
    main-hero(
      :heading="dataDigitalManagement.mainHero.heading"
      :subheading="dataDigitalManagement.mainHero.subheading"
      :action="dataDigitalManagement.mainHero.btnData"
      modifier="--img-pullup"
      :media="dataDigitalManagement.mainHero.media"
      :background="dataDigitalManagement.mainHero.background")
    //- Apex Split
    apex-split-simple( :flip="false" :background="dataDigitalManagement.splitContent.background" :decoration="dataDigitalManagement.splitContent.decoration")
      template(slot='large-content')
        h2.--margin-space-large(:class='dataDigitalManagement.splitContent.largeSplit.headingClass')
          | {{dataDigitalManagement.splitContent.largeSplit.heading}}
        p(v-for="paragraph in dataDigitalManagement.splitContent.largeSplit.copy")
          |{{ paragraph }}

      template(slot='highlight-content')
        h2.--margin-space-large(:class='dataDigitalManagement.splitContent.highlight.headingClass')
          | {{dataDigitalManagement.splitContent.highlight.heading}}
        ul
          li(v-for="paragraph in dataDigitalManagement.splitContent.highlight.copy")
            | {{ paragraph }}
    //-Service Info Blocks Component
    section.apex-main-wrapper
      apex-service-info-blocks.--section-space-digi(
        :heading='dataDigitalManagement.serviceInfo.heading'
        :copy="dataDigitalManagement.serviceInfo.copy"
        :contentBlocks='dataDigitalManagement.serviceInfo.contentBlocks')
    //-Service Member Packages
    apex-member-packages(
      :heading="dataDigitalManagement.membershipPackages.heading"
      :packages="dataDigitalManagement.membershipPackages.packageList"
    )
    //- Alternate Service Section ----
    section.--section-space-xl
      featured-block-single(
        :heading="dataDigitalManagement.featuredBlock.heading"
        :copy="dataDigitalManagement.featuredBlock.copy"
        :color="dataDigitalManagement.featuredBlock.color"
        :media="dataDigitalManagement.featuredBlock.media")
    //- Apex Split
    apex-split-simple( modifier="--image" :flip="true" :background="dataDigitalManagement.footSplitContent.background" :decoration="dataDigitalManagement.footSplitContent.decoration")
      template(slot='large-content')
        .--spacing
          h2.--margin-space-large(:class='dataDigitalManagement.footSplitContent.largeSplit.headingClass')
            | {{dataDigitalManagement.footSplitContent.largeSplit.heading}}
          universal-image( :source="dataDigitalManagement.footSplitContent.highlight.media.source" :gif="false" :a11y="dataDigitalManagement.footSplitContent.highlight.media.a11y" )
          base-btn( :btnData="dataDigitalManagement.footSplitContent.largeSplit.btnData")
      template(slot='highlight-content')
        h2.--margin-space-large(v-html="dataDigitalManagement.footSplitContent.highlight.heading" :class='dataDigitalManagement.footSplitContent.highlight.headingClass')
    //- ImageShowcase ----------
    image-showcase(
      :heading="homeData.imageShowcase.heading"
      :action="homeData.imageShowcase.btnData"
      :media="homeData.imageShowcase.media")

</template>




<script>
// Import SEO From File
import { managed, templateInner, stagingBuild, template, social, general }  from '../../seo-meta.js';
import ApexSplitSimple from '../shared/apex-split-simple.vue';
import ImageShowcase from '../shared/image-showcase.vue';
import FeaturedBlockSingle from '../shared/featured-block-single.vue';
import MemberPackages from '../shared/apex-member-packages.vue';
import { DigitalManagement, homePage } from '../../apex-data.js';
import ServiceInfoBlocks from '../shared/apex-service-info-blocks.vue';

export default {
  name: 'ServicesDigitalMediaManagement',

  data: function(){
    return {
      dataDigitalManagement: DigitalManagement,
      homeData: homePage
    };
  },
  // Meta SEO Function
  metaInfo() {
    return {
      title: managed.title,
      meta: [
        // SEO
        { vmid: 'desc', name: 'description', content: managed.desc },
        { vmid: 'ogtitle', property: 'og:title', content: managed.title + templateInner.slugAddon },
        { vmid: 'ogimage', property: 'og:image', content: (stagingBuild ? templateInner.stageUrl : templateInner.liveUrl) + this.loadImage(social.ogimage) },
        { vmid: 'ogdesc', property: 'og:description', content: managed.desc },
        { vmid: 'twtitle', name: 'twitter:title', content:  managed.title + templateInner.slugAddon },
        { vmid: 'twimage', name: 'twitter:image', content: (stagingBuild ? templateInner.stageUrl : templateInner.liveUrl) + this.loadImage(social.twimage) },
        { vmid: 'twdesc', name: 'twitter:description', content: managed.desc }
      ]
    };
  },

  components: {
    'apex-service-info-blocks'         : ServiceInfoBlocks,
    'featured-block-single': FeaturedBlockSingle,
    'apex-member-packages' : MemberPackages,
    'apex-split-simple' : ApexSplitSimple,
    'image-showcase'    : ImageShowcase,
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
