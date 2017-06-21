<template>
  <div class="dashboard">
    <h1>{{ msg }}</h1>
  </div>
</template>



<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Dashboard'
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    color : #312780;
    font-family: "Times New Roman", Times, serif;
  }
  .dashboard{
    background: #d30d3a;
  }
</style>
