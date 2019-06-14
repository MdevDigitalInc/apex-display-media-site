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
            a.apex-base-btn.apex-red-btn.u-capitalize Free quote
</template>
<script>

	export default {
	    name: 'ApexFooter',
	    data (){
	      return {
	        footerBrand: 'apex-logo-footer.svg'
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

.apex-footer {
  position: relative;
  background-color: $black;
  min-height: 495px;
  color: $white;
}

.brand {
  width: 25%;
}

.apex-contact-info {
  width: 25%;

  p,
  p:last-of-type {
    margin-bottom: 20px;
    font-size: 18px;
  }

  a {
    display: block;
    color: $apex-blue;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
    
    &:hover {
      color: $apex-blue;
    }
  }
}

.apex-copy {
  width: 25%;
  font-size: 14px;
  padding-top: 25px;
}

.apex-social {
  width: 25%;
}

.apex-quote {
  width: 25%;
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
}

</style>