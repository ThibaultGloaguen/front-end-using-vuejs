<template>
  <div class="download">
    <div class="col-md-12">
      <a class="btn-primary btn-lg" href="/static/cgi/jmx_file.tar">TELECHARGER</a>
    </div>
  </div>
</template>



<script>
  import axios from 'axios'
  export default {
    name: 'jmxDl',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.download{
  margin-top : 10%;
}
</style>
