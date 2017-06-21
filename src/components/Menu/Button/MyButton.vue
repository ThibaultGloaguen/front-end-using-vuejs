<template>
  <div class="col-md-12">
    <div ref="myButton" @click="activeButton" class="col-md-12 button">
          {{MyMessage}}
    </div>
  </div>

</template>



<script>
  export default {
    name: 'MyButton',
    props: {
        MyMessage:String,
    },
    methods : {
        activeButton : function (el) {
            //this.$refs.myButton.style.background = "#d30d3a"
        }
    }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button{
  color: black;
  width: 40%;
  padding:10px;
  margin: 5px;
  cursor:pointer;
  text-align: left;
  -webkit-transition: width 2s; /* For Safari 3.1 to 6.0 */
  transition: width 0.5s ease;
}
.button:hover {
  width: 90%;
  background: #d30d3a;
  color: #ffffff;
}
.button:active {
  width: 90%;
  background: #d30d3a;
  color: black;
}
</style>
