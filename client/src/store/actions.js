export const generalDispatchBundler = (payload) => {
  return {
    type: "GENERAL_BUNDLE",
    payload,
  };
};

export const changeLoggedIn = (loggedIn) => {
  return {
    type: "LOGGED_IN",
    payload: loggedIn,
  };
};

export const changeAccessToken = (accessToken) => {
  return {
    type: "ACCESS_TOKEN",
    payload: accessToken,
  };
};

export const logUserIn = (user) => {
  return {
    type: "USER",
    payload: user,
  };
};
