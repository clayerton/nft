import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../config/routes.config';
import _ from 'lodash';
import styles from './Menus.module.scss';
const routes = _.clone(ROUTES);

const Menus = props => {
    return (
        <div className={styles.nav}>
            {
                routes.map((route, index) => {
                    return (
                        <div className={styles.router} key={index}>
                            <Link className={styles.link} to={route.link}>{route.text}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Menus;