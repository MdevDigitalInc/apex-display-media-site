<template lang="pug">
.apex-about-section
  apex-split
</template>

<script>

import ApexSplit from '../shared/apex-split.vue';

export default {
  name: 'HomeAbout',
  props: {
    introLeft: Boolean
  },
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
