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
  font-weight: 700;
  border: 0;
  background-color: $apex-red;
  color: $white;
  box-shadow: inset 0 0 rgba($black, .15);
  transition: all .4s;
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  &:active {
    color: $white;
    box-shadow: inset 0 -100px rgba($black, .15);
  }

  @media #{$tablet-up} {
    min-height: 100px;
  }

  &.nav-style {
    min-height: 85px;
    font-size: 22px;

    @media #{$tablet-up} {
      min-height: 118px;

      &:hover,
      &:active {
        box-shadow: inset 0 -150px rgba($black, .15);
      }
    }

    @media #{$tablet-up} {
      font-size: 30px;
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
    padding: 30px 0;
    font-size: 18px;
    min-height: 75px;
    max-height: 75px;

    @media #{$tablet-only} {
      padding: 25px 0 30px;
      font-size: 30px;
      min-height: 80px;
      max-height: 90px;
    }

    @media #{$phone-only} {
      font-size: 24px;
    }
  }
}

</style>
