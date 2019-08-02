<template lang="pug">
.apex-contact-map
  .apex-map-container
    a(href='https://www.google.com/maps/place/4015+Dowell+Dr,+London,+ON+N6E+3A1/@42.9270994,-81.2519209,17z/data=!3m1!4b1!4m5!3m4!1s0x882ef3fd2cb4e81f:0x8da95cdc7b200d0a!8m2!3d42.9270955!4d-81.2497322' title='map' target='_blank')
      google-map( :initMap="animLoaded" :mapData="mapData" v-on:mapIsLoaded='initPresentation')
</template>

<script>

  import googleMap from '../shared/google-map.vue';

  export default {
    name: 'ApexContactMap',
    data (){
      return {
        animLoaded: true,
        mapData: {
          pinLocation:  {lat: 42.9270994, lng: -81.2519209},
          mapCenter: {lat: 42.9270994, lng: -81.2519209},
          mapIcon: require('../../assets/images/map/location-ICON.png'),
          mapStyle: 'terrain',
          zoom: false,
          controls: false,
          kbShortcuts: false,
          scroll: false,
          drag: true,
          zoomLevel: 17.2,
          cursor: 'pointer'
        }
      };
    },
    components: {
      'google-map' : googleMap
    },
    methods: {
      initPresentation() {

      }
    }
  };
</script>

<style lang="scss" scoped>

.mdev-g-map {
  width: 100%;
  height: 300px;

  @media #{$laptop-only} {
    height: 150px;
  }

  @media #{$tablet-prt-only} {
    max-height: 220px;
  }
}

</style>
