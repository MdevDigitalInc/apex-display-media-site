<template lang="pug">
  section.mdev-main-content
    .apex-about-section
      .apex-about-section-row.flex.flex-row.flex-wrap
        .apex-about-section-intro.u-text-left(:class="[introLeft ? 'apex-intro-left' : 'apex-intro-right']")
          .apex-about-section-intro-inner
            h2.--margin-space-large.d-heading-flair.d-heading-flair-white.u-bold
              | About
            p
              | We are an end-to-end digital signage and content solution for your business. We provide custom design, manufacture, installation and content
              | management – all backed by pur full hardware warranty.

            template(v-if="introLeft === 'false'")
              router-link( class='apex-base-btn apex-plain-btn' to='/')
                | Learn more

        .apex-about-section-content.u-text-left
          .apex-about-section-content-inner
            h2.--margin-space-large.d-heading-flair.d-heading-flair-blue.u-bold
              | We offer
            p
              | We offer the most technologically advanced digital signage available. Built for life in Canada, our energy efficient, weatherproof signage is
              | manufactured to withstand the harshest environmental conditions, all year round.
            p
              | We can create a brand new installation or retrofit existing signage – depending on what your business needs.
            p
              | After your signage has been installed, our managed content services are here to keep your signage up-to-date with your latest sales, promotions and events.

    //- Use comments witn `-`
    //- This omits them from output.
    h1
      |ABOUT SECTION
</template>

<script>
export default {
  name: 'HomeAbout',
  props: {
    introLeft: Boolean
  },
  data: function(){
    return {
    };
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

.apex-about-section {
  margin-top: 100px;

  h2 {
    @media #{$phone-only} {
     font-size: 35px;
    }
  }

  .apex-about-section-intro {
    background-color: $apex-red;
    width: 100%;
    color: $white;
    background-image: url('../../assets/images/dots-white.svg'), url('../../assets/images/arrows-white.svg');
    background-repeat: no-repeat, no-repeat;

    &.apex-intro-right {
      order: 2;
      background-position: 105% -30%, -1000% 80%;

      @media #{$tablet-only} {
        background-position: 96% -14%, -1000% 80%;
      }

      @media #{$laptop-up} {
        background-position: 95% -2%, 5% 80%;
      }
    }
    
    &.apex-intro-left {
      order: 0;
      background-position: 100% 100%, 0% 100%;

      @media #{$laptop-up} {
        background-position: 35% 119%, -1000% 80%;
      }
    }

    .apex-about-section-intro-inner {
        //transform: translateX( 24% );
        width: 43%;
    }

    @media #{$laptop-up} {
     width: 34%;
    }
  }

  .apex-about-section-content {
    background-color: $white;
    width: 100%;

     @media #{$laptop-up} {
      width: 66%;
    }
  }
}

.apex-about-section-intro-inner {
  width: 65%;
  margin: 0 auto;
  min-height: 350px;
  max-height: 719px;
  margin-top: 90px;
  width: 85%;

  @media #{$tablet-up} {
    width: 65%;
    margin-top: 154px;
  }

  @media #{$tablet-only} {
    width: 75%;
    margin-top: 100px;
  }
}

.apex-about-section-content-inner {
  width: 72%;
  margin: 0 auto;
  max-height: 719px;
  margin-top: 154px;
  min-height: 350px;
}
</style>
