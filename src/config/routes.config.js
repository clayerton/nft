import PageHome from '../pages/home';
import PageOverView from '../pages/overview';
import PageExchange from '../pages/exchange'
import PageMining from '../pages/mining'
import PageProject from '../pages/project'
import PageRank from '../pages/rank'
import PageAbout from '../pages/about'
import PageDnft from '../pages/dnft'

const ROUTES = [
    // { path: '/', redirect: '../pages/project' },
    // {
    //     key: 'home',
    //     link: '/',
    //     iconType: 'home',
    //     text: '首页',
    //     component: PageHome
    // }, {
    //     key: 'overview',
    //     link: '/overview',
    //     iconType: 'profile',
    //     text: '资产总览',
    //     component: PageOverView
    // }, {
    //     key: 'exchange',
    //     link: '/exchange',
    //     iconType: 'exchange',
    //     text: 'Token 兑换',
    //     component: PageExchange
    // }, {
    //     key: 'mining',
    //     link: '/mining',
    //     iconType: 'mining',
    //     text: 'NFT 挖矿',
    //     component: PageMining
    // },
    {
        key: 'project',
        link: '/',
        iconType: 'project',
        text: '项目列表',
        component: PageProject
    },
    {
        key: 'dnft',
        link: '/dnft',
        iconType: 'dnft',
        text: 'dnft',
        component: PageDnft
    },
    // {
    //     key: 'rank',
    //     link: '/rank',
    //     iconType: 'rank',
    //     text: '排行榜',
    //     component: PageRank
    // }, {
    //     key: 'about',
    //     link: '/about',
    //     iconType: 'about',
    //     text: '关于我们',
    //     component: PageAbout
    // },
];

export { ROUTES };