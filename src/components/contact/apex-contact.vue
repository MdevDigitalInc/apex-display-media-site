<template lang="pug">
.apex-contact
  .apex-contact-container
    .apex-row.flex.flex-row.flex-wrap.flex-hor-center
      .apex-contact-heading.flex.flex-row.flex-wrap
        h2.u-bold
          |Enhance your business
          br
          |with digital signage
      .apex-contact-form-heading.flex.flex-row.flex-wrap
        .apex-contact-form-heading-container
          h2.u-bold Free Quote
          p
            |Tell us what you are looking to accomplish. Not sure where to start? 
            |Let our team assess your location and business goals to provide 
            |expert advice on signage installations and content strategies.
    .apex-row.flex.flex-row.flex-wrap.flex-hor-center
      .apex-contact-info.flex.flex-row-rev.flex-wrap
        .apex-contact-info-container
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
        .apex-contact-map a map here
      .apex-form.flex.flex-row.flex-wrap
        .apex-contact-form-container
          apex-contact-form
</template>

<script>

  import ApexContactForm from './apex-contact-form.vue';

  export default {
    name: 'ApexContact',
    data (){
      return {

      };
    },
    components: {
    'apex-contact-form' : ApexContactForm
    }
  };
</script>

<style lang="scss" scoped>

  .apex-contact-container {
    position: relative;
    width: 100%;
    background-color: $black;

    .apex-contact-heading {
      width: 50%;
      background-color: $apex-blue;
      h2 {
        color: $white;
      }
    }

    .apex-contact-form-heading {
      width: 50%;
      background-color: $apex-red;
      color: $white;

        .apex-contact-form-heading-container {
          width: 80%;
          padding-left: 113px;
          padding-top: 91px;

           p:last-of-type {
            margin-bottom: 20px;
          }
        }
    }

    .apex-contact-info { 
      width: 50%;
      background-color: $white;

      .apex-contact-info-container {
        width: 80%;
        padding-right: 130px;
      }

      a {
        display: block;
        color: $apex-blue; 
        font-weight: 700;
        line-height: 1.5;
        font-size: 18px;
      }
    }

    .apex-form {
      width: 50%;
      background-color: $apex-red;
      padding-left: 113px;
      .apex-contact-form-container {
        width: 80%;
      }
    }
  }

  .apex-contact-links {
    margin-bottom: 34px;

  }

  .apex-contact-map {
    width: 100%;
    background-color: #2d2d2d;
    min-height: 265px;
  }

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

    i {
      @include center('both');
    }
  }

</style>