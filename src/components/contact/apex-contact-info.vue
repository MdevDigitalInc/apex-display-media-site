<template lang="pug">
  .apex-contact-info-component
    .apex-contact-info-container.flex.flex-row.flex-wrap
      .apex-contact-info-heading.flex.flex-row-rev.flex-wrap
        .apex-column.heading
          h2.u-bold
            |Enhance your business
            br
            |with digital signage
      .apex-contact-info-body.flex.flex-row-rev.flex-wrap
        .apex-column.apex-info
          //- Social Media Component
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

<style lang="scss">



.apex-contact-info-component {
  height: 100vh;

  h1 {
    @media #{$phone-only} {
      font-size: 45px;
    }
  }

  h2 {
    color: $white;
    line-height: 1.5;
  }

  p {
    font-size: 16px;

    @media #{$tablet-up} {
      font-size: 20px;
    }

    @media #{$laptop-only} {
      font-size: 16px;
      position: relative;
    }
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
}

.apex-column {
  width: 80%;
  margin: 0 auto;

  .heading {
    width: 90%;
  }

  @media #{$tablet-only} {
    .apex-info {
      padding-right: 12%;
      width: 70%;
    }
  }

  @media #{$laptop-up} {
    width: 85%;

    .apex-info {
      padding: 0 3% 0 14%;
      width: 80%;
    }
  }
}

.apex-contact-info-heading {
  background-color: $apex-blue;
  background-image: url('../../assets/images/dots-white.svg');
  background-repeat: no-repeat;
  background-position: -108px center; 
  padding-top: 51px;
  min-height: 265px;
  width: 100%;
  order: 2;

  h2 {
    font-size: 35px;
    padding-left: 60px;
    line-height: 1.2;
  }

  @media #{$tablet-only} {
    padding-top: 80px;

    h2 {
      font-size: 50px;
    }
  }


  @media #{$laptop-up} {
    background-position: 0 center; 
    padding-top: 73px;
    order: 1;

    h2 {
      padding-left: 185px;
      line-height: 1.5;
      font-size: 50px;
    }
  }

  @media #{$laptop-only} {
    min-height: 150px;
    padding-top: 24px;
    background-position: -55px 15px; 
    
    h2 {
      padding-left: 22%;
      font-size: 30px;
    }
  }
}

.apex-contact-info-body {
  width: 100%;
  order: 1;

  @media #{$laptop-up} {
    order: 2;
  }

  @media #{$laptop-only} {
    h1 {
      font-size: 40px;
    }
  }
}

.apex-address {
  margin-top: 34px;
}

.apex-social {
  height: 50px;
  margin-top: 63px;
  margin-bottom: 30px;

  @media #{$laptop-only} { 
    margin-top: 30px;
    margin-bottom: 30px;
  }
}

.apex-social-icon {
  position: relative;
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

  @media #{$laptop-only} { 
    a {
      font-size: 20px;
    }
  }
}

.apex-contact-info-map {
  width: 100%;
  min-height: 265px;
  order: 3;

  @media #{$laptop-only} { 
    min-height: 300px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>