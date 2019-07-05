<template lang="pug">
  //- Section Container
  .apex-image-showcase.flex.flex-vert-stretch.--section-space-top-xl
    //- Left Side Container
    .apex-showcase-left
      .apex-showcase-top.flex.flex-vert-stretch.flex-wrap(data-media-height)
        //- Top Left Media Box
        .apex-media-horz(:style="loadBackground(media.TopLeft, webpSupport)")
        //- Showcase Text
        .apex-showcase-content.flex.flex-vert-center.flex-hor-between
          //- Heading
          .u-bold.apex-showcase-heading
            |{{ heading }}
          //- Base Button
          base-btn( :btn-data="action" )
      .apex-showcase-bot.flex.flex-vert-stretch
        .apex-media-sq(:style="loadBackground(media.BotSquare, webpSupport)")
        .apex-media-horz(:style="loadBackground(media.BotLeft, webpSupport)")
        .apex-media-horz.u-hidden-portrait(:style="loadBackground(media.BotRight, webpSupport)")
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
  margin-bottom: 0;
  position: relative;


  // Left size, large container
  .apex-showcase-left {
    width: 85%;

    @media #{$portrait} {
      width: 100%;
    }
  }

  // Right side, vertical container
  .apex-showcase-vert {
    width: 15%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media #{$portrait} {
      display: none;
    }
  }

  // Split apex-showcase-left on top/bottom
  .apex-showcase-top,
  .apex-showcase-bot {
    width: 100%;
  }

  // Showcase text content
  .apex-showcase-content {
    width: 60%;
    padding: 80px;
    background: $color-brand-primary;
    color: $white;
    overflow: hidden;

    @media #{$phone-only} {
      flex-wrap: wrap;
      padding: 40px;
    }

    @media #{$portrait} {
      width: 100%;
      order: 1;
    }

    @media #{$tablet-lnd-only} {
      padding: 55px;
    }

    @media #{$laptop-only} {
      padding: 60px;
    }

    @media #{$xl-up} {
      padding: 130px;
    }
  }

  // Heading size to keep it from touching button
  .apex-showcase-heading {
    width: 66%;
    font-size: 2.5vw;
    line-height: 1.2;
    font-weight: 800;

    @media #{$portrait} {
      font-size: 4.5vw;
    }

    @media #{$phone-only} {
      width: 100%;
      font-size: 7vw;
      padding-bottom: 40px;
    }

    @media #{$tablet-lnd-only} {
      font-size: 2vw;
    }

    @media #{$laptop-only} {
      font-size: 2.2vw;
    }
  }

  // Media
  .apex-media-horz {
    width: 40%;
    padding-top: 20%;
    background-size: cover;
    background-position: center;

    @media #{$phone-only} {
      display: none;
    }

    @media #{$portrait} {
      width: 100%;
      padding-top: 50%;
      order: 2;
    }
  }

  .apex-media-sq {
    width: 20%;
    background-size: cover;
    background-position: center;

    @media #{$portrait} {
      display: none;
    }
  }

  // Overrides

  .apex-base-btn {
    position: relative;
    margin: 0;

    @media #{$tablet-lnd-only} {
      font-size: .9vw;
      padding: 18px 25px;
    }

    @media #{$laptop-only} {
      font-size: 1vw;
    }
  }

  .apex-base-btn:before,
  .apex-base-btn:after {
    @include pseudo();
    background-image: url('../../assets/images/dots-white.svg');
    width: 70%;
    background-repeat: no-repeat;
    background-size: 100%;
    padding-top: 40%;
    left: 50%;

    @media #{$phone-only} {
      display: none;
    }
  }

  .apex-base-btn:before {
    top: 0;
    transform: translate( -50%, -120%);
    background-position: center top;
  }

  .apex-base-btn:after {
    bottom: 0;
    transform: translate( -50%, 120%);
    background-position: center bottom;
  }
}
/*--------------------------------------*/

</style>
