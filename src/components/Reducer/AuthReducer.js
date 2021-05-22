import { useReducer, createContext, useContext } from "react";

function AuthHandler(stateAuth, { type, payload }) {
  switch (type) {
    case "CHECK_IF_USER_AUTHENTICATED":
      if (payload.status === true) {
        localStorage.setItem("username", payload.user);
        return { ...stateAuth, isUserAuthenticated: true };
      } else {
        return { ...stateAuth, isUserAuthenticated: false };
      }

    case "LOGOUT_USER":
      localStorage.clear();
      return { ...stateAuth, isUserAuthenticated: false };
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
  const [stateAuth, dispatchAuth] = useReducer(AuthHandler, initialState);

  return (
    <AuthContext.Provider value={{ stateAuth, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
