const INITAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITAL_STATE);
};
