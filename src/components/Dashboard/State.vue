<template>
  <div class="col-md-12">
  <div class="state">
    <div v-for="item in table">
      <board-state :tableParent="item" ></board-state>
    </div>
  </div>
  </div>
</template>



<script>
  import axios from 'axios'
  import BoardState from './BoardState/BoardState'
  export default {
    name: 'State',
    data () {
      return {
        table : [],
      }
    },
    mounted: function () {
        axios.get('./static/cgi/es_states.json')
          .then((response) => {
            this.table = response.data.etat_es;
         })

    },
    components : {'board-state':BoardState},
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .state{
  }
</style>
