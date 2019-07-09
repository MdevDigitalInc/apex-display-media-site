<template lang="pug">
  section.apex-featured-services
    .apex-main-wrapper
      //- Featured Service Loop
      .apex-featured-service.flex.flex-vert-center.flex-hor-between(
        v-for="(service, index) in featuredServices"
        :class="{'--flip-order' : ((index + 1) % 2) == 0}"
        :style="{ zIndex: index + 3 }")
        //- Content
        .apex-service-content
          h2.--margin-space-large.u-bold.d-heading-flair.d-heading-flair-blue(v-html="service.heading")
          p.apex-service-copy
            | {{ service.copy }}
          //- Base Button Component
          base-btn( v-if="service.btnData" :btn-data="service.btnData" )
        //- Media
        .apex-service-media(
          role="img"
          :aria-label="service.media.a11y"
          :style="loadBackground(service.media.source, webpSupport)" )
          //- Service Fact floating box
          .apex-service-fact( v-html="service.factInfo" )

</template>

<script>
export default {
  name: 'FeaturedServices',

  props: [ 'featuredServices' ],

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
/* Featured Services Component Styles
/--------------------------------------*/
// Featured Services Section
.apex-featured-services {
  width: 100%;
  position: relative;
  overflow: visible;

  .apex-main-wrapper {
    @media #{ $portrait } {
      width: 100%;
      max-width: auto;
    }
  }
}

// Featured Service Unit Module
.apex-featured-service {
  width: 100%;
  position: relative;
  margin-bottom: -3%;
  flex-wrap: wrap;

  @media #{ $landscape } {
    flex-wrap: no-wrap;
  }

  &:last-child {
    margin-bottom: 0;
  }

  .apex-service-content {
    width: 40%;
    order: 1;
    padding-right: 110px;

    @media #{ $portrait } {
      width: 100%;
      padding: 100px;
    }

    @media #{ $phone-only } {
      padding: 60px 40px;
    }
  }

  .apex-service-media {
    width: 60%;
    order: 2;
    position: relative;
    background: pink;
    padding-top: 55%;
    background-size: cover;
    background-position: center;

    @media #{$laptop-only} {
      padding-top: 75%;
    }

    @media #{$tablet-lnd-only} {
      padding-top: 80%;
    }

    @media #{ $portrait } {
      width: 100%;
      padding-top: 110%;
    }
  }

  .apex-service-fact {
    min-width: 300px;
    width: 35%;
    height: auto;
    padding: 28px;
    background: $color-brand-primary;
    color: $white;
    position: absolute;
    right: -20px;
    top: 20%;

    @media #{ $portrait } {
      display: none;
    }
  }

  // Flip Order Modifier
  &.--flip-order {

    .apex-service-content {
      order: 2;
      padding-right: 0;
      padding-left: 110px;

      @media #{ $portrait } {
        order: 1;
      }

      @media #{ $phone-only } {
        padding: 60px 40px;
      }
    }

    .apex-service-media {
      order: 1;

      @media #{ $portrait } {
        order: 2;
      }
    }

    .apex-service-fact {
      right: auto;
      left: -20px;
    }
  }
}

/*--------------------------------------*/
</style>
