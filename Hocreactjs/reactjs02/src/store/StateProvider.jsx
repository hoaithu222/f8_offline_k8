/* eslint-disable react/prop-types */

import { createContext } from "react";
import { initialState, rootReducer } from "./reducer";
import { useReducerWithMiddleware } from "./hook";
import { middleware } from "./middlewares/middleware";

export const ProviderContext = createContext();
export default function StateProvider({ children }) {
  const [state, dispatch] = useReducerWithMiddleware(
    rootReducer,
    initialState,
    middleware
  );
  return (
    <ProviderContext.Provider value={{ state, dispatch }}>
      {children}
    </ProviderContext.Provider>
  );
}

// Mục đính sẽ chứa state của toàn bộ dự án
