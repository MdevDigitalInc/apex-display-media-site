<template lang="pug">
  //- Section Container
  .apex-image-showcase.flex.flex-vert-stretch
    //- Left Side Container
    .apex-showcase-left
      .apex-showcase-top.flex.flex-vert-stretch
        //- Top Left Media Box
        .apex-media-horz(:style="loadBackground(media.TopLeft, webpSupport)")
        //- Showcase Text
        .apex-showcase-content.flex.flex-vert-center
          //- Heading
          h3
            |{{ heading }}
          //- Base Button
          base-btn( :btn-data="action" )
      .apex-showcase-bot.flex.flex-vert-stretch
        .apex-media-sq(:style="loadBackground(media.BotSquare, webpSupport)")
        .apex-media-horz(:style="loadBackground(media.BotLeft, webpSupport)")
        .apex-media-horz(:style="loadBackground(media.BotRight, webpSupport)")
    //- Right side, vertical image container
    .apex-showcase-vert(:style="loadBackground(media.Vertical, webpSupport)")
</template>




<script>
// Import SEO From File
import { stagingBuild, template, social, general }       from '../../seo-meta.js';

export default {
  name: 'BaseTemplate',

  props: [
    'heading',
    'action',
    'media'
  ],

  data: function () {
    return {
      // Webp support flag
      webpSupport: false
    };
  },

  // Check for browser support on creation
  created: function () {
    // Calls function on main.js to check for Webp support
    this.webpSupport = this.supportsWebp();
  }

};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
