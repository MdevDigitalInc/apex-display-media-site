<template lang="pug">
  nav(class="apex-nav-sidebar" :aria-hidden="!navOpen")
    apex-sidebar-container.flex.flex-row.flex-wrap
      .brand
        img(src="" alt="Apex logo")
      button(v-on:click="toggleNav" class="apex-toggle-nav" data-target)
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
        p Get in touch:
        a(href="tel:1-800-000-0000" title="phone number") 1-800-000-0000
        a(href="mailto:contact@apexdisplaymedia.com" title="email address") contact@apexdisplaymedia.com
      a.apex-quote-btn.u-capitalize Free Quote
      //.apex-nav-overlay(:class="{open: navOpen }")
</template>


<script>

  export default {

    name: 'ApexNavigation',
    props: {
      navOpen: Boolean
    },
    data (){

      return {

        title: 'ApexNav',
        content: 'I am a navigation component',
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
      toggleNav() {
        this.$emit('toggle_nav', true);
      }
  }


  };
</script>




