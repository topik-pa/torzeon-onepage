import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/data/data.js'
Vue.use(Vuex)

/*
const state = {
  name: 'Pippo',
  count: 0,
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false }
  ]
}
*/

/*
const mutations = {
  increment (state, n) {
    state.count += n
  }
}
*/

/*
const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  },
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
*/

const state = {
  data
}
const mutations = {
}
const getters = {
  getDefaultTour: (state) => {
    return state.data.tours.find(tour => tour.default === true)
  },
  getProjectName: (state) => {
    return state.data.project
  },
  getPromocode: (state) => {
    return state.data.promocode
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
