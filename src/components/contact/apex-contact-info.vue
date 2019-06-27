<template lang="pug">
  .apex-contact-info-component
    .apex-contact-info-container.flex.flex-row.flex-wrap
      .apex-contact-info-heading.flex.flex-row-rev.flex-wrap
        .apex-column
          h2.u-bold
            |Enhance your business
            br
            |with digital signage
      .apex-contact-info-body.flex.flex-row-rev.flex-wrap
        .apex-column
          social-media-links(:socialMediaLinks='socialMediaLinks')
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
        apex-contact-map
</template>

<script>

  import SocialMediaLinks from '../shared/social-media-links.vue';
  import ApexContactMap from './apex-contact-map.vue';

  export default {
    name: 'ApexContactInfo',
    data (){
      return {
        socialMediaLinks: [
          {
            linkName: 'Instagram',
            linkTitle: 'Follow us on Instagram',
            target: '_blank',
            iconClass: 'fa-instagram',
            url: '#'
          },
          {
            linkName: 'LinkedIn',
            linkTitle: 'Follow us on LinkedIn',
            target: '_blank',
            iconClass: 'fa-linkedin-in',
            url: '#'
          },
          {
            linkName: 'Facebook',
            linkTitle: 'Follow us on Facebook',
            target: '_blank',
            iconClass: 'fa-facebook-f',
            url: '#'
          },
          {
            linkName: 'Twitter',
            linkTitle: 'Follow us on Twitter',
            target: '_blank',
            iconClass: 'fa-twitter',
            url: '#'
          }
        ]

      };
    },
    components: {
      'social-media-links' : SocialMediaLinks,
      'apex-contact-map' : ApexContactMap,
    }
  };

</script>

<style lang="scss" scoped>

h1 {
  @media #{$phone-only} {
    font-size: 45px;
  }
}

h2 {
  color: $white;
}

p {
  font-size: 16px;

  @media #{$tablet-up} {
    font-size: 20px;
  }
}

.apex-contact-info-component {
  height: 100vh;
}

.apex-column {
  width: 90%;

  @media #{$laptop-up} {
    width: 85%;
  }
}

.apex-contact-info-heading {
  background-color: $apex-blue;
  padding-top: 92px;
  min-height: 265px;
  width: 100%;
  order: 2;

  @media #{$laptop-up} {
    order: 1;
  }
}

.apex-contact-info-body {
  width: 100%;
  order: 1;

  .apex-column {
    padding-right: 20%;
  }

  @media #{$laptop-up} {
    order: 2;
  }
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

  &:hover,
  &:visited {
    color: $apex-blue;
  }
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

.apex-contact-info-map {
  width: 100%;
  min-height: 265px;
  order: 3;
}

</style>