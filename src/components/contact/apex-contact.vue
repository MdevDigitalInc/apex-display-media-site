<template lang="pug">
.apex-contact-modal(:class="{'u-freeze-scroll' : formOpen }")
  button.apex-close-modal(@click="closeModal" :class="{'open': formOpen }")
    span
    span
    span
    span
  .apex-contact-modal-container
    .apex-row.flex.flex-row.flex-wrap.flex-hor-center
      .apex-column.apex-open-form
        .apex-large-quote
          apex-large-quote-btn(v-on:toggle='toggleForm')
      .apex-column
        apex-contact-info
      .apex-column.apex-column-free-quote-form(:class="{'open': formOpen }")
        apex-free-quote-form(class='apex-form')
</template>

<script>

  import ApexFreeQuoteForm from '../shared/apex-free-quote-form.vue';
  import ApexContactInfo from './apex-contact-info.vue';
  import ApexLargeQuoteBtn from '../shared/apex-large-quote-btn.vue';

  export default {
    name: 'ApexContact',
    data (){
      return {
        formOpen: false
      };
    },
    components: {
    'apex-free-quote-form' : ApexFreeQuoteForm,
    'apex-contact-info' : ApexContactInfo,
    'apex-large-quote-btn' : ApexLargeQuoteBtn
    },
    methods: {
      closeModal() {
        this.$emit('close', true);
      },
      toggleForm(){
        this.formOpen = !this.formOpen;
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
  overflow-y: scroll;
}

.apex-column {
  width: 100%;

  @media #{$laptop-up} {
    width: 50%;
  }
}

.apex-column-free-quote-form {
  position: fixed;
  top: 0;
  left: 0;
  transition: .3s;
  transform: translateY( -100% );

  @media #{$laptop-up} {
    position: static;
    transform: translateY( 0 );
  }

  &.open {
    transform: translateY( 0 );
    overflow-y: scroll;
    height: 100%;

    .apex-form {
      height: 900px;
      @media #{$tablet-only} {
        height: 100%;
      }

      @media #{$tablet-lnd-only} {
        height: 900px;
      }
    }
  }
}


.apex-large-quote {

  width: calc(100% - 61px);

  @media #{$tablet-up} {
    width: calc(100% - 100px);
  }
}

.apex-open-form {
  display: block;
  @media #{$laptop-up} {
    display: none;
  }
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
  z-index: 20;
  display: none;

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
    }
  }

  &.open {
    display: block;
  }

  @media #{$laptop-up} {
    display: block;
  }
}

</style>