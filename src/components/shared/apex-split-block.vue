<template lang="pug">
.apex-split-content-block-inner(:class='className')
  slot(name='service-list')
  slot(name='heading')
  slot(name='copy')
  slot(name='route')
</template>

<script>
  export default {
     name: 'ApexSplitBlockOne',
     props: [ 'className' ],
     data: function () {
      return {

      };
     }
  };


</script>

<style lang="scss">

</style>