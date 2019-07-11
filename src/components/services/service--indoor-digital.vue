<template lang="pug">
  //- Hero Main
  //- Apex Split
  //- Featured Tiles
  //- Service Block Single.
  section.--section-space-xl
    service-sample(
      v-for="(sample, index) in indoorData.serviceSamples"
      :media="sample.media"
      :heading="sample.heading"
      :copy="sample.copy"
      :list="sample.benefits")

  //- Featured Images
  //- Apex Split
</template>

<script>
// Import SEO From File
import { stagingBuild, template, social, general }       from '../../seo-meta.js';
import ServiceSample from './service--sample.vue';

import { indoorSignagePage } from '../../apex-data.js';

export default {
  name: 'ServicesIndoorDigital',

  data: function(){
    return {
      indoorData: indoorSignagePage
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
    'service-sample' : ServiceSample
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
