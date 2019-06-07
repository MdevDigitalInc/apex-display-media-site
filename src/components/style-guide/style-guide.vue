<template lang="pug">
  section.mdev-main-content
    //- Use comments witn `-`
    //- This omits them from output.

    div.guide-container
      h1.--space-large
        |Apex Desktop Styles
      h1.--size-extra-large.--space-large.u-bold
        | h1 - Montserrat, 60 BOLD
      h2.--size-large.--space-large.u-bold.d-heading-flair.d-heading-flair-blue
        | h2 - Montserrat, 50 BOLD
      h3.--size-medium.--space-extra-large.u-medium
        | h3 - Montserrat, 40 Medium
      h4.--size-small.--space-small
        | h4 - Montserrat, 30 Regular
      h5.--size-extra-small.--space-small.u-bold
        | h5 - Montserrat, 24 Bold
      h6.--size-medium-large.--space-extra-large.u-bold
        | h6 - Montserrat, 47 BOLD
      p.--p-space-end
        | There is also a 
        span.u-bold 
        | bold style,
        | an 
        span.u-italic italic style and a 
        a(href="#" class="u-under-line") link style
        |.
      p
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis vitae justo eu iaculis. Donec iaculis, enim in sollicitudin 
        | faucibus, odio nibh pulvinar elit, at tristique magna nulla eget mauris. Ut euismod lacus aliquet, fringilla mi id, rhoncus arcu. 
        | Nullam id facilisis odio. Curabitur fringilla massa et lorem posuere, porttitor sodales mauris posuere. Donec tristique, turpis non 
        | consequat faucibus, neque erat vulputate lorem, eu volutpat metus tellus a lacus. Cras sed augue in diam tempus pharetra. Proin ac  
        | accumsan augue. Vestibulum id mi in sapien aliquam interdum. Maecenas eget lectus vehicula lacus blandit venenatis. Nunc vel hendrerit | mauris, sed pellentesque nisi. Nullam massa nisl, viverra vel elit id, sodales facilisis orci. Nullam eu est nulla. Duis dignissim quam | ornare elit tristique ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras quis 
        | lectus interdum, iaculis neque et, tincidunt justo. 

      a(href='#' class='apex-base-btn apex-red-btn') Contact Me
      input(type='button' value='contact me' class="apex-base-btn apex-red-btn")
      button(class='apex-base-btn apex-red-btn') Contact me
      br
      a(href='#' class='apex-base-btn apex-plain-btn') Learn more
      input(type='button' value='Learn more' class="apex-base-btn apex-plain-btn")
      button(class='apex-base-btn apex-plain-btn') Learn more
      br
      div
        div.pallette-box.pallette-box-white
        div.pallette-box.pallette-box-black
        div.pallette-box.pallette-box-blue
        div.pallette-box.pallette-box-red
</template>




<script>
// Import SEO From File
import SEOData       from '../../seo-meta.js';

export default {
  name: 'StyleGuide',

  data: function(){
    return {
      seo: SEOData.siteSeo
    };
  },
  // Meta SEO Function
  metaInfo() {
    return {
      title: this.seo.app.title,
      meta: [
        // SEO
        { vmid: 'desc', name: 'description', content: this.seo.app.desc },
        { vmid: 'ogtitle', property: 'og:title', content: this.seo.app.title + this.seo.templateAddon },
        { vmid: 'ogimage', property: 'og:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.social.ogimage) },
        { vmid: 'ogdesc', property: 'og:description', content: this.seo.app.desc },
        { vmid: 'twtitle', name: 'twitter:title', content:  this.seo.app.title + this.seo.templateAddon },
        { vmid: 'twimage', name: 'twitter:image', content: (this.stagingBuild ? this.stageUrl : this.liveUrl) + this.loadImage(this.seo.social.twimage) },
        { vmid: 'twdesc', name: 'twitter:description', content: this.seo.app.desc }
      ]
    };
  },

  mounted: function(){
    console.log('COMPONENT NAME Mounted');
  }
};
</script>



<style lang="scss">

/*-------------------------------------*/
/* BASE TEMPLATE Component Styles
/--------------------------------------*/


/*--------------------------------------*/

</style>
