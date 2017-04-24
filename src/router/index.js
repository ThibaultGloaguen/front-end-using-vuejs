import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',

  routes: [
    {
      path: '/',
      name: 'index',
      component: require('../components/Dashboard/Dashboard.vue')
    },
    {
      path: '/state',
      name: 'state',
      component: require('../components/Dashboard/State.vue')
    },
    {
      path: '/parameters',
      name: 'parameters',
      component: require('../components/Dashboard/Parameters/Parameters.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: require('../components/Dashboard/jmxDl.vue')
    },
    {
      path: '/journal',
      name: 'journal',
      components: {
        default : require('../components/Dashboard/Journal/Journal.vue'),
      }
    },
    {
      path: '/version',
      name: 'version',
      component: require('../components/Dashboard/Vers/Vers.vue')
    },
    {
      path: '/perturbo',
      name: 'perturbo',
      component: require('../components/Dashboard/Perturbo/Perturbo.vue')
    },
    {
      path: '/reboot',
      name: 'reboot',
      component: require('../components/Dashboard/Reboot.vue')
    },
  ]
})
