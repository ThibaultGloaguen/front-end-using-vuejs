<template>
  <div class="row tree">
    <div class="col-md-12 folder">
        <div class="col-md-5 famille"
             v-if="parentIndex == null"
             :class="{bold: isFolder}"
             @click="toggle">
          Famille
          {{indexFct}}
        <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
        </div>
        <div class="col-md-5 function"
           v-else-if="isFolder"
           @click="toggle">
        {{model.name}}
        <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
      </div>
      <div class="param"
           v-else
           @click="toggle">
        {{model.name}}
      </div>
      <transition name="fade">
      <div class="function" v-show="open" v-if="isFolder">
        <tree-view
          class="tree-view"
          v-for="(model,index) in model.children"
          :key="model.id"
          :model="model"
          :familyIndex="grandParentIndex"
          :parentIndex="indexFct"
          :indexFct="index">
        </tree-view>
      </div>
      </transition>
    </div>
  </div>
</template>


<script>

  import store from './store/store.js'
  import Vuex from 'vuex'
  export default {
    store: store,
    name: 'TreeView',
    props: {
      model: Object,
      indexFct: Number,
      parentIndex: Number,
      familyIndex: Number,
    },
    data: function () {
      return {
        open: false,
      }
    },
    mounted: function () {
      if (this.familyIndex != null) {
          this.grandParentIndex = this.familyIndex
      }
    },
    computed: {

      grandParentIndex : function () {
        return this.familyIndex
      },
      isFolder: function () {
        return this.model.children &&
          this.model.children.length
      }
    },
    methods: {
      ...Vuex.mapActions([
        'changeParam'
      ]),
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        } else {
          this.changeParam({
            name : this.model.name,
            value : this.model.value,
            indexParam: this.indexFct,
            indexFunction: this.parentIndex,
            indexFamily: this.grandParentIndex
          })
        }
      },
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tree {
    font-family: Menlo, Consolas, monospace;
    color: #444;
    padding-left: 15%;
  }
  .tree-view {
    cursor: pointer;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: none;
  }
  .famille {
    background: ghostwhite;
    margin-top:3%;
    padding : 2%;
    text-align: center;

  }
  .folder {
    text-align: left;
  }
  .function {
    text-align: center;
    padding : 2%;
  }
  .param {
    padding : 2%;
    width : 50%;
    text-align : center;
    margin : 1%;
    border-radius: 5%;
    border: 1px solid lightgrey;
    background: lightgrey;
  }
  .param:hover {
    background: #c9302c;
  }
  .fade-enter-active {
    transition: all .2s ease;
  }
  .fade-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>
