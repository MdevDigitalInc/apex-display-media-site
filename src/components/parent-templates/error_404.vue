<template lang="pug">
  section.mdev-main-content
    h1.u-text-center.--errorfourfour
      | We are sorry but that link doesn't exist!
</template>


<script>
// Import SEO From File
import { stagingBuild, template, social, general }       from '../../seo-meta.js';

export default {
  name: 'ErrorPage',

  data: function(){
    return {
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
};
</script>


<style lang="scss">

/*-------------------------------------*/
/* 404 Component Styles
/--------------------------------------*/
.--errorfourfour {
  padding: 25vh 0;

  @media #{$portrait} {
    padding: 10vh 0 ;
  }
}

/*--------------------------------------*/

</style>
