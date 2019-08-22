import React, {Component} from 'react';


class Detail extends Component {
    render() {
        return(
            <div>
                <h2>这是详情页</h2>
                {/* 获取路由传递过来的参数,用this.props.match.params.xxx的方式来接收 */}
                <p>{this.props.match.params.tel}</p>
            </div>
        )
    }
}

export default Detail;