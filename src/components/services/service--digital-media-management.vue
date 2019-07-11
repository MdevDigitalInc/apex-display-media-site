<template lang="pug">
  .apex-digital-media-management
    h1
      | Digital Media Management
    apex-member-packages
</template>




<script>

import MemberPackages from '../shared/apex-member-packages.vue';

export default {
  name: 'ServicesDigitalMediaManagement',

  data: function(){
    return {
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