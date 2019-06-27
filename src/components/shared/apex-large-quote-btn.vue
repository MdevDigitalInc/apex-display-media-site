<template lang="pug">
   button(@click="toggleForm" class="apex-base-btn apex-red-btn apex-large-quote-btn" :class="styleType") Free Quote
</template>



<script>
export default{
  name: 'ApexLargeQuoteBtn',
  props: ['styleType'],
  data: function(){
    return{

    };
  },
  methods: {
      toggleForm() {
        this.$emit('toggle', true);
      }
    }
};
</script>



<style lang="scss" scoped>

.apex-large-quote-btn {
  width: 100%; 
  border-radius: 0;
  font-size: 24px;
  padding: 20px 0;
  min-height: 61px;

  @media #{$tablet-up} {
    min-height: 100px;
  }

  &.nav-style {
    min-height: 85px;

    @media #{$tablet-up} {
      min-height: 118px;

      &:hover,
      &:active {
        box-shadow: inset 0 -150px rgba($black, .15);
      }
    }
  }

  &.header-style {
    position: relative;
    font-size: 15px;
    max-width: 107px;
    padding: 15px 25px;
    line-height: 1;

    @media #{$tablet-up} {
      font-size: 24px;
      max-width: 262px;
      padding-top: 15px;
    }
  }

  @media #{$tablet-up} {
    padding: 40px 0;
  }

  &.footer-style {
    padding: 30px 50px;
    font-size: 18px;
    min-height: 75px;
    max-height: 75px;
  }
}

</style>
