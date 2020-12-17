import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import _ from "lodash";
import { ROUTES } from "../config/routes.config";
import Menus from './Menus';
import styles from './BasicLayout.module.scss';
import Face from "../assets/face.png";
import Bird from "../assets/bird.png";
import Wechart from "../assets/wechart.png";

const routes = _.clone(ROUTES);
const Layouts = props => {
    return (
        <Router>
            <div className={styles.container}>
                <Menus />
                <div className={styles.main}>
                    <div className={styles.header}>
                        <span className={styles.left}>
                            {/* NFT导航 */}
                        </span>
                        <div className={styles.right}>
                            {/* <div className={styles.boke}>博客</div>
                            <img alt='' src={Face} />
                            <img src={Bird} />
                            <img src={Wechart} /> */}
                            {/* <div className={styles.line}></div> */}
                            <div className={styles.en}>EN  /</div>
                            <div className={styles.cn}>中</div>
                            {/* <div className={styles.wallet}>
                                <span>链接钱包</span>
                            </div> */}
                        </div>
                    </div>
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