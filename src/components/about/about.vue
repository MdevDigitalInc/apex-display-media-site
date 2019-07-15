<template lang="pug">
  .mdev-main-content
    h1
      |ABOUT
    br
    br
    br
    br
    br
    br
    br
    br
    support-services-blocks(:supportServices='aboutData.supportServices.serviceList' :heading='aboutData.supportServices.heading' :headingClass='aboutData.supportServices.headingClass')
    //- Apex Split
    apex-split-simple( :flip="false" :background="aboutData.splitContent.background" :decoration="aboutData.splitContent.decoration" modifier="apex-led-panel-bg")
      template(slot='large-content')
        h2.--margin-space-large(:class='aboutData.splitContent.largeSplit.headingClass')
          | {{aboutData.splitContent.largeSplit.heading}}
        p(v-for="paragraph in aboutData.splitContent.largeSplit.copy")
          |{{ paragraph }}

      template(slot='highlight-content')
        h2.--margin-space-large(v-html='aboutData.splitContent.highlight.heading' :class='aboutData.splitContent.highlight.headingClass')
        ul
          li(v-for="paragraph in aboutData.splitContent.highlight.copy")
            | {{ paragraph }}
</template>




<script>
// Import SEO From File
import { stagingBuild, template, social, general }       from '../../seo-meta.js';

import { aboutPage } from '../../apex-data.js';

import SupportServicesBlocks from '../shared/support-services-blocks.vue';
import ApexSplitSimple from '../shared/apex-split-simple.vue';

export default {
  name: 'About',
  // TODO - Edit meta Title

  data: function(){
    return {
      aboutData: aboutPage,
      //seo: SEOData.siteSeo
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
    'support-services-blocks' : SupportServicesBlocks,
    'apex-split-simple' : ApexSplitSimple
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* ABOUT Component Styles
/--------------------------------------*/


/*--------------------------------------*/

.apex-led-panel-bg {
  background-image: url('../../assets/images/led-panel.png');
  background-repeat: no-repeat;
  
  h2,
  p {
    color: $white;
  }

}

</style>
