<template>
  <transition
    name="slide-fade"
    mode="in-out">
  <div class="formInput" v-if="currentParam.name != ''">
    <div class="panel panel-default">
      <div class="panel-heading">{{currentParam.name}}</div>
      <div class="panel-body">
        <div class="row">Valeur: <span>{{currentParam.value}}</span></div>
        <input type="text" v-model="currentParam.value" placeholder="Nouvelle valeur">
        <button class="btn btn-primary" @click="changeParam(currentParam),updateTable(currentParam),postData(currentParam)">Modifier</button>
    </div>
    </div>
  </div>
  </transition>
</template>


<script>
  import store from './store/store.js'
  import Vuex from 'vuex'
  import axios from 'axios'
  export default {
    store: store,
    name: 'FormInput',
    data () {
      return {
      }
    },
    computed: {
      ...Vuex.mapGetters([
          'currentParam'
      ])
    },
    methods : {
      ...Vuex.mapActions([
        'changeParam',
        'updateTable'
      ]),
      postData : function (currentParam) {
        axios.get('cgi/params/' + currentParam.indice + '/' + currentParam.value) 
        .then(function (response) {
          console.log(response);
        })
      }
    }
  }
</script>
