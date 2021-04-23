export const state = () => ({
    pengajuan: [],
    data: [],
    status: [],
    history: [],
    subordinate: [],
    errors: [],
    kodeRKAT: [],
    approve: null,
    decline: null,
    ikuParent: null,
    ikuChild1: null,
    ikuChild2: null

})

export const mutations = {
    SET_PENGAJUAN_DATA(state, payload) {
        state.pengajuan = payload
    },

    SET_DATA(state, payload) {
        state.data = payload
    },

    SET_STATUS(state, payload) {
        state.status = payload
    },

    SET_APPROVE(state, payload) {
        state.approve = payload
    },

    SET_DECLINE(state, payload) {
        state.decline = payload
    },

    SET_HISTORY(state, payload) {
        state.history = payload
    },

    SET_SUBORDINATE(state, payload) {
        state.subordinate = payload
    },

    SET_ERRORS(state, payload) {
        state.errors = payload
    },

    SET_KODE_RKAT(state, payload) {
        state.kodeRKAT = payload
    },

    SET_IKU_PARENT(state, payload) {
        state.ikuParent = payload
    },

    SET_IKU_CHILD1(state, payload) {
        state.ikuChild1 = payload
    },

    SET_IKU_CHILD2(state, payload) {
        state.ikuChild2 = payload
    },
}

export const actions = {
    getpengajuan({ commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/pengajuan/byUser/${payload}`).then((response) => {
                commit('SET_PENGAJUAN_DATA', response.data.data.data)
                resolve()
            })
        })
    },
    getpengajuanID({ commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/pengajuan/${payload}`).then((response) => {
                commit('SET_DATA', response.data.data)
                commit('SET_STATUS', response.data.status)
                commit('SET_HISTORY', response.data.history.data)
                resolve()
            })
        })
    },
    storepengajuan({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/pengajuan/', payload).then((response) => {
                dispatch('getpengajuan')
                resolve()
            })
                .catch((e) => {
                    commit('SET_ERRORS', e.response.data)
                })
        })
    },
    updatepengajuan({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.put(`/pengajuan/${payload.id}`, payload).then((response) => {
                dispatch('getpengajuan')
                resolve()
            })
                .catch((e) => {
                    commit('SET_ERRORS', e.response.data)
                })
        })
    },
    deletepengajuan({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/pengajuan/${payload}`).then((response) => {
                dispatch('getpengajuan')
                resolve()
            })
                .catch((e) => {
                    commit('SET_ERRORS', e.response.data)
                })
        })
    },
    getstatus({ commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/pengajuan/status/${payload}`).then((response) => {
                commit('SET_STATUS', response.data.data)
                resolve()
            })
        })
    },
    approved({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post(`/pengajuan/approve/${payload.id}`, payload).then((response) => {
                dispatch('getpengajuan')
                resolve()
            }).catch((e) => {
                commit('SET_ERRORS', e.response.data)
            })
        })
    },
    declined({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post(`/pengajuan/decline/${payload.id}`, payload).then((response) => {
                dispatch('getpengajuan')
                resolve()
            }).catch((e) => {
                commit('SET_ERRORS', e.response.data)
            })
        })
    },
    gethistory({ commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/pengajuan/history/${payload}`).then((response) => {
                commit('SET_HISTORY', response.data.data)
                resolve()
            })
        })
    },
    getsubordinates({ commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/pengajuan/pengajuanSubordinate/${payload}`).then((response) => {
                commit('SET_SUBORDINATE', response.data.data)
                resolve()
            })
        })
    },
    kodeRKAT({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios.get('/rkat/kodeRKAT').then((response) => {
                commit('SET_KODE_RKAT', response.data)
                resolve()
            })
        })
    },
    ikuParent({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios.get('/iku').then((response) => {
                commit('SET_IKU_PARENT', response.data)
                resolve()
            })
        })
    },
    getIkuChild1({ commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/iku/child1/${payload}`).then((response) => {
                commit('SET_IKU_CHILD1', response.data)
                resolve()
            })
        })
    },
    getIkuChild2({ commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/iku/child2/${payload}`).then((response) => {
                commit('SET_IKU_CHILD2', response.data)
                resolve()
            })
        })
    },
}