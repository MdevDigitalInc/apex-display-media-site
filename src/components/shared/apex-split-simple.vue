<template lang="pug">
  section.apex-split-section.flex.flex-vert-stretch.flex-wrap(:class="{ '--flip' : flip }")
    .apex-split-large
      slot(name='large-content')
    .apex-split-highlight(:class="[ background, decoration ]")
      slot(name='highlight-content')
</template>




<script>

export default {
  name: 'ApexSplitSimple',

  props: ['flip', 'background', 'decoration']
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/
.apex-split-section {
  width: 100%;
  position: relative;
  overflow: hidden;

  .apex-split-large {
    width: 60%;
    padding: 50px 7%;
    order: 1;
  }

  .apex-split-highlight {
    width: 40%;
    position: relative;
    padding: 50px 7% 9%;
    order: 2;
    color: $white;

    // Dots
    &:before {
      background-image: url('../../assets/images/dots-white.svg');
    }

    // Arrows
    &:after {
      background-image: url('../../assets/images/arrows-white.svg');
    }

    &.--red {
      background-color: $color-brand-accent;
    }

    &.--blue {
      background-color: $color-brand-primary;
    }
  }

  // Flip Override
  &.--flip {
    .apex-split-large {
      order: 2;
    }
    .apex-split-highlight {
      order: 1;
    }
  }

  .--center-both {
    @include center('both');
  }
}
// Decorations
.apex-split-highlight.--bot-dots:before {
    @include pseudo();
    width: 25%;
    padding-top: 30%;
    transform: rotate(90deg);
    background-repeat: no-repeat;
    background-size: 100%;
    top: auto;
    bottom: -30px;
    left: 22%;
}
.apex-split-highlight.--bot-dots-right:before {
    @include pseudo();
    width: 25%;
    padding-top: 30%;
    transform: rotate(90deg);
    background-repeat: no-repeat;
    background-size: 100%;
    top: auto;
    bottom: -30px;
    right: 5px;
}
/*--------------------------------------*/
</style>
