<template>
  <div class="journal">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-3 btnMenu" v-for="button,index in buttonTab">
          <button type="button"
            v-bind:style="'background:' + button.myColor"
            class="btn-lg btn-block myBtnClass"
            @click="activeButton(index)">
                {{button.label}}
          </button>
        </div>
      </div>
      <transition name="slide-fade" mode="out-in">
      <div class="row" v-if="buttonTab[indexCourant].label != 'systeme' ">
        <div class="panel-body">
          <div class="row">
          <div class="col-md-3">Date</div>
          <div class="col-md-3">Tranche</div>
          <div class="col-md-3">Information</div>
          <div class="col-md-3">Val</div>
          </div>
          <div class="row" v-for="item in journal">
          <div class="col-md-3">{{item.date}},{{item.milli}}</div>
          <div class="col-md-3">{{item.lib_cour_tranche}}</div>
          <div class="col-md-3">{{item.lib_long_info}}</div>
          <div class="col-md-3">{{item.complementaire}}</div>
          </div>
        </div>
      </div>
      <div class="row" v-else>
        <div class="panel-body">
          salut
        </div>
      </div>
      </transition>
    </div>
  </div>
</template>



<script>
  import axios from 'axios'
  export default {
    name: 'journal',
    data () {
      return {
          msg: "hello journal",
          journal: [],
          buttonTab: [
            {get:'format_json_cde.json',label:'CDE',myColor:'white'},
            {get:'format_json_maintenance.json',label:'maintenance',myColor:'white'},
            {get:'format_json_systeme.json',label:'systeme',myColor:'white'},
            {get:'format_json_securite.json',label:'securite',myColor:'white'},
          ],
        indexCourant : 0
      }
    },
    methods : {
      activeButton : function (value) {
        this.indexCourant = value
        for(let i = 0; i < this.buttonTab.length; i ++) {
          this.buttonTab[i].myColor = 'white'
        }
        this.buttonTab[value].myColor = '#96c3f1'

        axios.get('./static/cgi/' + this.buttonTab[value].get)
          .then((response) => {
            this.journal = response.data.Journal;
          })
      }
    },
    mounted: function () {
      this.buttonTab[0].myColor = '#96c3f1'
      axios.get('./static/cgi/format_json_cde.json')
        .then((response) => {
          this.journal = response.data.Journal;
        })
    },
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
