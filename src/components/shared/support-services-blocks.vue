<template lang="pug">
.apex-support-services-blocks-section
  .apex-support-services-blocks-wrapper.apex-main-wrapper
    h2(v-html='heading' :class='headingClass')
    .apex-support-services-blocks.flex.flex-row.flex-wrap.flex-hor-between
      .apex-support-services-block( v-for="(service, index) in supportServices")
        .apex-support-services-blocks-item-icon
          img(title='icon' :src="loadImage(service.icon)")
        .apex-support-services-blocks-item-heading.u-bold(v-html="service.heading")
        .apex-support-services-blocks-item-copy
          p
            | {{service.copy}}
</template>




<script>
export default {
  name: 'SupportServicesBlocks',
  props: [ 'supportServices' , 'heading' , 'headingClass']
};
</script>



<style lang="scss">


.apex-support-services-blocks-section {

  h2 {
    margin-bottom: 45px;
  }
}


.apex-support-services-block {

  width: 95%;

  @media #{$laptop-up} {
    width: 45%;
  }

  .apex-support-services-blocks-item-heading {
    font-size: 24px;
    color: $apex-blue;
    margin-bottom: 10px;
  }

  .apex-support-services-blocks-item-copy { 
    p {
      font-size: 20px;
    }
  }

  .apex-support-services-blocks-item-icon {
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
}



</style>