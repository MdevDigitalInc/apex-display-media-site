<template lang="pug">
  section.mdev-main-content
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
      apex-service-info-blocks.--section-space-xl(
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
    apex-split-simple( :flip="true" :background="dataDigitalManagement.footSplitContent.background" :decoration="dataDigitalManagement.footSplitContent.decoration")
      template(slot='large-content')
        .--spacing
          h2.--margin-space-large(:class='dataDigitalManagement.footSplitContent.largeSplit.headingClass')
            | {{dataDigitalManagement.footSplitContent.largeSplit.heading}}
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
import { stagingBuild, template, social, general }  from '../../seo-meta.js';
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
