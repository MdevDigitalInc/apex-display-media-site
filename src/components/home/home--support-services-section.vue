<template lang="pug">
.apex-support-service-section
  apex-split(:content='supportContent')
</template>

<script>

import ApexSplit from '../shared/apex-split.vue';

export default {
  name: 'SupportServices',
  props: [ 'supportContent' ],
  data: function(){
    return {
    };
  },
  components: {
    'apex-split' : ApexSplit
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/


</style>
