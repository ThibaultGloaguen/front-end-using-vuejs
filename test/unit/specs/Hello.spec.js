import Vue from 'vue'
import Cde from '../../../src/components/Dashboard/Cde.vue'

describe('Cde.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Cde)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.cde h1').textContent)
      .to.equal('Welcome to CDE')
  })
})
