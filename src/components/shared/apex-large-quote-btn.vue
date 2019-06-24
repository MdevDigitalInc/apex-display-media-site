<template lang="pug">
   button(@click="toggleForm" class="apex-base-btn apex-red-btn apex-large-quote-btn") Free Quote
</template>



<script>
export default{
  name: 'ApexLargeQuoteBtn',
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

  @media #{$tablet-only} {
    padding: 40px 0;
  }
}

</style>
