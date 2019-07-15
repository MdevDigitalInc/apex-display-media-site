<template lang="pug">
  header.apex-home-hero
    .apex-hero-content
      //- Header
      h1.u-bold( v-html="heading" )
      //- Subehead
      h3( v-html="subheading" )
      //- Action
      base-btn( :btnData="action" )
      //- Scrol Prompt
      .apex-hero-scroll
        span.u-italic
          |scroll down
        img.apex-scroll-icon( :src="loadImage('icons/icon-scroll-black.svg')" alt="Scroll for more!")
    .apex-hero-image
      //- Image
      universal-image( :source="media.source" :gif="media.gif" :a11y="media.a11y" )
</template>

<script>
export default {
  name: 'HomeHero',

  props: [ 'heading', 'subheading', 'action', 'media' ]
};
</script>

<style lang="scss">
/*-------------------------------------*/
/* Home Hero Component Styles
/--------------------------------------*/
.apex-home-hero {
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 80vh;
  margin-bottom: -90px;

  @media #{$portrait} {
    height: auto;
  }
  @media #{$desktop-only} {
    height: 88vh;
    margin-bottom: -166px;
  }
  @media #{$laptop-only} {
    height: 88vh;
    margin-bottom: -170px;
  }
  @media #{$xl-up} {
    height: 85vh;
    margin-bottom: -162px;
  }

  .apex-hero-image {
    position: absolute;
    right: 0;
    top: -55px;
    width: 55.5%;

    @media #{$laptop-only} {
      width: 56%;
      top: -20px;
    }

    @media #{$portrait} {
      position: relative;
      width: 115%;
      top: auto;
      right: auto;
      left: -12%;
    }
  }

  .apex-hero-content {
    width: 50%;
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translatey(-50%);

    @media #{$portrait} {
      position: relative;
      width: 100%;
      top: auto;
      left: auto;
      transform: none;
      padding: 140px 90px 20px;
    }

    @media #{$phone-only} {
      padding: 70px 40px 20px;
    }

    h3 {
      padding-right: 25%;

      @media #{$laptop-only} {
        font-size: 30px;
      }

      @media #{$phone-only} {
        font-size: 25px;
      }
    }

    h1 {
      @media #{$laptop-only} {
        font-size: 40px;
      }

      @media #{$phone-only} {
        font-size: 30px;
      }
    }
  }
}

// Apex Scroll Global
.apex-hero-scroll {
  width: 11%;
  text-align: center;
  margin-top: 60px;

  @media #{$portrait} {
    display: none;
  }

  @media #{$laptop-only} {
    width: 16%;
  }

  .apex-scroll-icon {
    width: 35px;
    margin: 25px auto 0;

    @media #{$laptop-only} {
      width: 25px;
      margin: 15px auto 0;
    }
  }
}


/*--------------------------------------*/

</style>
