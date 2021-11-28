/**
 * AuthProvider.tsx
 */
import React, { useContext, useReducer, createContext } from "react";

// ==================== Contexts ==================== //

// ========== States Models ========== //
type DefaultT = {
  user: UserInterface;
  isAuth: boolean;
  token: string;
  activeNotification: boolean;
  ads: boolean;
};

// ========== Initial States ========== //
let defaultValue: DefaultT = {
  user: {
    name: "",
    phone: 0,
  },
  isAuth: true,
  token: "",
  activeNotification: false,
  ads: false,
};

// ========== Actions ========== //
type UserAction = { type: "setUser"; payload: UserInterface };
type IsAuthAction = { type: "setIsAuth"; payload: boolean };
type tokenAction = { type: "setToken"; payload: string };
type activeNotificationAction = {
  type: "setActiveNotification";
  payload: boolean;
};

type AdsActions = { type: "setAds"; payload: boolean };
type Actions =
  | UserAction
  | IsAuthAction
  | tokenAction
  | activeNotificationAction
  | AdsActions;

// ========== ReducersFunction ========== //
function reducerFunction(state: DefaultT, action: Actions) {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.payload };
    case "setIsAuth":
      return { ...state, isAuth: action.payload };
    case "setToken":
      return { ...state, token: action.payload };
    case "setActiveNotification":
      return { ...state, activeNotification: action.payload };
    case "setAds":
      return { ...state, ads: action.payload };
    default:
      return state;
  }
}

// ========== Context Creator ========== //
const Context = createContext<
  { Auth: DefaultT; dispatchAuth: (action: Actions) => void } | undefined
>(undefined);

// ========== DefaultFunction ========== //
let AuthProvider: React.FC = ({ children }) => {
  let [Auth, dispatchAuth] = useReducer(reducerFunction, defaultValue);

  // ========== return ========== //
  return (
    <Context.Provider value={{ Auth, dispatchAuth }}>
      {children}
    </Context.Provider>
  );
};

// ========== CustomsHooks ========== //
export function useAuth() {
  const context = useContext(Context);
  if (context === undefined) throw new Error("Must used in the AuthContext");
  return context;
}

export default AuthProvider;
