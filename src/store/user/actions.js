import axios from 'axios'

var axiosLocal = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
})

export const init = ({commit}) => {

    var data = JSON.parse(localStorage.getItem('user'))

    commit('INIT', data)
}

export const login = ({commit}, data) => {
    axiosLocal.post('users/token-auth/', data).then(res => {

        localStorage.setItem('user', JSON.stringify(res.data))
        commit('SET_USER', res.data)

    }).catch(err => console.log(err))

}

export const logout = ({commit}) => {
    localStorage.removeItem('user')
    commit('LOG_OUT')
}


