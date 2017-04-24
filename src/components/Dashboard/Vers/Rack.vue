<template>
  <div class="row">
    <div class="col-md-12 rack" >
      <div class="row">
        <div class="col-md-2" style="float: right">
          <h4>{{rack.rackID}}</h4>
        </div>
      </div>
      <div class="row">
        <card v-for="carte,index in rack.cartes"
              :key="carte.id"
              :index="index"
              :type="carte.typecarte"
              :activeColor="backTab[index]"
              v-on:printInfoCard="displayInfo">
        </card>
      </div>
    </div>
    <transition name="slide-fade" mode="in-out">
      <div v-show="show" class="col-md-6 infoCarte">
        <tree-view-card
          :model="data" :type="data.type" v-for="(data,index) in rack.cartes[indexCourant].treeData" :key="data.id">
        </tree-view-card>
      </div>
    </transition>
  </div>



</template>



<script>
  import Card from './Card.vue'
  import TreeView from './TreeViewCard.vue'
  export default {
    name: 'Rack',

    props : {
      rack : {}
    },
    data () {
      return {
        indexCourant:0,
        show: false,
        backTab: []
      }
    },
    mounted: function () {
          for (let i = 0;i < this.rack.cartes.length ; i ++ ) {
            this.backTab[i] = 'white'
          }
    },
    methods : {
      setColorOnClick(index){
        for (let i = 0;i < this.rack.cartes.length ; i ++ ) {
          this.backTab[i] = 'white'
        }
        this.backTab[index] = 'red'
      },
      displayInfo : function (value) {
        this.indexCourant = value
        this.show = true
        this.setColorOnClick(value)
      }
    },
    components: {
      'card':Card,'tree-view-card':TreeView
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .rack{
    margin-top: 5%;
    margin-left:5%;
    background:#f5f5f5;
    border: solid 1px grey;
    height: 270px;
  }
  .infoCarte{
    margin-top:10px;
    margin-left:20%;
    border: ridge 1px grey;
  }
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
