import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authreducer } from "../redux/authReducer/reducer";
const rootReducer = combineReducers({
  authreducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
