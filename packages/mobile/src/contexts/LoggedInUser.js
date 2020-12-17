import React from "react";

const LoggedInUserContext = React.createContext({
  accessToken: "",
  setAccessToken: () => {},
  refreshToken: "",
  setRefreshToken: () => {},
});

export default LoggedInUserContext;
