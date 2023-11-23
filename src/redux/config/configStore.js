import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";
import body from "../modules/body";
import title from "../modules/title";
const rootReducer = combineReducers({
  todos,
  body,
  title

});

const store = createStore(rootReducer);

export default store;
