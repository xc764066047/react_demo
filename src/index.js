import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 导入创建store仓库模块、合并reducer的模块
import {createStore, combineReducers} from 'redux';
// 导入list数据的reducer
import TodoReducer from './pages/TodoList/TodoReducer';
// 导入Provider组件，该组件下的所有组件都能用props获取到store仓库里的数据
import {Provider} from 'react-redux';

// 第一步，创建总的reducer
const reducer = combineReducers({
    list: TodoReducer
})

// 第二步，创建store仓库
const store = createStore(reducer, {list:[]});

const renderPage = () => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}
// 每次运行的时候要执行一次该方法来渲染页面
renderPage();

// 第三步：订阅store仓库，如果数据发生改变，就执行回调函数重新渲染页面
store.subscribe(renderPage);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
