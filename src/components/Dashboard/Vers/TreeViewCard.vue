<template>
  <div class="row tree">
    <div class="col-md-12 folder">
      <div class="col-md-5 famille"
           v-if="isFolder"
           :class="{bold: isFolder}"
           @click="toggle">
        {{model.type}}
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
      </div>
      <div  class="function"
            v-else
            @click="toggle">
        label : {{model.label}}<br>
        version {{model.version}}<br>
        <span v-if="isLogiciel"> revision : {{model.revision}}</span>
        <span v-else> Num série : {{model.numserie}}</span>
      </div>
      <transition name="fade">
        <div class="function" v-show="open" v-if="isFolder">
          <tree-view-card
            class="tree-view"
            v-for="model in model.children"
            :key="model.id"
            :type="type"
            :model="model">
          </tree-view-card>
        </div>
      </transition>
    </div>
  </div>
</template>


<script>

  export default {
    name: 'TreeViewCard',
    props: {
      model: Object,
      type : String,
    },
    data: function () {
      return {
        open: false,
      }
    },
    computed: {
      isFolder: function () {
        return this.model.children &&
          this.model.children.length
      },
      isLogiciel: function () {
          if (this.type === "Logiciels") {
              return true
          } else {
              return false
          }
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
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
