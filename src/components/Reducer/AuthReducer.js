import { useReducer, createContext, useContext } from "react";

function AuthHandler(state, { type, payload }) {
  switch (type) {
    case "CHECK_IF_USER_AUTHENTICATED":
      return payload.status === true
        ? { ...state, isUserAuthenticated: true }
        : { ...state, isUserAuthenticated: false };
    case "LOGOUT_USER":
      localStorage.clear();
      return { ...state, isUserAuthenticated: false };
  }
}

const AuthContext = createContext();

export function AuthProvider({ children }) {
  let isUserAuthenticated;
  if (localStorage.getItem("username")) {
    isUserAuthenticated = true;
  } else {
    isUserAuthenticated = false;
  }

  const initialState = { isUserAuthenticated };
  const [state, dispatchAuth] = useReducer(AuthHandler, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
