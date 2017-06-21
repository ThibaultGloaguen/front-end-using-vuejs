<template>
  <div class="col-md-2">
    <button v-bind:style="'background:' + activeColor" class="carte" @click="printInfoCard">{{type}}</button>
  </div>
</template>


<script>
  export default {
    name: 'carte',
    props: {
      type:String,
      index:Number,
      activeColor: String,
    },
    data () {
      return {
      }
    },
    methods: {
        printInfoCard: function () {
          this.$emit('printInfoCard', this.index)

        }
    }
  }
</script>


<style scoped>
  .carte{
    border: solid 1px grey;
    height: 180px;
    width:50px;
    margin-top:10px;
    margin-left:10%;
    background: #ffffff;
  }
  .carte:hover{
    background: lightgrey;
  }
</style>
