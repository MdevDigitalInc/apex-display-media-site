<template lang="pug">
  .apex-digital-media-management
    h1
      | Digital Media Management
    apex-member-packages(:content='digitalMediaManagement')
</template>




<script>

import MemberPackages from '../shared/apex-member-packages.vue';

import { digitalMediaManagement } from '../../apex-data.js';

export default {
  name: 'ServicesDigitalMediaManagement',

  data: function(){
    return {
      digitalMediaManagement: digitalMediaManagement
    };
  },
  components: {
    'apex-member-packages' : MemberPackages
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>