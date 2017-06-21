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
    <div class="col-md-9" v-if="loading">
      <div class="loader"></div>
    </div>
    <div class="col-md-9" v-if="isActivated">
      <div class="row csv">
        <a class="btn-primary btn-lg" :href="csvPath">TELECHARGER CSV</a>
      </div>
      <!--<div class="row">-->
        <!--<graphe-->
          <!--:info="tabcfgAnaInfo"-->
          <!--:donnee="googleChartTab"-->
          <!--:date="parsedDate"-->
          <!--:index="0"-->
          <!--type="number"-->
          <!--:timeSpec="perturboData.liste_dates">-->
        <!--</graphe>-->
      <!--</div>-->
      <!--<div class="row">-->
        <!--<graphe-->
          <!--v-for="dig,index in perturboData.DIG"-->
          <!--:key="dig.id"-->
          <!--:index="index"-->
          <!--:data="dig"-->
          <!--type="number"-->
          <!--isDigit="YES"-->
          <!--:timeSpec="perturboData.liste_dates">-->
        <!--</graphe>-->
      <!--</div>-->
    </div>
  </div>
</template>



<script>
  import axios from 'axios'
  import Graphe from './Graphe/Graphe.vue'
  import jbinary from 'jbinary'
  export default {
    name: 'perturbo',
    components : {
      'graphe' : Graphe
    },
    data: function () {
      return {
        isActivated: false,
        perturboData: {},
        perturboButtonData: {},
        csvPath : '',
        loading : false,
        perturboConfigFile : [],


        nbVoixAna : 0,
        nbVoixDigit : 0,
        tabcfgAnaInfo : [],
        tabcfgDigitInfo : [],
        nbEchantillon : 0,
        dataFromDatFile : {},
        dataview : {},
        googleChartTab: [],
        parsedDate : [],
        tabForGraphe : [],
        parsedDataForGraphe :
          {
            name : '',
            data : []
          }

      }
    },
    methods: {
      activeButton : function (index) {
//          this.loading = true
//          this.isActivated = false
//        axios.get('./static/cgi/' + this.perturboButtonData.button_list[index].link)
//          .then((response) => {
//            this.perturboData = response.data;
//            this.isActivated = true
//            this.csvPath = this.perturboButtonData.button_list[index].pathCSV
//            this.loading = false
//
//          })
        this.isActivated = true
      },
      getNbVoixFromData : function () {
        let tmp
        //on parse la ligne du nombre de courbe à afficher :
        tmp = this.perturboConfigFile[1].split(',')
        for (let i = 1 ; i < tmp.length; i ++) {
          if (tmp[i].search("A") != -1) {
            this.nbVoixAna = parseInt(tmp[i].replace('A',''))
          }
          else if (tmp[i].search("D") != -1) {
            this.nbVoixDigit = parseInt(tmp[i].replace('D',''))
          }
        }
      },
      parseVoixAna : function (line) {
        let tmp = line.split(',')
        let obj = {}
        obj.An = parseInt(tmp[0])
        obj.ch_id = tmp[1]
        obj.unite = tmp[4]
        obj.a = parseFloat(tmp[5])
        obj.b = parseFloat(tmp[6])
        obj.data = []
        return obj
      },
      parseVoixDigit : function (line) {
        let tmp = line.split(',')
        let obj = {}
        obj.An = parseInt(tmp[0])
        obj.ch_id = tmp[1]
        obj.state = tmp[4]
        obj.data = []
        return obj
      },
      getNbEchantillon :function (line) {
        let tmp = line.split(',')
        this.nbEchantillon = parseInt(tmp[1])
      },
      parsePerturboCFGFiles : function () {
        let i
        this.getNbVoixFromData()
        // on commence a 2 car on ignore les deux premieres lignes du document ( le titre et les infos )
        for (i = 2; i < this.nbVoixAna+2; i ++) {
            this.tabcfgAnaInfo[i-2] = this.parseVoixAna(this.perturboConfigFile[i])
        }
        for (i = this.nbVoixAna+2; i < this.nbVoixAna+2+this.nbVoixDigit; i ++) {
          this.tabcfgDigitInfo[i-this.nbVoixAna-2] = this.parseVoixDigit(this.perturboConfigFile[i])
        }
        this.getNbEchantillon(this.perturboConfigFile[i+2])
      },
      parseSingleRecordDAT : function (data) {
        let obj = {}

        obj.id = data.view.getInt32()
        obj.date = data.view.getInt32()
        obj.datas = []
        for ( let i = 0 ; i < this.nbVoixAna ; i++) {
            obj.datas[i] = data.view.getInt16()
        }
        obj.digit = []
        for ( let i = 0 ; i < 2 ; i++) {
          obj.digit[i] = data.view.getInt16()
        }
        return obj.datas
      },
//      formatOneLine : function (index) {
//        let ind = parseInt(index)
//        let data = {
//          name : '',
//          data : []
//        }
//        console.log("index : " + ind)
//        console.log("tab : " + this.tabcfgAnaInfo[ind].ch_id)
//        //data.name = this.tabcfgAnaInfo[ind].ch_id
//        for( let i = 0 ; i < this.nbEchantillon ; i ++){
//          data.data[i] = this.googleChartTab[i][ind]
//        }
//        return data
//      },
      getParsedDate : function () {
        for(let i = 0 ; i < this.nbEchantillon; i ++){
          this.parsedDate[i] = i
        }
      },
      parsePeturboDATFiles : function () {

        for(let i = 0 ; i < this.nbEchantillon ; i++){
          this.googleChartTab[i] = this.parseSingleRecordDAT(this.dataview)
          for (let y = 0; y < this.nbVoixAna ; y ++) {
              this.googleChartTab[i][y] = this.tabcfgAnaInfo[y].a * this.googleChartTab[i][y] + this.tabcfgAnaInfo[y].b

          }
        }
//        for (let y = 0; y < 1 ; y ++) {
//          this.parsedDataForGraphe.data[y] = this.formatOneLine(y)
//        }
        this.getParsedDate()

//        this.tabForGraphe[0] = this.parsedDataForGraphe

      },

    },
    mounted : function () {
      axios.get('cgi/lst_epg')
        .then((response) => {
          this.perturboButtonData = response.data
        })
//
//      //voir quand et ou on get les deux files
//      axios.get('./static/test.cfg')
//        .then((response) => {
//          this.perturboConfigFile = response.data.split("\r")
//          this.parsePerturboCFGFiles()
//        })
//
//      jbinary.load('./static/test.dat')
//        .then((data) => {
//          this.dataview = data
//          this.parsePeturboDATFiles()
//        })


    }
  }
</script>



<style scoped>
  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    margin-left :40%;
    margin-top :40%;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .csv{
    height: 50px;
  }
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
