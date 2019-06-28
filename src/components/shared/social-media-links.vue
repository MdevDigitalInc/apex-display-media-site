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
