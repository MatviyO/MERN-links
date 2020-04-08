import {createContext} from 'react'

function noop() {

}

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: noop(),
    loggout: noop(),
    isAuthenticated: false
})
