<template lang="pug">
  //- Section Container
  .apex-image-showcase.flex.flex-vert-stretch
    //- Left Side Container
    .apex-showcase-left
      .apex-showcase-top.flex.flex-vert-stretch
        //- Top Left Media Box
        .apex-media-horz(:style="loadBackground(media.TopLeft, webpSupport)")
        //- Showcase Text
        .apex-showcase-content.flex.flex-vert-center.flex-hor-between
          //- Heading
          h3.u-bold.apex-showcase-heading
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
/* Image Showcase Component Styles
/--------------------------------------*/
.apex-image-showcase {
  width: 100%;
  margin: 0;
  position: relative;


  .apex-showcase-left {
    width: 85%;
  }

  .apex-showcase-vert {
    width: 15%;
    background-size: cover;
    background-position: center;
  }

  .apex-showcase-top,
  .apex-showcase-bot {
    width: 100%;
  }

  .apex-showcase-content {
    width: 60%;
    padding: 80px;
    background: $color-brand-primary;
    color: $white;
    overflow: hidden;
  }

  .apex-showcase-heading {
    width: 66%;
  }

  // Media
  .apex-media-horz {
    width: 40%;
    background-size: cover;
    background-position: center;
  }

  .apex-media-sq {
    width: 20%;
    background-size: cover;
    background-position: center;
  }

  // Overrides
  .apex-showcase-bot .apex-media-horz {
    padding-top: 20%;
  }

  .apex-base-btn {
    position: relative;
    margin: 0;
  }

  .apex-base-btn:before,
  .apex-base-btn:after {
    @include pseudo();
    background-image: url('../../assets/images/dots-white.svg');
    background-repeat: repeat-y;
    width: 100%;
    padding-top: 40%;
    left: 50%;
  }

  .apex-base-btn:before {
    top: 0;
    transform: translate3d( -50%, -120%, 0);
    background-position: center top;
  }

  .apex-base-btn:after {
    bottom: 0;
    transform: translate3d( -50%, 120%, 0);
    background-position: center top;
  }
}
/*--------------------------------------*/

</style>
