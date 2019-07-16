<template lang="pug">
  .apex-service-sample-about.flex.flex-vert-stretch.flex-wrap(:class="{ '--flip' : flip }")
    //- Content Slot
    .apex-sample-content
      h3.u-bold.d-heading-flair.d-heading-flair-blue( v-html="heading" )
      p
        |{{ copy }}
      ul.apex-sample-list
        li( v-for="(item, index) in list")
          | {{ item }}
    //- Media Slot
    .apex-sample-media( :style="loadBackground(media.source)" :aria-label="media.a11y" role="img" )
</template>


<script>
export default {
  name: 'ServiceSample',

  props: [ 'flip', 'media', 'heading', 'copy', 'list' ]

};
</script>


<style lang="scss">

/*-------------------------------------*/
/* Service Sample Component Styles
/--------------------------------------*/
.apex-service-sample-about {
  position: relative;
  padding-left: 10.1%;
  margin-bottom: 100px;

  @media #{$portrait} {
    padding-left: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  .apex-sample-media {
    width: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0 0 30px rgba( 0, 0, 0, .1);
    order: 2;

    @media #{ $portrait } {
      order: 2;
      padding-top: 90%;
      width: 100%;
    }
  }

  .apex-sample-content {
    width: 50%;
    padding: 8%;
    order: 1;

    @media #{ $portrait } {
      width: 100%;
      padding: 0 15% 100px;
    }

    p {
      line-height: 1.2;
      margin-bottom: 25px;
    }
  }

  .apex-sample-list {
    color: $color-brand-primary;
    font-weight: 700;
    list-style: disc;
    line-height: 2.1;
    font-size: 20px;
  }

  // Flip Override
  &.--flip {
    .apex-sample-content {
      order: 2;
    }
    .apex-sample-media {
      order: 1;
    }
  }
}

/*--------------------------------------*/

</style>
