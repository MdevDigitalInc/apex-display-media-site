<template lang="pug">
  section.mdev-main-content
    //- Hero Main
    main-hero
    //- Apex Split
    apex-split-simple( :flip="false" :background="outdoorData.splitContent.background" :decoration="outdoorData.splitContent.decoration")
      template(slot='large-content')
        h2.--margin-space-large(:class='outdoorData.splitContent.largeSplit.headingClass')
          | {{outdoorData.splitContent.largeSplit.heading}}
        p(v-for="paragraph in outdoorData.splitContent.largeSplit.copy")
          |{{ paragraph }}

      template(slot='highlight-content')
        h2.--margin-space-large(:class='outdoorData.splitContent.highlight.headingClass')
          | {{outdoorData.splitContent.highlight.heading}}
        ul
          li(v-for="paragraph in outdoorData.splitContent.highlight.copy")
            | {{ paragraph }}
    //- Featured Tiles
    section.apex-main-wrapper
      apex-service-info-blocks.--section-space-xl(
        :heading='outdoorData.serviceInfo.heading'
        :copy="outdoorData.serviceInfo.copy"
        :contentBlocks='outdoorData.serviceInfo.contentBlocks')
    //- Service Block Single.
    section.--section-space-xl
      service-sample(
        v-for="(sample, index) in outdoorData.serviceSamples"
        :media="sample.media"
        :heading="sample.heading"
        :copy="sample.copy"
        :list="sample.benefits")
    //- Apex Split
    apex-split-simple( modifier="--image" :flip="true" :background="outdoorData.footSplitContent.background" :decoration="outdoorData.footSplitContent.decoration")
      template(slot='large-content')
        .--spacing
          h2.--margin-space-large(:class='outdoorData.footSplitContent.largeSplit.headingClass')
            | {{outdoorData.footSplitContent.largeSplit.heading}}
          universal-image( :source="outdoorData.footSplitContent.highlight.media.source" :gif="false" :a11y="outdoorData.footSplitContent.highlight.media.a11y" )
          base-btn( :btnData="outdoorData.footSplitContent.largeSplit.btnData")
      template(slot='highlight-content')
        h2.--margin-space-large(v-html="outdoorData.footSplitContent.highlight.heading" :class='outdoorData.footSplitContent.highlight.headingClass')
    //- ImageShowcase ----------
    image-showcase(
      :heading="homeData.imageShowcase.heading"
      :action="homeData.imageShowcase.btnData"
      :media="homeData.imageShowcase.media")


</template>

<script>
// Import SEO From File
import { stagingBuild, template, social, general }       from '../../seo-meta.js';
import ServiceSample from './service--sample.vue';
import ApexSplitSimple from '../shared/apex-split-simple.vue';
import ServiceInfoBlocks from '../shared/apex-service-info-blocks.vue';
import ImageShowcase from '../shared/image-showcase.vue';

import { outdoorSignagePage, homePage } from '../../apex-data.js';

export default {
  name: 'ServiceManage',
  data: function(){
    return {
      outdoorData: outdoorSignagePage,
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
    'service-sample' : ServiceSample,
    'image-showcase'    : ImageShowcase,
    'apex-service-info-blocks' : ServiceInfoBlocks,
    'apex-split-simple' : ApexSplitSimple
  }

};
</script>



<style lang="scss">
/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/
/*--------------------------------------*/

</style>
