import Vue from "vue";
import Vuex from "vuex";
import apiData from "../apiData.js"

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,

    state: {
        projects: [],
        project: []
    },

    mutations: {
        SET_PROJECTS(state, payload) {
            state.projects = payload;
        },
        SET_PROJECT(state, payload) {
            state.project = payload;
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
        },
        async GET_PROJECT(context,slug){
            // if (context.state.project.length < 1) {
                return apiData.getProject(slug)
                    .then(project => {
                        context.commit('SET_PROJECT', project)
                    })
                    .catch(error => console.log(error))
            // }
        }
    }


})