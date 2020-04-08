import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import 'materialize-css'
import {AuthContext} from "./context/Auth.context";

function App() {
    const {token, logout, login, userId} = useAuth()
    const routes = useRoutes(false)
    return (
        <AuthContext>
            <Router>
                <div className="container">
                    {routes}
                </div>
            </Router>
        </AuthContext>
    );
}

export default App;
