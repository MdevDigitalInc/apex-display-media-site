<template lang="pug">
  .apex-split.u-text-left
    .apex-split-row.flex.flex-row.flex-wrap
      .apex-split-content-block
        .apex-split-content-block-inner
          h2.--margin-space-large.d-heading-flair.d-heading-flair-blue.u-bold
            | We offer
          p
            | We offer the most technologically advanced digital signage available. Built for life in Canada, our energy efficient, weatherproof signage is
            | manufactured to withstand the harshest environmental conditions, all year round.
          p
            | We can create a brand new installation or retrofit existing signage – depending on what your business needs.
          p
            | After your signage has been installed, our managed content services are here to keep your signage up-to-date with your latest sales, promotions and events.
      .apex-split-content-block.apex-split-about-home
        .apex-split-content-block-inner
          h2.--margin-space-large.d-heading-flair.d-heading-flair-white.u-bold
            | About
          p
            | We are an end-to-end digital signage and content solution for your business. We provide custom design, manufacture, installation and content
            | management – all backed by pur full hardware warranty.
</template>

<script>
  export default {
     name: 'ApexSplit',
     data: function () {
      return {

      };
     }
  };


</script>

<style lang="scss">

.apex-split-content-block {
  margin-top: 100px;

  .apex-split-content-block-inner {
    margin: 0 auto;
    min-height: 600px;
    max-height: 650px;
    padding-top: 90px;
  }

  &:first-child {
    width: 66%;
    order: 1;

    .apex-split-content-block-inner {
      width: 72%;
    }
  }

  &:nth-child( 2 ) {
    width: 34%;
    background-color: $apex-red;
    background-image: url('../../assets/images/dots-white.svg'), url('../../assets/images/arrows-white.svg');
    background-repeat: no-repeat, no-repeat;

    &.apex-split-about-home {
      background-position: 95% -2%, 5% 80%;
      order: 2;
      transform: scaleY(-1);
      filter: FlipV;
    }

    &.apex-split-about-service {
      background-position: 40% 119%, -1000% 80%;
      order: 0;

      .apex-split-content-block-inner {
        width: 43%;
        transform: translateX( 10% );
      }
    }

    &.apex-split-services {
      background-position: 95% 103%, 5% 10%;
      order: 0;
    }

    .apex-split-content-block-inner {
      color: $white;
      width: 72%;
    }
  }
}




</style>