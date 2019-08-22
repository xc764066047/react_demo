// 此页面合成容器组件


// 导入connect方法，用来合并ui组件和mapStateToProps、mapDispatchToProps生成容器组件
import {connect} from 'react-redux';
// 导入UI组件
import TodoUI from './TodoUI';

// 当state发生改变时，会将state里的数据映射给props
const mapStateToProps = (state, props) => {
	return {
		listData: state.list
	}
}

// dispatch方法映射给props，ui组件就能在里面直接用this.props调用派发action的方法
const mapDispatchToProps = (dispatch, props) => {
	return {
		addTodo: function(todoValue) {
			dispatch({
				type: "ADD_TODO",
				payload: todoValue
			})
			
		}
	}
}

// 合并mapStateToProps、mapDispatchToProps和UI组件生成容器组件
const TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoUI);

export default TodoList;