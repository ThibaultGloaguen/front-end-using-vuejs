<template>
  <div id="app">
   <div class="container">
     <div class="row">
       <div class="col-md-3 menu">
         <div class="row">
           <img src="../static/logo_home.png"/>
         </div>
         <MyMenu></MyMenu>
       </div>
       <div class="col-md-9 dashboard">
         <div class="row">
           <StatusBar></StatusBar>
         </div>
         <div class="row">
           <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
           </transition>
         </div>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
import StatusBar from './components/Statusbar/StatusBar'
import MyMenu from './components/Menu/MyMenu'
export default {
  name: 'app',
  components: {
      StatusBar,MyMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu{
  background: #ffffff;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
