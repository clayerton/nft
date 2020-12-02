import HomeScreen from '../pages/home';
import LoginScreen from '../pages/login';

export default [
    {path: '/login', Component: LoginScreen, noAuth: true},
    {path: '/', Component: HomeScreen, exact: true},
    
]