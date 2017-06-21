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
        errorFromServer : 0
      }
    },
    mounted: function () {
        axios.get('cgi/etat_es')
          .then((response) => {
            this.table = response.data.etat_es;
            console.log(this.table)
          }).then((error) => {
          this.errorFromServer = error
          console.log(this.errorFromServer)
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
