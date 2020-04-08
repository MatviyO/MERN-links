import React, {useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";

export const AuthPage = () => {
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    useEffect( () => {
        message(error)
        clearError()
    }, [error, message, clearError])
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
           message(data.message)
        } catch (e) {

        }
    }
    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            message(data.message)
        } catch (e) {

        }
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Refactor Link</h1>
                <div className="card blue darken-3">
                    <div className="card-content white-text">
                        <span>Authentification</span>
                        <div>
                            <div className="input-field">
                                <input placeholder="Input Email"
                                       id="email"
                                       type="text"
                                       name="email"
                                       className="validate"
                                       onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input placeholder="Input Password"
                                       id="password"
                                       type="password"
                                       name="password"
                                       className="validate"
                                       onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button onClick={loginHandler}  disabled={loading}  className="btn blue darken-4 " style={{marginRight: 10}}>Login</button>
                        <button
                            onClick={registerHandler}
                            disabled={loading}
                            className="btn blue darken-4 ">Registration</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
