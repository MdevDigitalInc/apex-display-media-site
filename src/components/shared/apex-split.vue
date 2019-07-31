<template lang="pug">
  .apex-split.u-text-left.flex.flex-row.flex-wrap
    .apex-split-content-block(:class='content.class')
      .apex-split-content-block-inner(:class='content.class')
        slot(name='additional-service-content')
    .apex-split-content-block(:class='[content.class , content.highlight.bgClass]')
      .apex-split-content-block-inner
        slot(name='highlight')
</template>

<script>



  export default {
     name: 'ApexSplit',
     props: [ 'content' ]
  };


</script>

<style lang="scss">

.apex-split-content-block {
  .apex-split-content-block-inner {
    margin: 0 auto;
    min-height: 430px;
    max-height: auto;
    padding-top: 40px;

    @media #{$laptop-up} {
      min-height: 600px;
      max-height: 650px;
    }

    @media #{$phone-only} {
      padding-top: 30px;
    }
  }

  &:first-child {
    width: 100%;
    order: 1;
    padding-bottom: 40px;

    p {
      @media #{$tablet-only} {
        font-size: 20px;
      }

      max-width: 90%;
    }

    .apex-split-content-block-inner {
      width: 80%;
      transform: translateX( 0 );
    }

    @media #{$laptop-up} {
      width: 60%;
      padding-bottom: 0;

      .apex-split-content-block-inner {
        width: 80%;
      }

      .apex-split-about-home {
        transform: translateX( 8%);
      }

      .apex-split-about-service {
        transform: translateX( 0 );
      }

      .apex-split-services {
        transform: translateX( 0 );
      }
    }
  }

  &:nth-child( 2 ) {
    background-image: url('../../assets/images/dots-white.svg'), url('../../assets/images/arrows-white.svg');
    background-repeat: no-repeat, no-repeat;
    background-size: 147px 203px, initial;
    width: 100%;

    p {
      font-size: 20px;

      &:last-of-type {
        margin-bottom: 40px;
      }

      @media #{$tablet-up} {
        font-size: 26px;
      }

      @media #{$laptop-only} {
        font-size: 20px;
      }
    }

    @media #{$laptop-only} {
      .apex-plain-btn {
        font-size: 20px;
      }
    }

    &.apex-split-about-home {
      order: 2;
      background-position: 105% -23%, -1000% 80%;

      @media #{$tablet-only} {
        background-position: 97% -11%, -1000% 80%;
      }

      @media #{$laptop-up} {
        background-position: 95% -2%, 5% 90%;
      }
    }

    &.apex-split-about-service {
      background-position: 40% 118%, -1000% 80%;
      order: 2;

      @media #{$tablet-only} {
        background-position: 40% 119%, -1000% 80%;
      }

      @media #{$laptop-up} {
        background-position: 40% 119%, -1000% 80%;
      }

      .apex-split-content-block-inner {
        width: 43%;
        transform: translateX( 10% );
      }
    }

    &.apex-split-services {
      background-position: 120% -30%, -1000% 90%;
      order: 2;
      transform: scaleY(-1);
      filter: FlipV;

      .apex-split-content-block-inner {
        width: 43%;
        transform: translateX( 10% ) translateY( -17% ) scaleY(-1);
        filter: FlipV;
      }

      @media #{$tablet-only} {
        background-position: 96% -15%, -1000% 90%;
      }

      @media #{$laptop-up} {
        background-position: 96% -3%, 5% 90%;
      }

      @media #{$laptop-only} {
        background-position: 96% -25%, 5% 110%;
      }
    }

    &.apex-split-services .apex-split-content-block-inner {

      @media #{$tablet-only} {
        transform: translateX( -30% ) translateY( 0 ) scaleY(-1);
        min-height: auto;
        padding: 70px 0 10px;
      }

      @media #{$phone-only} {
        transform: translateX( -40% ) translateY( 0 ) scaleY(-1);
        min-height: auto;
        padding: 70px 0 25px;
      }

      @media #{$laptop-only} {
        transform: translateX( -5% ) translateY( -17% ) scaleY(-1);
      }
    }

    .apex-split-content-block-inner {
      color: $white;
      width: 80%;
      padding-bottom: 70px;
    }

    &.--flip-order {
      order: 0;
    }

    @media #{$laptop-up} {
      width: 40%;

      .apex-split-content-block-inner {
        width: 60%;
      }
    }
  }
}

.apex-split-content-block:first-child.apex-service-list-container {

  @media #{$laptop-up} {
    background-color: $white;
  }

  .apex-split-content-block-inner {
    background-color: $white;
    padding: 40px;
    margin-top: 20px;
    width: 95%;

    @media #{$laptop-up} {
      padding: 30px 0 0;
      margin-top: 0;
      width: 90%;
      background-color: $white;
    }

    @media #{$tablet-only} {
      padding: 40px 95px;
    }
  }
}

.apex-split-service-item {
  width: 100%;

  @media #{$laptop-up} {
    width: calc(100% / 3 - 3%);
  }

  .apex-split-service-heading {
    color: $apex-blue;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 6px;

    @media #{$tablet-up} {
      font-size: 24px;
    }

    @media #{$tablet-only} {
      margin-bottom: 3px;
    }

    @media #{$laptop-only} {
      font-size: 16px;
    }
  }

  .apex-split-service-copy p {
    font-size: 16px;

    &:last-of-type {
      margin-bottom: 30px;
    }

    @media #{$tablet-only} {
      font-size: 20px;
    }

    @media #{$laptop-up} {
      font-size: 20px;

      &:last-of-type {
        margin-bottom: 40px;
      }
    }

    @media #{$laptop-only} {
      font-size: 15px;
    }
  }
}

.apex-split-block-blue {
  background-color: $apex-blue;
}

.apex-split-block-red {
  background-color: $apex-red;
}

.apex-split-content-block:first-child.apex-split-services {

  @media #{$laptop-up} {
    .apex-split-content-block-inner {
      padding-top: 45px;
      width: 85%;
    }
  }
}

.apex-split-content-block:nth-child( 2 ) {

  p {
    @media #{$laptop-up} {

      &:last-of-type {
        margin-bottom: 40px;
      }
    }

    @media #{$tablet-only} {

      &:last-of-type {
        margin-bottom: 40px;
      }
    }
  }
}

.--home-hero {
  .apex-split-content-block {
    padding-top: 80px;

    @media #{$desktop-up} {
      padding-top: 10%;
    }

    @media #{$xl-up} {
      padding-top: 8%;
    }

    @media #{$portrait} {
      padding-top: 40px;
    }
  }
}

</style>
