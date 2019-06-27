<template lang="pug">
.apex-contact-modal(:class="{'u-freeze-scroll' : formOpen }")
  .apex-close-modal
     apex-close-btn(styleType='red' v-on:toggle='closeModal')
  .apex-contact-modal-container
    .apex-row.flex.flex-row.flex-wrap.flex-hor-center
      .apex-column.apex-open-form
        .flex.flex-row.flex-wrap
          .apex-large-quote
            apex-large-quote-btn(v-on:toggle='toggleForm')
          apex-close-btn(styleType='black' v-on:toggle='closeModal')
      .apex-column
        apex-contact-info
      .apex-column.apex-column-free-quote-form(:class="{'open': formOpen }")
        apex-free-quote-form(class='apex-form' v-on:toggle='formOpen = !formOpen')
</template>

<script>

  import ApexFreeQuoteForm from '../shared/apex-free-quote-form.vue';
  import ApexContactInfo from './apex-contact-info.vue';
  import ApexLargeQuoteBtn from '../shared/apex-large-quote-btn.vue';
  import ApexCloseBtn from '../shared/apex-close-btn.vue';

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
    'apex-large-quote-btn' : ApexLargeQuoteBtn,
    'apex-close-btn' : ApexCloseBtn,
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
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $white;
  overflow-y: scroll;
  z-index: 12;

  @media #{$laptop-up} {
    overflow: hidden;
  }
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
        height: 100vh;
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
  background-color: $apex-red;
  border: 0;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  z-index: 22;
  display: none;

  @media #{$laptop-up} {
    display: block;
  }
}

</style>