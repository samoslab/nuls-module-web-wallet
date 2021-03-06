import Vue from 'vue'
import Vuex from 'vuex'
import {defaultData,RUN_DEV} from '@/config'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    addressInfo: {},
    urlData: [],
  },
  mutations: {
    setAddressInfo(state, data) {
      state.addressInfo = data
    },
    setUrlData(state, data) {
      state.urlData = data;
      let urlName = RUN_DEV ? 'mainUrlData' :'TestUrlData';
      localStorage.setItem(urlName, JSON.stringify(data));
    },
  },
  getters: {
    getAddressInfo: state => state.addressInfo,

    getUrlData(state) {
      if (state.urlData.length === 0) {
        let urlName = RUN_DEV ? 'mainUrlData' :'TestUrlData';
        state.urlData = localStorage.hasOwnProperty(urlName) ? JSON.parse(localStorage.getItem(urlName)) : defaultData;
        localStorage.setItem(urlName, JSON.stringify(state.urlData));
      }
      return state.urlData
    }
  },
  actions: {}
})
