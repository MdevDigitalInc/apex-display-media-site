<template lang="pug">
    .apex-main-nav
      // - Sidebar Navigation Overlay
      .apex-nav-overlay(:class="{open: navOpen }" @click="navOpen = !navOpen")
      // - Trigger Navigation
      button( class="nav-trigger" :class="{open: navOpen }" @click="navOpen = !navOpen") toggle menu
      nav(class="apex-nav-sidebar" :class="{open: navOpen }" :aria-hidden="!navOpen")
        .apex-sidebar-container.flex.flex-row.flex-wrap
          .brand
            a(href="/" title="Home" class="apex-nav-sidebar-branding")
              img(:src="loadImage(homeBrand)" alt="Apex logo")
          button( @click="navOpen = !navOpen" class="apex-toggle-nav" data-target)
            span
            span
            span
            span
          .apex-main-nav-links.u-capitalize
            router-link(
            v-for="link in links"
            :to="link.route"
            active-class="--active"
            :title="link.linkTitle"
            aria-role="menuitem"
            exact)
              span
              |{{ link.linkName  }}
          .apex-contact-nav-links.u-capitalize
            p.u-none Get in touch:
            a(href="tel:1-800-000-0000" title="phone number") 1-800-000-0000
            a(href="mailto:contact@apexdisplaymedia.com" title="email address" class="u-lowercase") contact@apexdisplaymedia.com
          a.apex-quote-btn.u-capitalize Free Quote
</template>


<script>

  export default {

    name: 'ApexNavigation',
    data (){

      return {
        navOpen: false,
        homeBrand: 'apex-logo.svg',
        links: [
          {
            linkName: 'Home',
            linkTitle: 'Home',
            route: '/'
          },
          {
            linkName: 'Indoor Digital Signage',
            linkTitle: 'Indoor Digital Signage',
            route: '/indoor-digital-signage'
          },
          {
            linkName: 'Outdoor LEDs',
            linkTitle: 'Outdoor LEDs',
            route: '/outdoor-leds'
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
    methods: {
      loadImage(path){
      return require('../../assets/images/' + path);
      }
    }
  };
</script>

<style lang="scss">

.nav-trigger {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 11;
}

.apex-nav-sidebar {
  position: fixed;
  height: 100%;
  z-index: 12;
  top: 0;
  right: 0;
  transition: .3s;
  background-color: #111;
  color: #fff;
  width: 100%;
  transform: translateX( 100% );

  .apex-sidebar-container {
    width: 100%;
  }

  .apex-nav-sidebar-branding {
    margin-left: 50px;
    display: block;

    img {
      width: 70%;
      margin-top: 15px;
    }

    @media #{$tablet-up} {
      margin-left: 80px;

      img {
        margin-top: 27px;
      }
    }
  }

  &.open {
    transform: translateX( 0 );
  }

  .apex-toggle-nav {
    width: 61px;
    height: 61px;
    background-color: #6aaae4;
    border: 0;
    position: relative;
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 3px;
      width: 30%;
      background: $white;
      border-radius: 9px;
      opacity: 1;
      left: 22px;
      top: 28px;
      transform: rotate(0deg);

      &:nth-child( 1 ) {
        top: 15px;
        width: 0%;
        left: 50%;
      }

      &:nth-child( 2 ) {
        transform: rotate(45deg);
      }

      &:nth-child( 3 ) {
        transform: rotate(-45deg);
      }

      &:nth-child( 4 ) {
        top: 10px;
        width: 0%;
        left: 50%;
      }
    }
  }

  .brand {
    width: calc(100% - 61px);
    height: 61px;
  }

  .apex-main-nav-links,
  .apex-contact-nav-links {
    width: 100%;
    margin-top: 50px;

    @media #{$tablet-up} {
      margin-top: 140px;
    }

    p {
      margin-bottom: 30px;
      text-indent: 50px;

      @media #{$tablet-up} {
        text-indent: 80px;
      }
    }

    a {
      display: block;
      color: #6aaae4;
      list-style-type: none;
      font-weight: 700;
      margin-bottom: 30px;
      font-size: 15px;
      text-indent: 50px;

      @media #{$tablet-up} {
        font-size: 18px;
        text-indent: 80px;
      }
    }
  }

  a.--active {
    color: $white;
    font-size: 20px;
    text-indent: 0;

    span:before {
      content: '';
      display: inline-block;
      background-color: $white;
      height: 4px;
      width: 29px;
      margin: 6px 22px 6px 0;

      @media #{$tablet-up} {
        width: 50px;
        margin: 6px 30px 6px 0;
      }
    }
  }

  @media #{$tablet-up} {
    width: 525px;
    transform: translateX( 525px );

    .brand {
      width: calc(100% - 100px);
      height: 100px;
    }

    .apex-toggle-nav {
      width: 100px;
      height: 100px;

      span {
        left: 35px;
        top: 46px;
      }
    }

    a.--active {
      font-size: 24px;
    }
  }
}

.apex-nav-overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.5);
  z-index: 11;
  cursor: pointer;

  &.open {
    display: block;
  }
}

</style>




