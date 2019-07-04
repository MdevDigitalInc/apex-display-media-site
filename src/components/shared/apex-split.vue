<template lang="pug">
  .apex-split.u-text-left
    .apex-split-row.flex.flex-row.flex-wrap
      .apex-split-content-block
        apex-split-block-one(:className='content.class')
          h2(slot="heading").--margin-space-large.d-heading-flair.d-heading-flair-blue.u-bold
            | {{content.contentBlockOne.heading}}
          p(slot="copy")
            | {{content.contentBlockOne.copy}}
      .apex-split-content-block(:class='content.class')
        apex-split-block-one
          h2(slot="heading").--margin-space-large.d-heading-flair.d-heading-flair-white.u-bold
            | {{content.contentBlockTwo.heading}}
          p(slot="copy")
            | {{content.contentBlockTwo.copy}}
          template(v-if = 'content.contentBlockTwo.route !=""')
            router-link( slot='route' :class='content.contentBlockTwo.btnClass' :to='content.contentBlockTwo.route')
              |Learn more
</template>

<script>

  import ApexSplitBlock from './apex-split-block.vue';


  export default {
     name: 'ApexSplit',
     props: [ 'content' ],
     data: function () {
      return {

      };
     },
     components: {
      'apex-split-block-one'         : ApexSplitBlock
    }
  };


</script>

<style lang="scss">

.apex-split-content-block {
  margin-top: 100px;

  .apex-split-content-block-inner {
    margin: 0 auto;
    min-height: 430px;
    max-height: auto;
    padding-top: 90px;

    p {
      font-size: 20px;

      @media #{$tablet-up} {
        font-size: 26px;
      }

      @media #{$laptop-only} {
        font-size: 20px;
      }
    }

    @media #{$laptop-up} {
      min-height: 600px;
      max-height: 650px;
    }
  }

  &:first-child {
    width: 100%;
    order: 1;

    .apex-split-content-block-inner {
      width: 80%;
      transform: translateX( 0 );

      p {
        font-size: 20px;
      }
    }

    @media #{$laptop-up} {
      width: 60%;

      .apex-split-content-block-inner {
        width: 74%;
        //transform: translateX( 7% );
      }

      .apex-split-about-home {
        transform: translateX( 7% );
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
    width: 100%;
    background-color: $apex-red;
    background-image: url('../../assets/images/dots-white.svg'), url('../../assets/images/arrows-white.svg');
    background-repeat: no-repeat, no-repeat;

    &.apex-split-about-home {
      order: 2;
      background-position: 105% -20%, -1000% 80%;

      @media #{$tablet-only} {
        background-position: 97% -11%, -1000% 80%;
      }

      @media #{$laptop-up} {
        background-position: 95% -2%, 5% 90%;
      }
    }

    &.apex-split-about-service {
      background-position: 40% 118%, -1000% 80%;
      order: 0;

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
      background-position: 105% -13%, -1000% 90%;
      order: 0;
      transform: scaleY(-1);
      filter: FlipV;

      @media #{$tablet-only} {
        background-position: 96% -7%, -1000% 90%;
      }

      @media #{$laptop-up} {
        background-position: 96% -3%, 5% 90%;
      }

      .apex-split-content-block-inner {
        width: 43%;
        transform: translateX( 10% ) translateY( -17% ) scaleY(-1);
        filter: FlipV;
      }
    }

    .apex-split-content-block-inner {
      color: $white;
      width: 80%;
      padding-bottom: 43px;
    }

    @media #{$laptop-up} {
      width: 40%;
      .apex-split-content-block-inner {
         width: 60%;
      }
    }
  }
}

</style>