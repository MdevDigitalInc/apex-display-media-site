<template lang="pug">
  .apex-featured-services.apex-main-wrapper
    //- Featured Service Loop
    .apex-featured-service.flex.flex-vert-center.flex-hor-between(
      v-for="(service, index) in featuredServices")
      //- Content
      .apex-service-content
        h2.--margin-space-large.u-bold.d-heading-flair.d-heading-flair-blue
          | {{ service.heading }}
        p.apex-service-copy
          | {{ service.copy }}
        //- Base Button Component
        base-btn( v-if="service.btnData" :btn-data="service.btnData" )
      //- Media
      .apex-service-media
        universal-image( :source="service.media.source" :gif="service.media.gif" :a11y="service.media.a11y")

</template>

<script>
export default {
  name: 'FeaturedServices',

  props: [ 'featuredServices' ],
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
