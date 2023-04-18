<template>
  <section class="choose-us section-padding pt-0 style-1 "
 data-scroll-index="6"
  >
    <div ref="map" style="height: 600px; width: 90%; margin-left: 5%;"></div>
  </section>
  </template>
  
  <script>
  
  export default {
    name: 'MapComponent',
    data() {
      return {
        map: null,
        marker: null,
        directionsRenderer: null
      }
    },
    mounted() {
      
      // Load the Google Maps JavaScript API script
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDRWy9GOXpIZErdmQ9n4vQJ0A8yQaLuDjE`
      script.defer = true
      script.async = true
      script.onload = () => this.initMap()
      document.head.appendChild(script)
    },
    methods: {
      initMap() {
        // Create a new map object centered on your desired location
        this.map = new google.maps.Map(this.$refs.map, {
          center: {lat: 23.042397475448734, lng: 120.13923326756337},
          zoom: 10
        })
  
        // Add a red pin to the map at your current location
        this.marker = new google.maps.Marker({
          position: {lat: 23.0420442725, lng: 120.13880389071316},
          map: this.map,
          icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
        })
      }
    }
  }
  </script>
  <style scoped>

</style>
  