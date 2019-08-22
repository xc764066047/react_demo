// UI组件不能包含任何逻辑部分
import React, {Component} from 'react';

class TodoUI extends Component {
	render() {
		return(
			<div>
				<h2>这里用到了react-redux</h2>
				<input type="text" ref="todoVal" />
				<button onClick={()=>this.props.addTodo(this.refs.todoVal.value)}>添加todo</button>
				
				{this.props.listData.map((item, index) => {
					return <li key={index}>{item}</li>
				})}
				
			</div>
		)
	}
}

export default TodoUI;