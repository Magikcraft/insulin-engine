import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
constants =
const state = {
	carbosToEat: 0.0,
	insulinToTake: 0.0,
	bloodGlucoseLevel: 0.0,
	bloodInsulinLevel: 0.0,
	typeOneHealth: 0.0
}

const mutations = {
	update(state){
		
	},
	addCarbosToEat(state, carbosGrams){
	},
	addInsulinToTake(state, insulinUnits){

	}
}

// actions are functions that causes side effects and can involve
// asynchronous operations
const actions = {
	update: ({commit}) => commit('update')
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})