<template lang="pug">
    .apex-main-nav
      // - Trigger Navigation
      button( class="nav-trigger" :class="{open: navOpen }" @click="navOpen = !navOpen")
        span
        span
        span
      // - Sidebar Navigation Overlay
      .apex-nav-overlay(:class="{open: navOpen }" @click="navOpen = !navOpen")
      .apex-header-bar.flex.flex-row.flex-wrap( ref="dataMainNav" )
        .brand
          router-link(class='apex-header-bar-branding' title='Home' to='/')
            img(:src="loadImage(headerBrand)" alt="Apex logo")
        apex-large-quote-btn(styleType='header-style' v-on:toggle='toggleForm')
      nav(class="apex-nav-sidebar" :class="{open: navOpen }" :aria-hidden="!navOpen")
        .apex-sidebar-container.flex.flex-row.flex-wrap
          .brand
            router-link( class='apex-nav-sidebar-branding'  to='/')
              img(:src="loadImage(homeBrand)" alt="Apex logo")
          // - Sidebar Close button component
          apex-close-btn( styleType='blue' v-on:toggle='navOpen = !navOpen')
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
            a(href="tel:1-800-000-0000" title="phone number").u-under-line 1-800-000-0000
            a(href="mailto:contact@apexdisplaymedia.com" title="email address" class="u-lowercase") contact@apexdisplaymedia.com
          .apex-large-quote
            apex-large-quote-btn(styleType='nav-style' v-on:toggle='toggleForm')
</template>


<script>
  import { appData, mainNavigation } from '../../apex-data.js';

  import ApexLargeQuoteBtn from './apex-large-quote-btn.vue';
  import ApexCloseBtn from './apex-close-btn.vue';

  export default {

    name: 'ApexNavigation',

    data (){
      return {
        navOpen: false,
        headerBrand: appData.blackBrand,
        homeBrand: appData.whiteBrand,
        links: mainNavigation.links
      };
    },
    components: {
    'apex-large-quote-btn' : ApexLargeQuoteBtn,
    'apex-close-btn' : ApexCloseBtn
    },
    watch: {
      $route (to,from) {
        // If Nav was open when route changes.. close it
       if ( this.navOpen ) {
         this.navOpen = false;
       }
      },
      navOpen () {

        var mainBody = document.querySelectorAll('body');

        if (this.navOpen) {
          this.addClass(mainBody, 'u-freeze-scroll');
        }
        else{
          this.removeClass(mainBody, 'u-freeze-scroll');
        }
      }
    },
    methods: {
      loadImage(path){
      return require('../../assets/images/' + path);
      },
      toggleForm() {
        this.$emit('toggle', true);
        this.navOpen = false;
      }
    },

    mounted() {
      // Set padding on body according to size of nav
      let height = this.$refs.dataMainNav.getBoundingClientRect().height;
      document.querySelector('body').style.paddingTop = height + 'px';
    }
  };
</script>

<style lang="scss">

.apex-header-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 61px;
  z-index: 10;
  background-color: $white;

  .brand {
    width: calc(100% - 168px);
  }

  .apex-header-bar-branding img {
    max-width: 182px;
    margin-top: 15px;
    margin-left: 12px;
  }

  @media #{$laptop-up} {
    .apex-header-bar-branding img {
      margin-left: 100px;
    }
  }

  @media #{$tablet-up} {
    height: 100px;

    .brand {
      width: calc(100% - 362px);
    }

    .apex-header-bar-branding img {
      min-width: 296px;
      margin-top: 24px;
      margin-left: 197px;
    }
  }

  @media #{$tablet-only} {
    .apex-header-bar-branding img {
      margin-left: 43px;
    }
  }
}

.nav-trigger {
  width: 61px;
  height: 61px;
  background-color: $black;
  border: 0;
  display: block;
  position: fixed;
  cursor: pointer;
  right: 0;
  top: 0;
  z-index: 11;

  @media #{$laptop-up} {
    z-index: 11;
  }

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 34%;
    background: $white;
    border-radius: 9px;
    opacity: 1;
    left: 20px;

    &:nth-child( 1 ) {
      top: 22px;
    }

    &:nth-child( 2 ) {
      top: 28px;
    }

    &:nth-child( 3 ) {
      top: 34px;
      left: 17px;
      width: 40%;
    }
  }

  @media #{$tablet-up} {
    width: 100px;
    height: 100px;

    span {
      left: 35px;
      height: 4px;
      width: 28%;
    }

    span:nth-child( 1 ) {
      top: 38px;
    }

    span:nth-child( 2 ) {
      top: 46px;
    }

    span:nth-child( 3 ) {
      top: 54px;
      left: 28px;
      width: 35%;
    }
  }
}

.apex-nav-sidebar {
  position: fixed;
  height: 100%;
  z-index: 22;
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
  }

  @media #{$tablet-up} {
    .apex-nav-sidebar-branding {
      margin-left: 80px;
    }

    .apex-nav-sidebar-branding img {
      margin-top: 27px;
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
      margin-top: 70px;
    }

    @media #{$tablet-lnd-only} {
      margin-top: 60px;
    }

    @media #{$laptop-only} {
      margin-top: 60px;
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
      color: $apex-blue;
      list-style-type: none;
      font-weight: 700;
      margin-bottom: 25px;
      font-size: 15px;
      text-indent: 50px;

      @media #{$tablet-up} {
        font-size: 18px;
        text-indent: 80px;
      }
    }
  }

  .apex-contact-nav-links {
    a,
    p {
      margin-bottom: 15px;
      font-size: 18px;
      line-height: 1.5;

      @media #{$tablet-up} {
        margin-bottom: 4px;
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
      font-size: 22px;
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
  background-color: rgba(0,0,0,.85);
  z-index: 20;
  cursor: pointer;

  &.open {
    display: block;
  }
}

.apex-large-quote {
  position: fixed;
  bottom: 0;
  left: 0;
  font-weight: 700;
  width: 100%;
}

</style>




