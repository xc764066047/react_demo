// 此页面是TodoList组件的reducer，用来处理派发过来的任务
const TodoReducer = (state = [], action = {}) => {
    switch(action.type) {
        case "ADD_TODO":
            let newState = [...state];
            newState.push(action.payload);
            return newState;
        default:
            return state;
    }
}

export default TodoReducer;