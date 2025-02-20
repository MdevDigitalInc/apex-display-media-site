<template lang="pug">
  .apex-main-hero( :style="loadBackground(background)" :class="[ modifier ]" )
    //- Hero Content
    .apex-hero-content
      .apex-blue-container
        img.apex-dots( :src="loadImage('dots-white.svg')" alt="Scroll for more!")
        h1.u-bold( v-html="heading")
        h4( v-html="subheading" )
        //- Action
      .apex-base-btn.apex-black-btn.--button-space(@click.stop="openForm"  )
        .apex-btn-text
          |Get Started
      //- Scrol Prompt
      .apex-hero-scroll( :class="{ '--blackscroll' : scrollblack }")
        span.u-italic
          |scroll down
        img.apex-scroll-icon(v-if="scrollblack" :src="loadImage('icons/icon-scroll-black.svg')" alt="Scroll for more!")
        img.apex-scroll-icon(v-else :src="loadImage('icons/icon-scroll-white.svg')" alt="Scroll for more!")

    //- Main Image
    universal-image.u-hidden-portrait.apex-hero-image(
      v-if="media.source"
      :source="media.source"
      :gif="media.gif"
      :a11y="media.a11y")

    //- Mob Image
    universal-image.u-hidden-landscape.apex-hero-image-mob(
      v-if="media.sourceMob"
      :source="media.sourceMob"
      :gif="media.gif"
      :a11y="media.a11y")
</template>


<script>
// Import the EventBus
import { EventBus } from '../../eventbus.js';
export default {
  name: 'MainHero',

  props: [
    'heading',
    'subheading',
    'action',
    'media',
    'modifier',
    'background',
    'scrollblack'
  ],

  methods: {
    openForm() {
      this.navOpen = false;
      EventBus.$emit('toggleme', true);
    }
  }

};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/
.apex-main-hero {
  width: 100%;
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  height: 85vh;

  @media #{$portrait} {
    height: auto;
    /* stylelint-disable */
    background: $color-brand-primary!important;
    /* stylelint-enable */
  }

  .apex-hero-content {
    width: 35%;
    position: absolute;
    left: 10%;
    top: 0;
    color: $white;
    z-index: 1;
    transform-origin: top left;

    @media #{$laptop-only} {
      width: 48%;
      transform: scale(.7);
    }

    @media #{$portrait} {
      position: relative;
      width: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      height: auto;
      background: $color-brand-primary;
    }

    @media #{$tablet-lnd-only} {
      width: 60%;
      transform: scale(.7);
    }

    h1 {
      line-height: 1.2;
    }

    h4 {
      line-height: 1.2;
    }
  }

  .apex-dots {
    width: 30%;
    transform: rotate( 90deg );
    position: relative;
    left: 40px;
    margin-top: -64px;

    @media #{$portrait} {
      margin-top: -15%;
    }

    @media #{$phone-only} {
      width: 50%;
      left: 12%;
      margin-top: -43%;
    }
  }

  .apex-hero-image {
    position: absolute;
    width: 58%;
    right: 0;
    bottom: 0;
    z-index: 2;

    @media #{$laptop-only} {
      width: 50%;
    }
  }

  .apex-hero-image-mob {
    position: relative;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 3;
    margin-top: -100px;
  }

  .apex-blue-container {
    padding: 0 55px 55px;
    background: $color-brand-primary;

    @media #{$portrait} {
      padding: 0 85px 135px;
    }

    @media #{$phone-only} {
      padding: 0 25px 135px;
    }
  }

  .apex-hero-scroll {
    width: 16%;
    min-width: 96.7px;
    margin-top: 45px;
    margin-left: 55px;
  }

  .--blackscroll {
    color: black;
  }


  //Overrides
  &.--img-pullup .apex-hero-image-mob {
    margin-top: -160px;

    @media #{$phone-only} {
      margin-top: -120px;
    }
  }
}
/*--------------------------------------*/
</style>
