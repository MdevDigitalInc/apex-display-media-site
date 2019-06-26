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

  &.nav-style {
    min-height: 85px;

    @media #{$tablet-up} {
      min-height: 118px;
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
      padding-top: 35px;
    }
  }

  @media #{$tablet-up} {
    padding: 40px 0;
  }
}

</style>
