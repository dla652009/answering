import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import system from './modules/system';
import questions from './modules/questions';
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    system,
    questions
  },
  getters
});

export default store
