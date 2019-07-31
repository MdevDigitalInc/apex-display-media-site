<template lang="pug">
  footer.apex-footer
    .apex-main-wrapper.apex-footer-container
      .flex.flex-row.flex-wrap.apex-row
        .apex-brand
          router-link(to="/" title="Home" class="apex-footer-branding")
            img(:src="loadImage(footerBrand)" alt="Apex logo")
        .apex-contact-info
          p.u-none
            |Get in touch:
          a(href="tel:5198520021" title="phone number").u-under-line 519-852-0021
          a(href="mailto:contact@apexdisplaymedia.com" title="email address" class="u-lowercase") contact@apexdisplaymedia.com
          p.u-none.apex-location Our Location:
          a(href="#" title="address")
            | 4015 Dowell Drive
            br
            | London, ON, N6E 3A1
        .apex-footer-nav-links.u-capitalize
          router-link(
          v-for="link in links"
          :to="link.route"
          active-class="--active"
          :title="link.linkTitle"
          aria-role="menuitem"
          exact)
            span
              |{{ link.linkName }}
          .apex-contact(@click.stop="toggleForm")
            |Contact Us

    .apex-footer-bottom-bar
      .apex-main-wrapper
        .flex.flex-row.flex-wrap.apex-row
          .apex-copy &copy; {{ year }} - Copyright Apex Display Media
          .flex.flex-row.flex-wrap.apex-footer-social
            .apex-footer-social-icon
              a(href="https://www.instagram.com/apexdisplaymedia/" target="_blank" title="Instagram")
                i.fab.fa-instagram
            .apex-footer-social-icon
              a(href="https://www.linkedin.com/company/apexdisplaymedia" target="_blank" title="Linked In")
                i.fab.fa-linkedin-in
            .apex-footer-social-icon
              a(href="https://www.facebook.com/apexdisplaymedia/" target="_blank" title="Facebook")
                i.fab.fa-facebook-f
            .apex-footer-social-icon
              a(href="https://twitter.com/ApexDisplay" target="_blank" title="Instagram")
                i.fab.fa-twitter
          .apex-quote
            //- Apex quote button component
            apex-large-quote-btn(styleType='footer-style' v-on:toggle='toggleForm')
</template>
<script>

  import ApexLargeQuoteBtn from './apex-large-quote-btn.vue';

	export default {
    name: 'ApexFooter',
    data (){
      return {
        year: null,
        footerBrand: 'apex-logo-footer.svg',
        links: [
          {
            linkName: 'Home',
            linkTitle: 'Home',
            route: '/'
          },
          {
            linkName: 'About',
            linkTitle: 'About Apex Display Media',
            route: '/about'
          },
          {
            linkName: 'Outdoor LEDs',
            linkTitle: 'Outdoor LEDs',
            route: '/services/outdoor-digital-signs'
          },
          {
            linkName: 'Indoor Digital Signage',
            linkTitle: 'Indoor Digital Signage',
            route: '/services/indoor-digital-signs'
          },
          {
            linkName: 'Digital Media Management',
            linkTitle: 'Media Management',
            route: '/services/digital-media-management'
          },
        ]
      };
    },
    components: {
      'apex-large-quote-btn' : ApexLargeQuoteBtn
    },
    methods: {
      toggleForm() {
        this.$emit('toggle', true);
      }
    },
    created: function() {
      this.year = (new Date()).getFullYear();
    }
  };

</script>

<style lang="scss">

.apex-row {
  overflow: visible;
}

.apex-footer {
  position: relative;
  background-color: $black;
  min-height: 500px;
  color: $white;
  overflow: hidden;
}

.apex-main-wrapper.apex-footer-container {
  overflow: visible;

  @media #{$phone-only} {
    width: 75%;
  }
}

.apex-brand {
  width: 100%;

  @media #{$laptop-up} {
    width: 35%;
  }
}

.apex-contact-info {
  width: 100%;
  margin-top: 75px;
  margin-bottom: 50px;

  @media #{$laptop-up} {
    margin-top: 130px;
    margin-bottom: 0;
    width: 30%;
  }

  p,
  p:last-of-type {
    margin-bottom: 4px;
    font-size: 18px;
  }

  a,
  .apex-contact {
    display: block;
    color: $apex-blue;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 4px;
    line-height: 1.5;

    &:hover {
      color: $apex-blue;
    }
  }
}

.apex-location {
  margin-top: 40px;
}

.apex-copy {
  width: 100%;
  font-size: 14px;
  padding: 15px 0;
  order: 3;
  text-align: center;
  background-color: $apex-grey;

  @media #{$tablet-only} {
    width: 40%;
    min-height: 75px;
    padding-top: 25px;
    order: 2;
  }

  @media #{$laptop-up} {
    padding-top: 25px;
    text-align: left;
    width: 35%;
    order: 1;
  }
}

.apex-footer-social {
  width: 100%;
  min-height: 50px;
  order: 2;
  background: $black;
  justify-content: center;
  margin: 20px 0;

  @media #{$tablet-up} {
    background-color: transparent;
    min-height: 50px;
    margin: 0;
  }

  @media #{$tablet-only} {
    width: 40%;
  }

  @media #{$laptop-up} {
    width: 50%;
    justify-content: flex-start;
  }
}

.apex-quote {
  width: 100%;
  order: 1;
  background: $black;

  @media #{$laptop-up} {
    width: 15%;
    order: 3;
  }
}

.apex-footer-bottom-bar {

  @media #{$tablet-up} {
    background-color: $apex-grey;
  }

  @media #{$laptop-up} {
    position: absolute;
    bottom: 0;
  }

  .apex-row {

    @media #{$tablet-only} {
      justify-content: center;
    }
  }

  background-color: $black;
  color: #cdcdcd;
  min-height: 69px;
  width: 100%;

  .apex-main-wrapper {
    width: 100%;

    @media #{$tablet-lnd-only} {
      max-width: 100%;
    }

    @media #{$laptop-up} {
      width: 80%;
    }
  }
}

.apex-footer-social-icon {
  position: relative;
  font-size: 30px;
  color: $white;
  padding: 0 10px;
  width: 50px;
  cursor: pointer;

  &:first-child {
    margin-left: -10px;
  }

  &:hover {
    background-color: $apex-blue;
    color: $black;
  }

  i {
    @include center('both');
  }
}

.apex-footer-branding img {
  width: 278px;
  margin-top: 50px;

  @media #{$laptop-up} {
    margin-top: 131px;
  }
}

.apex-footer-nav-links {
  position: relative;
  top: 63px;
  right: 0;
  display: none;
  width: 35%;

  a,
  .apex-contact {
    display: block;
    color: $apex-blue;
    font-weight: 700;
    cursor: pointer;

    @media #{$laptop-up} {
      font-size: 18px;
      margin-bottom: 25px;
      text-align: right;
      direction: rtl;
    }
  }

  a.--active {
    color: $white;
    text-indent: 0;

    span:before {
      content: '';
      display: inline-block;
      background-color: $white;
      height: 4px;
      width: 300px;
      position: absolute;
      transform: translateX( 109% ) translateY( 50% );

      @media #{$laptop-up} {
        margin: 6px 0 6px 28px;
      }

      @media #{$laptop-only} {
        width: 200px;
      }
    }

    @media #{$laptop-up} {
      font-size: 21px;
    }
  }

  @media #{$laptop-up} {
    display: block;
  }
}

</style>
