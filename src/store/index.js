import Vue from "vue";
import Vuex from "vuex";
import api from "../apiData.js"

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,

    state: {
        projects: []
    },

    mutations: {
        SET_PROJECTS(state, payload) {
            state.projects = payload;
        }
    },

    actions: {
        GET_PROJECTS(context){
            return api.getProjects()
                .then(projects => {
                    context.commit('SET_PROJECTS', projects)
                })
                .catch(error => console.log(error))
        }
    }


})