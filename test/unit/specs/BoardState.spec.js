import Vue from 'vue'
var Board = require ('../../../src/components/Dashboard/BoardState/BoardState.vue')



describe('BoardState.vue', () => {
  it('should render correct contents', () => {
      const vm = new Vue({
        template : '<div class="test"> <board-state :tableParent="tableTest"></board-state> </div>',
        data : {
          tableTest: {
            "type": "I32",
            "occ": "1",
            "etat_voies": [0,0,0,0,0,0,0,1,0]
          }
        },
        components : {
          'board-state': Board
        }
      }).$mount()
    const board = vm.$el.querySelector('board-state')

  })
})
