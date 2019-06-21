<template lang="pug">
.apex-contact-map
  .apex-map-container
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
          //pinLocation:  {lat: 42.991934, lng: -81.213673},
          //mapCenter: {lat: 42.992844, lng: -81.211459},
          mapIcon: require('../../assets/images/map/location-ICON.png'),
          mapStyle: 'terrain',
          zoom: false,
          controls: false,
          kbShortcuts: false,
          scroll: false,
          drag: false,
          zoomLevel: 17.2
        }
      };
    },
    components: {
      'google-map' : googleMap
    },
    methods: {
      initPresentation() {
        //alert('map is loaded..');
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