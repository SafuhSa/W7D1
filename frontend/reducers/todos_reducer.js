import {RECEIVE_TODOS, RECEIVE_TODO} from "../actions/todo_actions.js";
import merge from "lodash/merge";

const todosReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let nextState = {};
  
  switch(action.type) {
    case RECEIVE_TODOS:
      action.toDos.forEach( toDo => {
        nextState[toDo.id] = toDo;
      });
      return nextState;
    case RECEIVE_TODO :
      newToDo = {[action.toDo.id]: action.toDo};
      return merge({}, state, newToDo);
    default:
      return state;
  }
};

export default todosReducer;