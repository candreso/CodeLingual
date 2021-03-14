const reducer = (state, action) => {
  switch (action.type) {
    case "USER":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGGED_IN":
      return {
        ...state,
        loggedIn: action.payload,
      };
    case "ACCESS_TOKEN":
      return {
        ...state,
        loggedIn: action.payload,
      };
    case "GENERAL_BUNDLE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
