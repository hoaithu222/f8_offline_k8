import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { counterReducer } from "./reducers/counterReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";
import { thunk } from "redux-thunk";
import { todoReducer } from "./reducers/todoReducer";


export const rootReducer = combineReducers({
    //keyReducer : reducerFunction
    counter: counterReducer,
    todo: todoReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(loggerMiddleware, thunk)));
