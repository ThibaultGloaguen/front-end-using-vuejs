import Vue from 'vue'
import Journal from '../../../src/components/Dashboard/Journal/Journal.vue'
import axios from 'axios'
var MockAdapter = require('axios-mock-adapter');


let buttonTabTest = [
  {get:'format_json_cde.json',label:'CDE',myColor:'#96c3f1'},
  {get:'format_json_maintenance.json',label:'maintenance',myColor:'white'},
  {get:'format_json_systeme.json',label:'systeme',myColor:'white'},
  {get:'format_json_securite.json',label:'securite',myColor:'white'},
]


var journal = [

  {"date":"04/04/2017 13:36:13","milli":"68","lib_cour_tranche":"TR.L1","lib_long_info":"POS.DJ","complementaire":"OUV"},
  {"date":"04/04/2017 13:36:13","milli":"68","lib_cour_tranche":"TR.L1","lib_long_info":"POS.DJ","complementaire":"OUV"},
  {"date":"04/04/2017 13:36:13","milli":"68","lib_cour_tranche":"TR.L1","lib_long_info":"POS.DJ","complementaire":"OUV"},
  {"date":"04/04/2017 13:36:13","milli":"68","lib_cour_tranche":"TR.L1","lib_long_info":"POS.DJ","complementaire":"OUV"},
  {"date":"04/04/2017 13:36:13","milli":"68","lib_cour_tranche":"TR.L1","lib_long_info":"POS.DJ","complementaire":"OUV"}
]

let mock = new Array(buttonTabTest.length)

for (let i = 0 ; i < buttonTabTest.length; i ++){
  mock[i] = new MockAdapter(axios);
  mock[i].onGet('/static/cgi/' + buttonTabTest[i].get).reply(200, {
    Journal: [
      {
        journal
      }
    ]
  });
}


describe('Journal.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Journal)
    const vm = new Constructor().$mount()

    expect(vm.journal).to.be.a('array')
    expect(vm.buttonTab).to.be.a('array')
    expect(vm.indexCourant).to.be.a('number')
    expect(vm.msg).to.equal('hello journal')

    for (let i = 0 ; i < buttonTabTest.length ; i ++) {
      expect(vm.buttonTab[i].get).to.equal(buttonTabTest[i].get)
      expect(vm.buttonTab[i].label).to.equal(buttonTabTest[i].label)
      expect(vm.buttonTab[i].myColor).to.equal(buttonTabTest[i].myColor)
      vm.activeButton(i)
      expect(vm.indexCourant).to.equal(i)
      expect(vm.buttonTab[i].myColor).to.equal('#96c3f1')
    }



  })
})

