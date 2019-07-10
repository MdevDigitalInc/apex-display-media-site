<template lang="pug">
  .apex-digital-media-management
    h1
      | Digital Media Management
    //-Service Info Blocks Component
    apex-service-info-blocks(:content='digitalMediaManagement')
</template>




<script>

import ServiceInfoBlocks from '../shared/apex-service-info-blocks.vue';

import { digitalMediaManagement } from '../../apex-data.js';

export default {
  name: 'ServicesDigitalMediaManagement',

  data: function(){
    return {
      digitalMediaManagement: digitalMediaManagement
    };
  },
  components: {
    'apex-service-info-blocks'         : ServiceInfoBlocks,
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>