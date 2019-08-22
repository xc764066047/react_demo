import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            list: ["10010", "10086", "10000"]
        }
    }
    render() {
        return(
            <div>
                <h2>这是主页</h2>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return(
                                <li key={index}>
                                    <Link to={`/detail/${item}`}>{item}</Link>
                                </li>
                            )
                        })
                    }
                    <li>
                        <Link to="/detail">无参数链接，测试Route标签里的参数后?的作用</Link>
                    </li>
                    <li>
                        <Link to="/detail/101">有参数链接，测试路由上的正则，必须要为数字类型参数才能跳转</Link>
                    </li>
                </ul>
                
            </div>
        )
    }
}

export default Home;