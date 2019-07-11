<template lang="pug">
  .apex-member-packages-section
    .apex-member-packages
      .apex-member-packages-wrapper
        h2.d-heading-flair.d-heading-flair-white.u-bold
          | Membership 
          br
          |packages
        .apex-member-package-blocks.flex.flex-row.flex-wrap.flex-hor-between
          .apex-member-package-block
            h2.d-heading-flair.d-heading-flair-blue
              | Starter Membership
            p
              | Ideal for clients with 1-3 screens at one locations or anyone who is just getting started with digital signage. Our team will provide
              | intial static graphics for launch and then work with you to provide minor updates as needed.

          .apex-member-package-block
            h2.d-heading-flair.d-heading-flair-blue
              | Starter Membership
            p
              | Ideal for clients with 1-3 screens at one locations or anyone who is just getting started with digital signage. Our team will provide
              | intial static graphics for launch and then work with you to provide minor updates as needed.
          .apex-member-package-block
            h2.d-heading-flair.d-heading-flair-blue
              | Starter Membership
            p
              | Ideal for clients with 1-3 screens at one locations or anyone who is just getting started with digital signage. Our team will provide
              | intial static graphics for launch and then work with you to provide minor updates as needed.
</template>
<script>

export default {
  name: 'MemberPackages',

  data: function(){
    return {
    };
  }
};
</script>

<style lang="scss">

.apex-member-packages-wrapper {
  margin: 0 auto;
  width: 69%;
  padding-top: 100px;

  h2 { 
    font-weight: 700;
    color: $white;
  }
}


.apex-member-packages-section {
  background-color: $apex-blue;

  @media #{$laptop-up} {

    .apex-member-package-block {
      width: 49%;
      border-radius: 5px;
      background-color: $white;
      padding: 50px;
      margin-bottom: 28px;

      h2 { 
        color: $black;
      }

      &:first-child,
      &:nth-child( 2n ) {
        min-height: 600px;
      }

      &:nth-child( 3n ) {
        width: 100%;
        height: auto;
      }
    }
  }
}

</style>