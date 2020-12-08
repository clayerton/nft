import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import _ from "lodash";
import { ROUTES } from "../config/routes.config";
import Menus from './Menus';

const routes = _.clone(ROUTES);
const Layouts = props => {

    return (
        <Router>
            <div>
                <Menus />
                <div>
                    {
                        routes.map((route) =>
                            <Route exact key={route.key} path={route.link} component={route.component} />)
                    }
                </div>
            </div>
        </Router>

    )
}
export default Layouts;