const initialState = {
    user: null,
    loading: false,
    error: null,
  };
  
  const dangNhapReducer = (state = initialState, action) => {
    console.log("Action dispatched:", action);
    switch (action.type) {
      case "LOGIN_REQUEST":
        return { ...state, loading: true, error: null };
      case "LOGIN_SUCCESS":
        return { ...state, user: action.payload, loading: false, error: null };
      case "LOGIN_FAILURE":
        return { ...state, loading: false, error: action.payload };
      case "LOGOUT":
        console.log("Logging out...");
        return { ...state, user: null, loading: false };
      default:
        return state;
    }
  };
  
  // Action creators
  export const login = (credentials) => ({ type: "LOGIN_REQUEST", payload: credentials });
  export const logout = () => ({ type: "LOGOUT" });
  
  export default dangNhapReducer;
  