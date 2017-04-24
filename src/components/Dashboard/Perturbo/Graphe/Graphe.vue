<template>
  <div class="graphe">
        <vue-chart
          :columns="columns"
          :rows="rows"
          :options="options">
        </vue-chart>
  </div>
</template>



<script>
  export default {
    name: 'graphe',
    props: {
      data: {},
      timeSpec : Array,
      index: Number
    },
    data: function () {
      return {
        columns: [],
        rows: [],
        options: {
          title: this.data.name,
          hAxis: {
            title: '',
          },
          vAxis: {
          },
          width: 650,
          height: 350,
          curveType: 'function'
        }
      }
    },
    mounted: function () {
        // pour les colones
      for (let i = 0; i < this.timeSpec.length; i++) {
        this.rows[i] = []
        this.rows[i][0] = this.timeSpec[i]
      }

      this.columns[0] = { 'type': 'string', 'label': 'time' }
      for (let i = 0; i < this.data.data.length; i++){
        this.columns[i+1] = {'type': 'number','label': this.data.data[i].name}
      }
        for (let i = 0; i < this.timeSpec.length; i++) {
          for (let y = 0; y < this.data.data.length; y++) {
            this.rows[i][y+1] = parseFloat(this.data.data[y].data[i])
          }
        }
      }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
