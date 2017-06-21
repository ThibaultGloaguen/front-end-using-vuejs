<template>
  <div class="col-md-12 version">
      <rack v-for="rack in version" :rack="rack" :key="rack.id">
      </rack>
  </div>
</template>



<script>
  import axios from 'axios'
  import Rack from './Rack.vue'
  export default {
    name: 'version',
    data () {
      return {
          version : [],
      }
    },
    mounted: function () {
      axios.get('cgi/versions')
        .then((response) => {
          this.version = response.data.versions
          console.log(this.version)
        })
    },
    methods: {
    },
    components: {
        'rack':Rack,
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
