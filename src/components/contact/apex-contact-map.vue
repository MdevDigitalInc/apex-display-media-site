<template lang="pug">
.apex-contact-map
  .apex-map-container
    a(href='https://www.google.com/maps/place/499+McGregor+Ave,+London,+ON+N6J+2S8/@42.9577445,-81.2649497,17z/data=!3m1!4b1!4m5!3m4!1s0x882ef182b28f4767:0xe41108b24696d313!8m2!3d42.9577445!4d-81.2627557' title='map' target='_blank')
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
          pinLocation:  {lat: 42.957921, lng: -81.262766},
          mapCenter: {lat: 42.957921, lng: -81.262766},
          mapIcon: require('../../assets/images/map/location-ICON.png'),
          mapStyle: 'terrain',
          zoom: false,
          controls: false,
          kbShortcuts: false,
          scroll: false,
          drag: false,
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
}

</style>