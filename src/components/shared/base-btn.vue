<template lang="pug">
  router-link( :class="btnData.class" :to="btnData.route" title="btnData.a11y")
    .apex-btn-text
      |{{ btnData.text }}
</template>

<script>
export default {
  name: 'BaseButton',

  props: [ 'btnData' ]
};
</script>
