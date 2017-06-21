<template>
  <div class="status">
    <div class="col-md-12 status ">
      <div class="row">
           <div class="col-md-3">
             <p>name : {{table.ied_state.ied_name}}</p>
           </div>
           <div class="col-md-3">
             <p>Timezone : {{table.ied_state.timezone}}</p>
           </div>
           <div class="col-md-3">
             <p>Configuration : {{table.ied_state.nom_conf}}</p>
           </div>
           <div class="col-md-3">
             <p>lib_long_tranche : {{table.ied_state.lib_long_tranche}}</p>
           </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>Version : {{table.ied_state.version_conf}}</p>
        </div>
        <div class="col-md-6">
          <p>Date : {{table.ied_state.dateheure}}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  import axios from 'axios'
  export default {
    name: 'StatusBar',
    data () {
      return {
        table: {},
        errorFromServer : 0
      }
    },
    mounted: function () {
      axios.get('cgi/ied_state')
        .then((response) => {
          this.table = response.data;
        }).then((error) => {
          this.errorFromServer = error
      })
    },
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
  .status{
    background: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom:5%;
  }
</style>
