<template lang="pug">
  .apex-service-info-blocks
    .apex-service-info-blocks-intro
      h2.d-heading-flair.d-heading-flair-blue.u-bold(v-html="heading")
      p
        | {{copy}}
    .apex-service-info-blocks-row.flex.flex-row.flex-wrap.flex-hor-between.flex-vert-stretch
      .apex-service-info-block( v-for="(item, index) in contentBlocks")
        .apex-service-info-block-content
          .apex-service-block-icon
            img(title='icon' :src="loadImage(item.icon)")
          .apex-service-info-block-heading
            | {{item.heading}}
          p.apex-service-info-block-copy
            | {{item.copy}}
          router-link.apex-base-btn.apex-plain-btn(:to="item.link.route" :title="item.link.a11y" v-if="item.link")
            | {{ item.link.text }}
</template>

<script>
export default {
  name: 'ServiceInfoBlocks',
  props: [ 'contentBlocks' , 'heading' ,'copy' ],
  data: function(){
    return {

    };
  }
};
</script>



<style lang="scss">

.apex-service-info-blocks {
  width: 100%;
}

.apex-service-info-blocks-intro {
  width: 100%;

  p {
    font-size: 24px;
  }

  @media #{$laptop-up} {
    width: 78%;

    p {
      font-size: 26px;
    }
  }
}

.apex-service-info-block {
  width: 100%;
  height: auto;


  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .1), 0 6px 20px 0 rgba(0, 0, 0, .1);
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
    width: 30%;
    max-height: 460px;
  }

  @media #{$laptop-only} {
    width: 47%;
    height: 460px;
  }

  @media #{$tablet-only} {
    p {
      font-size: 20px;
    }
  }
}

.apex-service-info-block-content {
  width: 95%;

  p {
    margin-bottom: 20px;
  }

  .apex-plain-btn {
    color: $white;
  }
}

.apex-service-info-block-heading {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  color: $apex-blue;
  line-height: 1.3;
}

.apex-service-info-block-copy {
  line-height: 1.2;
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
