<template lang="pug">
  .apex-digital-media-management
    h1
      | Digital Media Management
    apex-member-packages(:content='digitalMediaManagement')
</template>




<script>

// Import SEO From File
import { stagingBuild, template, social, general }  from '../../seo-meta.js';

import MemberPackages from '../shared/apex-member-packages.vue';

import { digitalMediaManagement } from '../../apex-data.js';

export default {
  name: 'ServicesDigitalMediaManagement',

  data: function(){
    return {
      digitalMediaManagement: digitalMediaManagement,
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
    'apex-member-packages' : MemberPackages
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>