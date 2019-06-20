<template lang="pug">
  .apex-contact-info-component
    .apex-contact-info-container
      .apex-contact-info-heading.flex.flex-row-rev.flex-wrap
        .apex-column
          h2.u-bold
            |Enhance your business
            br
            |with digital signage
      .apex-contact-info-body.flex.flex-row-rev.flex-wrap
        .apex-column
          .apex-social.flex.flex-row.flex-wrap
            .apex-social-icon
              i.fab.fa-instagram
            .apex-social-icon
              i.fab.fa-linkedin-in
            .apex-social-icon
              i.fab.fa-facebook-f
            .apex-social-icon
              i.fab.fa-twitter
          h1.u-bold.u-capitalize contact us
          p
            |Get in touch to find out how you can boost your business
            |with advanced sign technology and eye-catching graphics.
            .apex-contact-links
              a(href='tel:1-800-000-0000' title='phone number').u-under-line 1-800-000-0000
              a(href='mailto:contact@apexdisplaymedia.com' title='phone number') contact@apexdisplaymedia.com
            .apex-address
              a(href='#' title='location')
                |499 McGregor Avenue
                br
                |London, ON, N6J 2S8
      .apex-contact-info-map
</template>

<script>

  export default {
    name: 'ApexContactInfo',
    data (){
      return {

      };
    }
  };

</script>

<style lang="scss" scoped>

h2 {
  color: $white;
}

.apex-contact-info-component {
  height: 100%;
}

.apex-column {
  width: 85%;
}

.apex-contact-info-heading {
  background-color: $apex-blue;
  padding-top: 92px;
  min-height: 265px;
  padding-right: 200px;
}

.apex-contact-info-body {
  padding-right: 200px;
}

.apex-address {
  margin-top: 34px;
}

.apex-social {
  height: 50px;
  margin-top: 63px;
  margin-bottom: 30px;
}

a {
    display: block;
    color: $apex-blue;
    font-weight: 700;
    line-height: 1.5;
    font-size: 18px;
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

  i {
    @include center('both');
  }
}

.apex-contact-info-map {
  width: 100%;
  background-color: #2d2d2d;
  min-height: 265px;
}

</style>