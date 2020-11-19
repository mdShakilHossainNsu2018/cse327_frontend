import router from "@/router"

export const SET_USER = (state, data) => {
    state.token = data.token;

    state.username = data.username
    state.userEmail = data.email
    state.user_id = data.user_id
    state.isAuthenticated = true;

    router.push('/')

    // var data2 = localStorage.getItem('user')
    // console.log(JSON.parse(data2))
}


export const INIT = (state, data) => {
    console.log(data)

    if(data === null){
        state.token = ''

        state.username = ''
        state.userEmail = ''
        state.user_id = ''
        state.isAuthenticated = false;
    } else {
        state.token = data.token;

        state.username = data.username
        state.userEmail = data.email
        state.user_id = data.user_id
        // if (state.data.token)
        state.isAuthenticated = true;
    }


}


export const LOG_OUT = (state) => {
    state.token = '';

    state.username = '';
    state.userEmail = '';
    state.user_id = '';
    state.isAuthenticated = false;

    router.push('/login')
}


