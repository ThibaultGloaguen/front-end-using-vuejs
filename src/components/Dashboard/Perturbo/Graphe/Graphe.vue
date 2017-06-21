<template>
  <div class="graphe">
        <vue-chart
          :columns="columns"
          :rows="rows"
          chart-type="LineChart"
          :options="options">
        </vue-chart>
  </div>
</template>



<script>
  import jbinary from 'jbinary'
  export default {
    name: 'graphe',
    props: {
      data: {},
      info : Array,
      donnee : Array,
      timeSpec : Array,
      index: Number,
      type: String,
      isDigit:String,
      date: Array
    },
    computed: {
//      rows: function () {
//        let rows = []
//        for (let i = 0; i < this.timeSpec.length; i++) {
//          rows[i] = []
//          rows[i][0] = parseFloat(this.timeSpec[i])
//        }
//        for (let i = 0; i < this.timeSpec.length; i++) {
//          for (let y = 0; y < this.data.data.length; y++) {
//            rows[i][y+1] = parseFloat(this.data.data[y].data[i])
//          }
//        }
//        if (this.isDigit == "YES"){
//          rows = this.digRow(rows)
//        }
//        return rows
//      },
      rows: function () {
        let rows = []
        for (let i = 0; i < 1000; i++) {
          rows[i] = []
          rows[i][0] = this.date[i]
        }
        for (let i = 0; i < 1000; i++) {
          for (let y = 0; y < this.donnee[i].length; y++) {
            rows[i][y+1] = parseFloat(this.donnee[i][y])
          }
        }
//        if (this.isDigit == "YES"){
//          rows = this.digRow(rows)
//        }
        return rows
      },
//      columns : function () {
//        let columns = []
//        columns[0] = { 'type': 'number', 'label': 'time' }
//        for (let i = 0; i < this.data.data.length; i++){
//          columns[i+1] = {'type': this.type ,'label': this.data.data[i].name}
//        }
//        return columns
//      },
      columns : function () {
        let columns = []
        columns[0] = { 'type': 'number', 'label': 'time' }
        for (let i = 0; i < this.info.length; i++){
          columns[i+1] = {'type': this.type ,'label': this.info[i].ch_id}
        }
        return columns
      },
      options: function(){
        let options = {
          title: "salut",
          hAxis: {

          },
          vAxis: {
            ticks : []
          },
          width: 650,
          height: 350,
        }

//        if (this.isDigit == "YES"){
//          this.digRow(this.rows)
//          for (let v = 0; v < this.data.data.length; v ++){
//            options.vAxis.ticks[v] =  { v: v, f:  this.data.data[v].name}
//          }
//          options.curveType = ''
//        }

        return options
      }
    },
    data: function () {
      return {

      }
    },
    methods:  {
//      normaliseData : function () {
//        for (let i = 0; i < this.timeSpec.length; i++) {
//          this.rows[i] = []
//          this.rows[i][0] = parseFloat(this.timeSpec[i])
//        }
//        this.columns[0] = { 'type': 'number', 'label': 'time' }
//        for (let i = 0; i < this.data.data.length; i++){
//          this.columns[i+1] = {'type': this.type ,'label': this.data.data[i].name}
//        }
//        for (let i = 0; i < this.timeSpec.length; i++) {
//          for (let y = 0; y < this.data.data.length; y++) {
//            this.rows[i][y+1] = parseFloat(this.data.data[y].data[i])
//          }
//        }
//        if (this.isDigit == "YES"){
//          this.digRow(this.rows)
//          for (let v = 0; v < this.data.data.length; v ++){
//            this.options.vAxis.ticks[v] =  { v: v, f:  this.data.data[v].name}
//          }
//          this.options.curveType = ''
//        }
//      },
      digRow : function (rowTab) {

        let newRow = []
        let lengthMax = rowTab.length
        let rowTmp = []
        let index = 0

        for (let i = 0; i < lengthMax; i ++){
            rowTmp[index] = []
            rowTmp[index][0] = rowTab[i][0]
            for(let y = 1; y < rowTab[i].length; y ++){
              rowTmp[index][y] = rowTab[i][y] + y - 1
            }
            if (i + 1 !== rowTab.length)
            {

              newRow = rowTmp[index].slice()
              newRow[0] = rowTab[i+1][0]
              rowTmp.splice(index+1,0,newRow)
              index = index + 2
            }
        }
        return rowTmp
      }
    },
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
