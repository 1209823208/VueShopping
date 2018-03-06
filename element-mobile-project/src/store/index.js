import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  latitude: '', // 当前位置纬度
  longitude: '', // 当前位置经度
  geohash: '31.22299,121.36025',//地址geohash值
};


export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
