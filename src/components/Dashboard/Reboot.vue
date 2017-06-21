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
  import axios from 'axios'
  export default {
    name: 'CDE',
    data () {
      return {
        msg: 'Are you sure you want to reboot ?',
        retCode : 0
      }
    },
    methods: {
        reboot : function () {
          axios.get('cgi/reboot')
            .then((response) => {
              this.retCode = response
            })
        },
        rootToLast : function () {
          this.$router.push('/dashboard')
          this.$router.go()
        }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
