<template lang="pug">
  section.apex-main-wrapper.apex-featured-block.--section-space-xl
    // Flex container
    .flex.flex-vert-stretch.flex-wrap
      //- Image
      .apex-media-block(
        role="img"
        :aria-label="media.a11y"
        :style="loadBackground(media.source)"  )
      //- Copy
      .apex-copy-block( :class="color" )
        h3.u-bold.d-heading-flair.apex-featured-title( v-html="heading" )
        p( v-for="paragraph in copy" )
          |{{ paragraph }}

</template>




<script>

export default {
  name: 'AlternateServices',

  props: [ 'heading', 'copy', 'media', 'color' ]
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* Featured Block Component Styles
/--------------------------------------*/
.apex-featured-block {
  position: relative;

  // Overrides main-wrapper on portrait
  @media #{$portrait} {
    width: 100%;
    max-width: auto;
  }

  .apex-media-block {
    width: 65%;
    background-repeat: no-repeat;
    background-size: cover;

    @media #{$portrait} {
      width: 100%;
    }
  }

  .apex-copy-block {
    width: 35%;
    color: $white;
    padding: 50px;

    @media #{$portrait} {
      width: 100%;
    }

    // Color Block Overrides
    &.--blue {
      background: $color-brand-primary;
    }

    &.--red {
      background-color: $color-brand-accent;
    }
    // Decoration Overrides
    .d-heading-flair:before {
      border-top: 15px solid $white;
    }

    p:last-child {
      margin-bottom: 0;
    }
  }
}

/*--------------------------------------*/

</style>
