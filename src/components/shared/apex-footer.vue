<template lang="pug">
  footer.apex-footer
    .apex-footer-container.apex-main-wrapper
      .apex-row.flex.flex-row.flex-wrap
        .brand
           a(href="/" title="Home" class="apex-footer-branding")
            img(:src="loadImage(footerBrand)" alt="Apex logo")
        .apex-contact-info
          p.u-none Get in touch:
          a(href="tel:1-800-000-0000" title="phone number").u-under-line 1-800-000-0000
          a(href="mailto:contact@apexdisplaymedia.com" title="email address" class="u-lowercase") contact@apexdisplaymedia.com
          p.u-none Our Location:
          a(href="#" title="address") 
            | 499 McGregor Avenue 
            br 
            | London, ON, N6J 2s8
    .apex-footer-bottom-bar
      .apex-main-wrapper
        .apex-row.flex.flex-row.flex-wrap
          .apex-copy &copy;2019 - Copyright Apex Display Media
          .apex-social.flex.flex-row.flex-wrap
            .apex-social-icon
              i.fab.fa-instagram
            .apex-social-icon
              i.fab.fa-linkedin-in
            .apex-social-icon
              i.fab.fa-facebook-f
            .apex-social-icon
              i.fab.fa-twitter
          .apex-quote
            //a.apex-base-btn.apex-red-btn.u-capitalize Free quote
            apex-large-quote-btn
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
</template>
<script>

  import ApexLargeQuoteBtn from './apex-large-quote-btn.vue';

	export default {
	    name: 'ApexFooter',
	    data (){
	      return {
	        footerBrand: 'apex-logo-footer.svg',
          links: [
            {
              linkName: 'Home',
              linkTitle: 'Home',
              route: '/'
            },
            {
              linkName: 'Outdoor LEDs',
              linkTitle: 'Outdoor LEDs',
              route: '/outdoor-leds'
            },
            {
              linkName: 'Indoor Digital Signage',
              linkTitle: 'Indoor Digital Signage',
              route: '/indoor-digital-signage'
            },
            {
              linkName: 'Media Management',
              linkTitle: 'Media Management',
              route: '/media-management'
            },
            {
              linkName: 'Support',
              linkTitle: 'Support',
              route: '/support'
            },
            {
              linkName: 'About',
              linkTitle: 'About',
              route: '/about'
            },
            {
              linkName: 'Contact Us',
              linkTitle: 'Contact Us',
              route: '/contact'
            }
          ]
	      };
	    },
      components: {
        'apex-large-quote-btn' : ApexLargeQuoteBtn
      },
	    methods: {
	      loadImage(path){
	      return require('../../assets/images/' + path);
	      }
	    }
	  };

</script>

<style lang="scss">

.apex-footer {
  position: relative;
  background-color: $black;
  min-height: 495px;
  color: $white;
}

.brand {
  width: 35%;
}

.apex-contact-info {
  width: 25%;
  margin-top: 135px;

  p,
  p:last-of-type {
    margin-bottom: 10px;
    font-size: 18px;
  }

  a {
    display: block;
    color: $apex-blue;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 1.5;

    &:hover {
      color: $apex-blue;
    }
  }
}

.apex-copy {
  width: 35%;
  font-size: 14px;
  padding-top: 25px;
}

.apex-social {
  width: 40%;
}

.apex-quote {
  width: 25%;

  @media #{$laptop-up} {

  position: absolute;
  right: 0;
  bottom: 0;
  }
}

.apex-footer-bottom-bar {
  position: absolute;
  bottom: 0;
  background-color: $apex-grey;
  color: #cdcdcd;
  min-height: 69px;
  width: 100%;
}

.apex-social-icon {
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
  margin-top: 131px;
}

.apex-footer-nav-links {
  position: absolute;
  right: 0;
  top: 63px;

  a {
    display: block;
    color: #6aaae4;
    font-weight: 700;

    @media #{$laptop-up} {
      font-size: 18px;
      margin-bottom: 31px;
      text-align: right;
      text-indent: 241px;
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
      width: 100px;
      margin: 6px 22px 6px 0;
      @media #{$tablet-up} {
        width: 213px;
        margin: 6px 0 6px 28px;
      }
    }

    @media #{$laptop-up} {
      font-size: 21px;
    }
  }
}

</style>