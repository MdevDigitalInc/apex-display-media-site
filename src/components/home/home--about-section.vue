<template lang="pug">
.apex-about-section
  apex-split(:content='aboutContent')
</template>

<script>

import ApexSplit from '../shared/apex-split.vue';

export default {
  name: 'HomeAbout',
  props: [ 'aboutContent' ],
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
