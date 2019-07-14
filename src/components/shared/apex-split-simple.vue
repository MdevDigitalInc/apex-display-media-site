<template lang="pug">
  section.apex-split-section.flex.flex-vert-stretch.flex-wrap(:class="{ '--flip' : flip }")
    .apex-split-large
      slot(name='large-content')
    .apex-split-highlight(:class="[ background, decoration ]")
      .apex-split-center
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
    padding: 5% 7% 50px 10.4%;
    order: 1;

    @media #{$portrait} {
      width: 100%;
      order: 2;
    }
  }

  .apex-split-highlight {
    width: 40%;
    position: relative;
    order: 2;
    color: $white;

    @media #{$portrait} {
      width: 100%;
    }

    // Dots
    &:before {
      background-image: url('../../assets/images/dots-white.svg');
    }

    // Arrows
    &:after {
      background-image: url('../../assets/images/arrows-white.svg');
      background-repeat: no-repeat;
    }

    &.--red {
      background-color: $color-brand-accent;
    }

    &.--blue {
      background-color: $color-brand-primary;
    }

    li {
      font-size: 30px;
      font-weight: 500;
      line-height: 1.5;
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

  .--spacing {
    padding: 15% 0;
  }
}

.apex-split-center {
  width: 80%;
  margin: 50px auto;
  padding-bottom: 190px;

  @media #{$landscape} {
    @include center(both);
    padding-bottom: 90px;
    margin: 0;
    white-space: nowrap;
    width: 60%;
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
  left: 23%;

  @media #{$portrait} {
    left: 12.5%;
  }
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

.apex-split-highlight.--arrow-top-left:after {
  @include pseudo();
  width: 50px;
  height: 210px;
  transform: scaleY(-1);
  background-repeat: no-repeat;
  top: 30px;
  left: 30px;
}
/*--------------------------------------*/
</style>
