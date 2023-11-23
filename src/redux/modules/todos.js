// import uuid from "react-uuid";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "제목1",
    body: "내용1",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "제목2",
    body: "내용2",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "제목3",
    body: "내용3",
    isDone: true,
  },

];

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"
const SWITCH_TODO = "SWITCH_TODO"

//액션크리에이터
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}
export const switchTodo = (isdone) => {
  return {
    type: SWITCH_TODO,
    payload: isdone
  }
}
// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = action.payload
      return [...state, newTodo]

    case "DELETE_TODO":

      return state.filter((todo) => {
        return todo.id !== action.payload
      })

    case "SWITCH_TODO":
      return state.map((todo) => {
        console.log('todo', todo.id)
        console.log(action.payload)
        return (todo.id === action.payload.id) ? ({ ...todo, isDone: !todo.isDone }) : todo
      })

    default:
      return state;
  }
};

export default todos;
