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
      <div class="row" v-if="buttonTab[indexCourant].label != 'securite' ">
        <div class="panel-body">
          <div class="row">
          <div class="col-md-3">Date</div>
          <div class="col-md-3">Tranche</div>
          <div class="col-md-3">Information</div>
          <div class="col-md-3">Val</div>
          </div>
          <div class="row" v-for="item in journal">
          <div class="col-md-3">{{item.date}}</div>
          <div class="col-md-3">{{item.lib_court_tranche}}</div>
          <div class="col-md-3">{{item.lib_long_info}}</div>
          <div class="col-md-3">{{item.complementaire}}</div>
          </div>
        </div>
      </div>
      <div class="row" v-else>
        <div class="panel-body">
          <div class="row">
            <div class="col-md-3">Date</div>
            <div class="col-md-9">Message</div>
          </div>
          <div class="row" v-for="item in journal">
            <div class="col-md-3">{{item.date}}</div>
            <div class="col-md-9">{{item.message}}</div>
          </div>
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
            {get:'cde',label:'CDE',myColor:'#96c3f1'},
            {get:'maint',label:'maintenance',myColor:'white'},
            {get:'sys',label:'systeme',myColor:'white'},
            {get:'secu',label:'securite',myColor:'white'},
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

        axios.get('cgi/' + this.buttonTab[value].get)
          .then((response) => {
            this.journal = response.data.journal
            console.log(response.data)
          })
      }
    },
    mounted: function () {
      axios.get('cgi/cde')
        .then((response) => {
          this.journal = response.data.journal
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
