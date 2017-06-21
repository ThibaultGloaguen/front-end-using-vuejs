<template>
  <div class="menu">
    <div class="row btnMenu" v-for="button,index in buttonTab">
      <router-link style="text-decoration: none" :to="button.link">
        <button type="button"
           v-bind:style="'background:' + button.myColor"
           class="btn-lg btn-block myBtnClass" @click="activeButton(index)">
              {{button.label}}
          </button>
      </router-link>
    </div>
  </div>
</template>


<script>
  import MyButton from './Button/MyButton'
  export default {
    name: 'Menu',
    data () {
      return {
        buttonTab: [
          {link:'state',label:'ETAT',myColor:'white'},
          {link:'/parameters',label:'PARAMETRES',myColor:'white'},
          {link:'/journal',label:'JOURNAL',myColor:'white'},
          {link:'/version',label:'VERSION',myColor:'white'},
          {link:'/maintenance',label:'MAINTENANCE',myColor:'white'},
          {link:'/download',label:'TELECHARGEMENT',myColor:'white'},
          {link:'/perturbo',label:'PERTURBOGRAPHIE',myColor:'white'},
          {link:'/reboot',label:'REBOOT',myColor:'white'}]
      }
    },
    methods : {
      activeButton : function (value) {
        for(let i = 0; i < this.buttonTab.length; i ++) {
          this.buttonTab[i].myColor = 'white'
        }
        this.buttonTab[value].myColor = '#96c3f1'
      }
    },
    mounted : function () {

    },
    components: {
      MyButton
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .menu{
    background: #ffffff;
  }
  .btnMenu{
    margin-top:3%;
  }
  .myBtnClass{
    color: black;
    border : solid 1px #ffffff;
    font-family: "Times New Roman", Times, serif;
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
