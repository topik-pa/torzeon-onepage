import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/data/data.js'
Vue.use(Vuex)

const state = {
  data
}
const mutations = {}

const getters = {
  getDefaultTour: (state) => {
    return state.data.tours.find(tour => tour.default === true)
  },
  getProjectName: (state) => {
    return state.data.project
  },
  getPromocode: (state) => {
    let defaultTour = state.data.tours.find(tour => tour.default === true)
    return defaultTour.promocode
  },
  getShopName: (state) => {
    let defaultTour = state.data.tours.find(tour => tour.default === true)
    return Object.values(defaultTour.stops).find(stop => stop['type'] === 'private').name
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
