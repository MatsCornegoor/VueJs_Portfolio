import Vue from "vue";
import Vuex from "vuex";
import apiData from "../apiData.js"

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
        async GET_PROJECTS(context){
            if (context.state.projects.length < 1) {
                return apiData.getProjects()
                    .then(projects => {
                        context.commit('SET_PROJECTS', projects)
                    })
                    .catch(error => console.log(error))
            }
        }
    }


})