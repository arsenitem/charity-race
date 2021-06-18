import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

export default new Vuex.Store({
    store: {
        users: []
    },

    getters: {
        users: state => state.users
    },

    mutations: {
        setUsers: (state, users) => {
            Vue.set(state, 'users', users)
        },
        addUser: (state, newUser) => {
            let current = state.users;
            current.push(newUser);
            Vue.set(state, 'users', current);
        },
    },

    actions: {
        async getUsers(ctx) {
            let data = require('../assets/users.json')
            ctx.commit('setUsers', data.users)
        }
    }
})