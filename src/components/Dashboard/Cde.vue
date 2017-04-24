<template>
  <div class="cde">
    <h1>{{ msg }}</h1>
  </div>
</template>



<script>
  export default {
    name: 'CDE',
    data () {
      return {
        msg: 'Welcome to CDE'
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }
</style>
