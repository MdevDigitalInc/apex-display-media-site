<template lang="pug">
  .apex-member-packages-section
    .apex-member-packages
      .apex-member-packages-wrapper
        h2.d-heading-flair.d-heading-flair-white.u-bold.u-capitalize(v-html="heading")
        .apex-member-package-blocks.flex.flex-row.flex-wrap.flex-hor-between
          .apex-member-package-block( v-for="(item, index) in packages")
            .apex-member-package-block-inner.flex.flex-row.flex-wrap
              .apex-member-package-block-heading
                h2.d-heading-flair.d-heading-flair-blue(v-html="item.heading")
              .apex-member-package-block-copy
                p
                  | {{item.copy}}
                ul
                  li(v-for="(listItem, index) in item.listItems")
                    |{{listItem.copy}}
  </template>
<script>

export default {
  name: 'MemberPackages',
  props: [ 'heading' , 'packages' ],
  data: function(){
    return {
    };
  }
};
</script>

<style lang="scss">

.apex-member-packages-wrapper {
  margin: 0 auto;
  width: 95%;
  padding-top: 0;

  h2 { 
    font-weight: 700;
    color: $white;
    display: none;
  }

  @media #{$laptop-up} {
    width: 69%;
    padding-top: 100px;

    h2 {
      display: block;
    }
  }

  @media #{$laptop-only} {
    width: 80%;
  }

  @media #{$tablet-only} {
    width: 80%;
  }
}

.apex-member-package-blocks {
  padding-top: 50px;
}

.apex-member-packages-section {
  background-color: $apex-blue;
}

.apex-member-package-block-heading {
  width: 100%;
}

.apex-member-package-block-copy {
  width: 100%;
}

.apex-member-package-block {
  border-radius: 5px;
  background-color: $white;
  padding: 40px;
  margin-bottom: 28px;

  p:last-of-type {
    margin-bottom: 20px;
  }

  h2 {
    color: $black;
    display: block;
  }

  li {
    list-style-type: disc;
    color: $apex-blue;
    font-weight: 700;
    list-style-position: outside;
    line-height: 1.5;
    font-size: 16px;
    margin-bottom: 10px;
    margin-left: 15px;

    @media #{$tablet-up} {
      font-size: 20px;
      margin-left: 20px;
    }
  }

  &:nth-child( 3n ) {
    margin-bottom: 60px;
  }

  @media #{$laptop-up} {
    width: 49%;
    padding: 50px;
    margin-bottom: 28px;

    &:first-child,
    &:nth-child( 2n ) {
      min-height: 600px;
    }

    &:nth-child( 3n ) {
      width: 100%;
      height: auto;
      margin-bottom: 95px;

      .apex-member-package-block-heading {
        width: 40%;
      }

      .apex-member-package-block-copy {
        width: 60%;
      }
    }

    li {
      list-style-position: inside;
      margin-left: 0;
      font-size: 20px;
    }
  }

  @media #{$laptop-only} {
    li {
      list-style-position: outside;
      margin-left: 20px;
    }
  }
}
</style>