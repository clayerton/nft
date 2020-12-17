import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ROUTES } from '../config/routes.config';
import _ from 'lodash';
import styles from './Menus.module.scss';
import Logo from "../assets/logo.png";

const routes = _.clone(ROUTES);

const Menus = props => {
    const [sel, setSel] = useState()
    const handleMenus = (route) => {
        setSel(route.link)
    }
    useEffect(() => {
        let path = props.location.pathname;
        setSel(path)
    }, [])
    return (
        <div className={styles.nav}>
            <img className={styles.logo} src={Logo} />
            {
                routes.map((route, index) => {
                    return (
                        <Link key={index} onClick={() => handleMenus(route)} className={`${styles.router} ${sel === route.link && styles.select}`} to={route.link}>
                            <div className={styles.link} key={index}>
                                {route.text}
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
export default withRouter(Menus);
