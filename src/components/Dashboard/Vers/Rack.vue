<template>
  <div class="row">
    <div class="col-md-12 rack" >
      <div class="row">
        <div class="col-md-2" style="float: right">
          <h4>{{rack.rackID}}</h4>
        </div>
      </div>
      <div class="row" style="margin-bottom: 4%">
        <card v-for="carte,index in rack.cartes"
              :key="carte.id"
              :index="index"
              :type="carte.typecarte"
              :activeColor="backTab[index]"
              v-on:printInfoCard="displayInfo">
        </card>
      </div>  
      <div class="row"></div>
      <transition name="slide-fade" mode="in-out">
        <div v-show="show" class="row infoCarte">
          <div class="ul col-md-6 logiciel" @click="derouleMenuLogiciel">
          <h3>Logiciel</h3>
              <div class="li" v-for="info in rack.cartes[indexCourant].logiciels">
                <div class="li" style="">label : {{info.label}}</div>
                <div class="li">idogis : {{info.idogis}}</div>
                <div class="li">version : {{info.version}}</div>
                <div class="li">revision : {{info.revision}}</div>
            </div>
          </div>
            <div class="ul col-md-6 materiel" @click="derouleMenuMateriel">
            <h3>Materiel</h3>
              <div class="row" v-for="info in rack.cartes[indexCourant].materiels">
                  <div class="row">label : {{info.label}}</div>
                  <div class="row">idogis : {{info.idogis}}</div>
                  <div class="row">version : {{info.version}}</div>
                  <div class="row">numserie : {{info.numserie}}</div>
              </div>
            </div>
        </div>
      </transition>
    </div>
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
          console.log(this.rack)
          for (let i = 0;i < this.rack.cartes.length ; i ++ ) {
            this.backTab[i] = 'white'
          }
    },
    methods : {
      derouleMenuLogiciel : function () {

      },
      setColorOnClick(index){
        for (let i = 0;i < this.rack.cartes.length ; i ++ ) {
          this.backTab[i] = 'white'
        }
        this.backTab[index] = '#df2c4b'
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


<style scoped>
  .rack{
    margin-top: 5%;
    margin-left:5%;
    background:#f5f5f5;
    border: solid 1px grey;
    height: 100%;
  }
  .materiel{
    cursor: pointer;    
  }
  .materiel:hover{
    background: lightgrey;
  }
  .logiciel{
    cursor: pointer;
  }
  .logiciel:hover{
    background: lightgrey;
  }
  .infoCarte{
    margin-top:10px;
    margin-left:0%;
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
