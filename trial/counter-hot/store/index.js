import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js'
import * as actions from './actions.js'
import * as mutations from './mutations.js'

// 安装 Vue.js 插件
Vue.use(Vuex)

const state = {
	count: 0,
	history: []
}

const store = new Vuex.store({
	state,
	getters,
	actions,
	mutations
})

// 热重载
if (module.hot) {
	module.hot.accept([
		'./getters.js',
		'./actions.js',
		'.mutations.js'
	], () => {
		store.hotUpdate({
			getters: require('./getters.js'),
			actions: require('./actions.js'),
			mutations: require('./mutations.js')
		})
	})
}

export default store
