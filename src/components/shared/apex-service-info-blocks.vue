<template lang="pug">
  .apex-service-info-blocks
    .apex-service-info-blocks-intro
      h2.d-heading-flair.d-heading-flair-blue.u-bold
        | Why invest in managed media?
      p
        | Our design experts know how to make your signage work for your
        | business. Updating your interior and exterior signage on a regular basis
        | keeps customers engaged and informed, maximizing your return on
        | investment in hardware.
    .apex-service-info-blocks-row.flex.flex-row.flex-wrap.flex-hor-between
      .apex-service-info-block( v-for="(item, index) in content.serviceInfo")
        .apex-service-info-block-content
          .apex-service-block-icon
            img(title='icon' :src="loadImage(item.icon)")
          .apex-service-info-block-heading
            | {{item.heading}}
          p.apex-service-info-block-copy
            | {{item.copy}}
</template>




<script>


export default {
  name: 'ServiceInfoBlocks',
  props: [ 'content' ],
  data: function(){
    return {

    };
  }
};
</script>



<style lang="scss">

.apex-service-info-blocks {
  width: 80%;
  margin: 0 auto 65px;
}

.apex-service-info-blocks-intro {
  width: 100%;

  p {
    font-size: 24px;
  }

  @media #{$laptop-up} {
    width: 65%;

    p {
      font-size: 26px;
    }
  }
}

.apex-service-info-block {
  width: 100%;
  height: auto;

  
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);
  padding: 50px;
  margin-bottom: 60px;

  &:nth-child( 3n +2 ) {
    background-color: $apex-blue;

    .apex-service-block-icon {
      background-color: rgba($white, .15);
    }

    .apex-service-info-block-heading,
    .apex-service-info-block-copy {
      color: $white;
    }
  }

  @media #{$laptop-up} {
    width: 460px;
    height: 460px;
  }

  @media #{$laptop-only} {
    width: 47%;
    height: 460px;
  }
}

.apex-service-info-block-content {
  width: 95%;
}

.apex-service-info-block-heading {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  color: $apex-blue;
  line-height: 1.5;
}

.apex-service-info-block-copy {
  line-height: 1.5;
}

.apex-service-block-icon {
  width: 75px;
  height: 75px;
  background-color: rgba($apex-blue, .15);
  border-radius: 5px;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: auto;
  }
}
</style>