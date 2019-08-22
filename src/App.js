import React, {Component} from 'react';
import './App.css';

// 导入路由组件react-router-domm
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";

// 导入页面组件
import TodoList from './pages/TodoList/TodoList';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Others from './pages/Others/Others';
import Detail from './pages/Detail/Detail';


class App extends Component {
	render() {
		return(
			<div className="App">
				<TodoList />
				<hr />
				{/* 总路由 */}
				<Router>
					<h2>这里是react-router-dom路由测试</h2>

					<h4>这里是Link标签，不能设置激活后的样式</h4>
					<div className="navbar">
						{/* link标签来实现路由跳转，dom节点上会被渲染成a标签，但不能设置激活样式和访问后的样式 */}
						<Link exact="true" to="/">主页</Link>
						<Link to="/news">新闻</Link>
						<Link to="/others">其他</Link>
					</div>
					<hr />

					<h4>这里是NavLink标签，可以设置激活后的样式</h4>
					<div className="navbar">
						<NavLink exact activeClassName="active" to="/">主页</NavLink>
						<NavLink activeClassName="active" to="/news">新闻</NavLink>
						<NavLink activeClassName="active" to="/others">其他</NavLink>
					</div>
					<hr />

					<h4>这里是路由页面</h4>
					<Switch>
						{/* 子路由Route，exact是精确匹配的意思，若路径不对就不会发生跳转 */}
						<Route exact path="/" component={Home}></Route>
						<Route path="/news" component={News}></Route>
						<Route path="/others" component={Others}></Route>

						{/* 动态路由 */}
						{/* :tel相当于是个形参，会自动被替换成定义链接标签里传入的参数 */}
						{/* ?表示可选参数，表示不管传不传这个参数都能跳转到指定页面 */}
						{/* ()表示正则，(\d+)表示传入的参数必须是数字类型，且位数不限 */}
						{/* <Route path="/detail/:tel?" component={Detail}></Route> */}
						<Route path="/detail/:tel(\d+)" component={Detail}></Route>

						{/* 重定向:这里设置的是当传入的路由不是上面任意一项的时候，就跳转到主页，必须搭配Switch组件 */}
						<Redirect from="/*" to="/" />
					</Switch>
				</Router>
				<hr />
			</div>
		)
	}
}

export default App;
