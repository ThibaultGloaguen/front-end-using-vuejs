import Vue from 'vue'
import Param from '../../../src/components/Dashboard/Parameters/Parameters.vue'
import axios from 'axios'
import store from '../../../src/components/Dashboard/Parameters/store/store'
var MockAdapter = require('axios-mock-adapter');


let treeData =
  [{
  name : "Famille Tous",
  children:[
    {
      name: "Fonction Tous",
      children:[
        {
          name: "COMPADA1/ui16_choix_ada",
          "value": 1
        }
        ,{
          name: "COMPADA1/ui16_choixtranche_t11",
          "value": 2
        }
        , {
          name: "COMPADA1/ui16_choixtranche_t12",
          "value": 2,
        }
      ]
    }
  ]
  }]

let currentParam =
  {
  name: '',
  value: 0,
  indexParam:0,
  indexFunction:0,
  indexFamily:0
}

let mock =  new MockAdapter(axios);

  mock.onGet('./static/cgi/format_params.json' ).reply(200, {
    treeData: [
      {
        treeData
      }
    ]
  })


describe('store test suite', () => {
  it('is configured correctly', () => {
    expect(true).to.equal(true);
  });
  it('has a valid store object', () => {
    expect(store.state.currentParam).to.be.an('object');
    expect(store.state.paramTable).to.be.an('object');

    store.actions.setParamTable(treeData)
    store.state.paramTable.should.equal(treeData)
  });

});


describe('Parameters.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Param)
    const vm = new Constructor().$mount()


  })
})

