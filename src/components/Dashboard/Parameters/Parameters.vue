<template>
  <div class="parameter">
    <div class="col-md-6">
        <tree-view
          class="tree-view"
          :model="famille" :familyIndex="index" :indexFct="index" v-for="(famille,index) in paramTable" :key="famille.id">
        </tree-view>
    </div>
      <div class="col-md-6">

        <form-input></form-input>
      </div>
    </div>
</template>



<script>
  import store from './store/store.js'
  import Vuex from 'vuex'
  import axios from 'axios'
  import TreeView from './TreeView.vue'
  import FormInput from './FormInput.vue'
  export default {
    name: 'parameter',
    store : store,
    computed: {
      ...Vuex.mapGetters([
          'paramTable'
      ])
    },
    methods: {
      ...Vuex.mapActions([
          'setParamTable'
      ])
    },
    data () {
      return {
      }
    },
    mounted: function () {
      axios.get('./static/cgi/format_params.json')
        .then((response) => {
          this.setParamTable(response.data.treeData)
        })
    },
    components: {
        'tree-view':TreeView,
        'form-input':FormInput
    }
  }
</script>


<style scoped>
  .parameter{
    background: #4cae4c;
  }

</style>
