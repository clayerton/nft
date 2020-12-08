import PageHome from '../pages/home';
import PageOverView from '../pages/overview'
const ROUTES = [
    {
        key: 'Home',
        link: '/',
        iconType: 'home',
        text: 'Home',
        component: PageHome
    }, {
        key: 'overview',
        link: '/overview',
        iconType: 'profile',
        text: 'Overview',
        component: PageOverView
    }
];

export { ROUTES };