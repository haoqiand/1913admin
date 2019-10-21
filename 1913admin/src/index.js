import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import RootRouter from './router'
import axios from './component/utils/axios'
import {Provider} from 'react-redux'
import store from './store/store'
// 全局引入
// import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
Component.prototype.$axios = axios
ReactDOM.render(
    <Provider store={store}>
        <RootRouter />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
