<template lang="pug">
  .apex-social.flex.flex-row.flex-wrap
    .apex-social-icon(v-for='(link, index) in socialMediaLinks')
      a(:href='link.url' :title='link.linkTitle' :aria-label='link.linkTitle' :target='link.target')
          i(class='fab' :class="link.iconClass")
</template>

<script>

  export default {
    name: 'SocialMediaLinks',
    props: {
      socialMediaLinks: Array
    },
    data (){
      return {

      };
    }
  };

</script>

<style lang="scss" scoped>

.apex-social {
  height: 50px;
  margin-top: 63px;
  margin-bottom: 30px;
}

.apex-social-icon {
  position: relative;
  font-size: 30px;
  color: $apex-blue;
  padding: 0 10px;
  width: 50px;
  cursor: pointer;

  &:first-child {
    margin-left: -10px;
  }

  &:hover {
    color: $black;
  }

  a {
    font-size: 30px;
    font-weight: 400;
  }

  i {
    @include center('both');
  }
}

</style>