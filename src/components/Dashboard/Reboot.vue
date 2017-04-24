<template>
  <div class="reboot">
    <div class="panel panel-default">
      <div class="panel-heading">{{msg}}</div>
        <div class="panel-body">
          <div class="row">
            <div class="col-md-6">
              <button class="btn-success btn-lg btn-block myBtnClass" @click="reboot">YES</button>
            </div>
            <div class="col-md-6">
              <button class="btn-danger btn-lg btn-block" @click="rootToLast">NO</button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>



<script>
  export default {
    name: 'CDE',
    data () {
      return {
        msg: 'Are you sure you want to reboot ?'
      }
    },
    methods: {
        reboot : function () {
          //post method to reboot
        },
        rootToLast : function () {

        }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
