<template lang="pug">
.apex-split-support-services.flex.flex-row.flex-wrap.flex-hor-between
  .apex-split-service-item( v-for="(service, index) in content.additionalServiceContent.serviceList")
    .apex-split-service-heading(v-html="service.heading")
    .apex-split-service-copy
      p
        | {{service.copy}}
</template>




<script>
export default {
  name: 'SupportServices',
  props: [ 'content' ]
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
