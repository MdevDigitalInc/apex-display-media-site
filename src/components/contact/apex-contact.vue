<template lang="pug">
.apex-contact-modal
  button.apex-close-modal(@click="closeModal")
    span
    span
    span
    span
  .apex-contact-modal-container
    .apex-row.flex.flex-row.flex-wrap.flex-hor-center
      .apex-column
        apex-contact-info
      .apex-column
        apex-free-quote-form
</template>

<script>

  import ApexFreeQuoteForm from '../shared/apex-free-quote-form.vue';
  import ApexContactInfo from './apex-contact-info.vue';

  export default {
    name: 'ApexContact',
    data (){
      return {

      };
    },
    components: {
    'apex-free-quote-form' : ApexFreeQuoteForm,
    'apex-contact-info' : ApexContactInfo,
    },
    methods: {
      closeModal() {
        //alert('hello');
        this.$emit('close', true);
      }
    }
  };
</script>

<style lang="scss" scoped>
.apex-contact-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $white;
  overflow: scroll;
}


.apex-column {
  width: 50%;
}


.apex-close-modal {
  width: 30px;
  height: 30px;
  background-color: $apex-red;
  border: 0;
  position: fixed;
  right: 30px;
  top: 30px;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: $white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    top: 50%;
    transform: rotate(0deg);
    &:nth-child( 1 ) {
      top: 15px;
      width: 0%;
      //left: 50%;
    }
    &:nth-child( 2 ) {
      transform: rotate(45deg);
    }
    &:nth-child( 3 ) {
      transform: rotate(-45deg);
    }
    &:nth-child( 4 ) {
      top: 10px;
      width: 0%;
      //left: 50%;
    }
  }
}



</style>