import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import ROUTER_MAP from "./config";
// import Page404 from "pages/Page404";
// import {getCookie} from "util/sso";
// import {ssoToken} from "redux/actions/auth";

export default function App(props) {
    const [token, setToken] = useState(1)
    useEffect(function () {
        // const token = getCookie();
        // token && store.dispatch(ssoToken(token));
        // console.log('tok', token)
    }, []);
    return (
        <Router>
            {
                !!token &&
                <ul style={{ background: '#f1f1f1' }}>
                    <li>
                        <Link to='/login'>423423 </Link>
                        fsaf
                    </li>
                </ul>
            }

            <Switch>
                {ROUTER_MAP.map(renderRoute)}
                <Route path="*">
                    {/* <Page404 /> */}
                </Route>
            </Switch>
        </Router>
    );
}

function renderRoute({ path, Component, exact, noAuth, children }, index) {
    return children ? (
        children.map(renderRoute)
    ) : noAuth ? (
        <Route key={index} exact={exact} path={path}>
            <Component />
        </Route>
    ) : (
                <PrivateRoute key={index} exact={exact} path={path}>
                    <Component />
                </PrivateRoute>
            );
}

function PrivateRoute({ children, ...rest }) {
    //   const token = store.getState().auth.toJS().token;
    const token = 1;
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return !!token ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        />
                    );
            }}
        />
    );
}
