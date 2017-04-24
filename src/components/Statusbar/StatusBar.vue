<template>
  <div class="status">
    <div class="col-md-12 status ">
      <div class="row">
           <div class="col-md-3">
             <p>Type : {{table.type_ied}}</p>
           </div>
           <div class="col-md-3">
             <p>Timezone : {{table.timezone}}</p>
           </div>
           <div class="col-md-3">
             <p>Configuration : {{table.nom_conf}}</p>
           </div>
           <div class="col-md-3">
             <p>Ocurrence : {{table.occurrence_ied}}</p>
           </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>Version : {{table.version_conf}}</p>
        </div>
        <div class="col-md-6">
          <p>Date : {{table.dateheure}}</p>
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
        table: []
      }
    },
    mounted: function () {
      axios.get('./static/cgi/get_ied_state.json')
        .then((response) => {
          this.table = response.data;
        }).then((error) => {

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
