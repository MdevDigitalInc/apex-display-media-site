<template lang="pug">
  .apex-service-sample.--margin-space-extra-large.flex.flex-vert-stretch.flex-wrap
    //- Media Slot
    .apex-sample-media( :style="loadBackground(media.source)" :aria-label="media.a11y" role="img" )
    //- Content Slot
    .apex-sample-content
      h3.u-bold.d-heading-flair.d-heading-flair-blue( v-html="heading" )
      p
        |{{ copy }}
      ul.apex-sample-list
        li( v-for="(item, index) in list")
          | {{ item }}
</template>


<script>
export default {
  name: 'ServiceSample',

  props: [ 'media', 'heading', 'copy', 'list' ]

};
</script>


<style lang="scss">

/*-------------------------------------*/
/* Service Sample Component Styles
/--------------------------------------*/
.apex-service-sample {
  position: relative;
  padding-left: 12%;

  @media #{$portrait} {
    padding-left: 0;
  }

  .apex-sample-media {
    width: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0 0 30px rgba( 0, 0, 0, .1);

    @media #{ $portrait } {
      padding-top: 90%;
      width: 100%;
    }
  }

  .apex-sample-content {
    width: 50%;
    padding: 8%;

    @media #{ $portrait } {
      width: 100%;
    }

    p {
      line-height: 1.2;
      margin-bottom: 15px;
    }
  }

  .apex-sample-list {
    color: $color-brand-primary;
    font-weight: 700;
    list-style: disc;
    list-style-position: inside;
    line-height: 2.1;
    font-size: 20px;
  }
}

/*--------------------------------------*/

</style>
