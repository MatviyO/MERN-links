import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/Auth.context";
import { NavBar} from "./components/NavBar";
import 'materialize-css'

function App() {
    const {token, logout, login, userId} = useAuth()
    const isAutheticated = !!token
    const routes = useRoutes(isAutheticated)
    return (
        <AuthContext.Provider value={{
            token, logout, login, userId, isAutheticated
        }}>
            <Router>
               {isAutheticated && <NavBar/>}
                <div className="container">
                    {routes}
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
