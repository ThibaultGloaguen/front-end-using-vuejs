<template>
  <div class="perturbo">
    <div class="col-md-3 btnMenu">
      <button v-for="item,index in perturboButtonData.button_list" type="button"
              v-bind:style="'background:white'"
              class="btn-lg btn-block myBtnClass"
              @click="activeButton(index)">
        {{item.label}}
      </button>
    </div>
    <div class="col-md-9">
      <div class="row">
        <graphe
          v-for="ana,index in perturboData.ANA"
          :key="ana.id"
          :data="ana"
          :index="index"
          type="number"
          :timeSpec="perturboData.liste_dates">
        </graphe>
      </div>
      <div class="row">
        <graphe
          v-for="dig,index in perturboData.DIG"
          :key="dig.id"
          :index="index"
          :data="dig"
          type="number"
          isDigit="YES"
          :timeSpec="perturboData.liste_dates">
        </graphe>
      </div>
    </div>
  </div>
</template>



<script>
  import axios from 'axios'
  import Graphe from './Graphe/Graphe.vue'
  export default {
    name: 'perturbo',
    components : {
      'graphe' : Graphe
    },
    data: function () {
      return {
        isActivated: false,
        perturboData: {},
        perturboButtonData: {}
      }
    },
    methods: {
      activeButton : function (index) {
          console.log(this.perturboButtonData)
        axios.get('./static/cgi/' + this.perturboButtonData.button_list[index].link)
          .then((response) => {
            this.perturboData = response.data;
            this.isActivated = true

          })
      }
    },
    mounted : function () {
      axios.get('./static/cgi/format_json_perturbo.json')
        .then((response) => {
          this.perturboButtonData = response.data;
        })
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myBtnClass{
    color: black;
    border : solid 1px lightgrey;
  }
  .myBtnClass:hover{
    color: black;
    text-decoration: none;
    border : solid 1px #96c3f1;
  }
  .myBtnClass:focus{
    color:black;
  }
  .myBtnClass:active{
    color:black;
    background :red;
  }
</style>
