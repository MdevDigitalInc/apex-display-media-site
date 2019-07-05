<template lang="pug">
  .apex-split.u-text-left
    .apex-split-row.flex.flex-row.flex-wrap
      .apex-split-content-block(:class="content.contentBlockOne.bgClass")
          //- Content Block Component
          apex-split-block(:className='content.class')
            template(slot="service-list" v-if = 'content.contentBlockOne.serviceList')
              .apex-split-support-services.flex.flex-row.flex-wrap.flex-hor-between
                .apex-split-service-item( v-for="(service, index) in content.contentBlockOne.serviceList")
                  .apex-split-service-heading(v-html="service.heading")
                  .apex-split-service-copy
                    p
                      | {{service.copy}}
            template(v-else)
              h2(slot="heading").--margin-space-large(:class='content.contentBlockOne.headingClass')
                | {{content.contentBlockOne.heading}}
              p(slot="copy")
                | {{content.contentBlockOne.copy}}
            router-link(
             v-if = 'content.contentBlockOne.route !=""'
             slot='route' :class='content.contentBlockOne.btnClass'
             :to='content.contentBlockOne.route')
              |Learn more
      .apex-split-content-block(:class='[content.class , content.contentBlockTwo.bgClass]')
        //- Content Block Component
        apex-split-block
          h2(slot="heading").--margin-space-large(:class='content.contentBlockTwo.headingClass')
            | {{content.contentBlockTwo.heading}}
          p(slot="copy")
            | {{content.contentBlockTwo.copy}}
          router-link(
           v-if = 'content.contentBlockTwo.route !=""'
           slot='route' :class='content.contentBlockTwo.btnClass' 
           :to='content.contentBlockTwo.route')
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
      'apex-split-block'         : ApexSplitBlock
    }
  };


</script>

<style lang="scss">

.apex-split {
  margin-top: 100px;
}

.apex-split-content-block {

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
      background-position: 120% -30%, -1000% 90%;
      order: 0;
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

.apex-split-content-block:first-child.apex-service-list-container .apex-split-service-copy p {

  @media #{$laptop-only} {
    font-size: 16px;
  }
}

.apex-split-service-item {
  width: 100%;

  @media #{$laptop-up} {
    width: calc(100% / 3 - 3%);
    padding: 10px;
  }

  .apex-split-service-heading {
    color: $apex-blue;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 10px;

    @media #{$laptop-only} {
      font-size: 20px;
    }
  }

  .apex-split-service-copy {
    font-size: 20px;
  }
}

.apex-split-block-blue {
  background-color: $apex-blue;
}

.apex-split-block-red {
  background-color: $apex-red;
}


</style>