<template lang="pug">
   button(@click="toggleParent" class="apex-close-btn" :class="styleType")
     span
     span
     span
     span
</template>


<script>
export default{
  name: 'ApexCloseBtn',
  props: ['styleType'],
  data: function(){
    return{

    };
  },
  methods: {
      toggleParent() {
        this.$emit('toggle', true);
      }
    }
};
</script>



<style lang="scss">

.apex-close-btn {
  width: 61px;
  height: 61px;
  background-color: $black;
  border: 0;
  position: relative;
  cursor: pointer;

  &.black {
    background-color: $black;
  }

  &.red {
    background-color: $apex-red;
  }

  &.blue {
    background-color: $apex-blue;
  }

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 30%;
    background: $white;
    border-radius: 9px;
    opacity: 1;
    left: 22px;
    top: 28px;
    transform: rotate(0deg);

    &:nth-child( 1 ) {
      top: 15px;
      width: 0%;
      left: 50%;
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
      left: 50%;
    }
  }

  @media #{$tablet-up} {
    width: 100px;
    height: 100px;

    span {
      left: 35px;
      top: 46px;
    }
  }
}

</style>