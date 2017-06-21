import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {

  currentParam :  {
    name: '',
    value: 0,
    indice : 0,
    indexParam:0,
    indexFunction:0,
    indexFamily:0
  },
  paramTable: {},
}

export const mutations = {
  CHANGE_CURRENT(state, payload) {
    state.currentParam.name = payload.name
    state.currentParam.value = payload.value
    state.currentParam.indice = payload.indice
    state.currentParam.indexParam = payload.indexParam
    state.currentParam.indexFunction = payload.indexFunction
    state.currentParam.indexFamily = payload.indexFamily

  },
  SET_PARAM_TABLE(state, payload) {
    state.paramTable = payload
  },
  UPDATE_PARAM_TABLE(state,payload) {
    state.paramTable[payload.indexFamily]
      .children[payload.indexFunction]
      .children[payload.indexParam].value = payload.value
  }
}


export const getters = {
  currentParam: (state) => state.currentParam,
  paramTable: (state) => state.paramTable
}

export const actions =  {
  changeParam: (store,payload) => {
    store.commit('CHANGE_CURRENT',payload)

  },
  setParamTable: (store,payload) => {
    store.commit('SET_PARAM_TABLE',payload)
  },
  updateTable: (store,payload) => {
    store.commit('UPDATE_PARAM_TABLE',payload)
  }
}

export default new Vuex.Store({
  state:state,
  mutations:mutations,
  getters:getters,
  actions:actions,
})
