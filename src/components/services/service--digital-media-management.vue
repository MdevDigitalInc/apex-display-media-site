<template lang="pug">
  .apex-digital-media-management
    h1
      | Digital Media Management
    apex-member-packages(
    :heading="dataDigitalManagement.membershipPackages.heading"
    :packages="dataDigitalManagement.membershipPackages.packageList"
    )
    //-Service Info Blocks Component
    apex-service-info-blocks(
    :heading='dataDigitalManagement.serviceInfo.heading'
    :copy="dataDigitalManagement.serviceInfo.copy"
    :contentBlocks='dataDigitalManagement.serviceInfo.contentBlocks')
</template>




<script>
// Import SEO From File
import { stagingBuild, template, social, general }  from '../../seo-meta.js';
import MemberPackages from '../shared/apex-member-packages.vue';
import { DigitalManagement } from '../../apex-data.js';
import ServiceInfoBlocks from '../shared/apex-service-info-blocks.vue';

export default {
  name: 'ServicesDigitalMediaManagement',

  data: function(){
    return {
      dataDigitalManagement: DigitalManagement
    };
  },
  components: {
    'apex-service-info-blocks'         : ServiceInfoBlocks,
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
