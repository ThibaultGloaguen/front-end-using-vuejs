<template>
  <div class="col-md-6">
    <div class="panel panel-default">
      <div class="panel-heading">{{tableParent.type}} | {{tableParent.occ}}</div>
      <div class="panel-body">
        <div v-if="tableParent.type == 'MTF' ">
          <div class="row">
            <div class="col-md-4">Sortie</div>
            <div class="col-md-4">Mesure</div>
            <div class="col-md-4">Fréquence</div>
          </div>
          <div class="row" style="border:solid 1px lightgrey;" v-for="element1,counter in tableParent.mesure" >
            <div class="col-md-4" style="border-right:solid 1px lightgrey;">{{++counter}}</div>
            <div class="col-md-4" style="border-right:solid 1px lightgrey;">{{element1}}</div>
            <div class="col-md-4" >{{tableParent.frequence[--counter]}}</div>
          </div>
        </div>
        <div v-else>
          <div class="row">
            <div class="col-md-6">Sortie</div>
            <div class="col-md-6">Etat</div>
          </div>
          <div class="row" style="border:solid 1px lightgrey;" v-for="element,counter in tableParent.etat_voies">
            <div class="col-md-6" style="border-right:solid 1px lightgrey;">{{++counter}}</div>
            <div class="col-md-3"  v-if="element" style="background: green" ref=etat  >{{element}}</div>
            <div class="col-md-3" v-else style="background: red"  ref=etat  >{{element}}</div>

            <div class="col-md-3"  >
              <button  
              ref=button 
              @click="forceState(element,counter-1,tableParent.type,tableParent.occ)" 
              style="background: white"
              :disabled="disableButton[counter-1]"
              :id="'myId' + counter">
                FORCE
              </button>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
  import axios from 'axios' 
  export default {
    name: 'BoardState',
    props : {
        tableParent : Object,
    },
    data () {
      return {
        counter: 0,
        disableButton : []
      }
    },
    methods : {
      forceState : function(element,counter,typeCarte,typeOcc) {
        let value
        if (element == 0){
          value = "1"
          this.$refs.etat[counter].textContent = value
          this.$refs.etat[counter].style = "background: yellow"
        } else {
          value = "0"
          this.$refs.etat[counter].textContent = value
          this.$refs.etat[counter].style = "background: yellow"
        }
        this.$refs.button[counter].style = "background: grey"
        this.$set(this.disableButton, counter, true);
        axios.get('cgi/etat_es/' + typeCarte + '/' + typeOcc + '/' + counter + '/' + value)
          .then((response) => {
          }).then((error) => {
        })
        
      }
    },
    mounted: function () {
      for(let i = 0 ; i <= 32; i ++){
        this.disableButton[i] = false
      }
    },
  }
</script>
