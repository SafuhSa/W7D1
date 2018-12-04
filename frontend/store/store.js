import {createStore} from "redux";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preState = {}) => {
  const store = createStore(rootReducer, preState );

  return store;
}

export default configureStore;
