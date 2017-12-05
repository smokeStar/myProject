import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
Vue.use(Vuex);
const state = {
  name   :'wenjian',
  sex    :'boy',
  age    :'22',
  arr    :[{test:1},{zese:2},{jaja:33}],
  isLogin:sessionStorage.getItem('login'),
  results:[]
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
  })
