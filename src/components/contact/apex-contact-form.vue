<template lang="pug">
  .apex-contact-form
    .apex-contact-form-container
      .apex-form-group
        label(for='name') Name*
        input(type='text' name="name" id='name')
      .apex-form-group
        label(for='company_name') Company*
        input(type='text' name='company_name' id='company_name')
      .apex-form-group
        label(for='phone') Phone Number
        input(type='tel' name='phone' id='phone')
      .apex-form-group
        label(for='email') Email
        input(type='email' name='company_name' id='company_name')
      .apex-form-group
        label(for='message') Message
        textarea(name='message' id='message')
      .apex-form-group.flex.flex-row-rev.flex-wrap
        input(type='submit' class='apex-base-btn apex-black-btn' value='Contact Me')
</template>

<script>

  import ApexContactForm from './apex-contact-form.vue';

  export default {
    name: 'ApexContactForm',
    data (){
      return {

      };
    },
    components: {
    'apex-contact-form' : ApexContactForm
    }
  };
</script>

<style lang="scss">

</style>