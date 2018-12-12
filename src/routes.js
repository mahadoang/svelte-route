import roadtrip from 'roadtrip';
import { Route } from './route.js';
import HomePage from './Home.html';
import LoginPage from './Login.html';

export default class Routes {
    constructor() 
    {
        this.router = roadtrip;
        this.init();
    }

    init()
    {
        this.router
            .add('/login',Route(LoginPage,'main-container'))
            .add('/',Route(HomePage,'main-container'))
            .start({
                fallback:'/'
        });
    }
}