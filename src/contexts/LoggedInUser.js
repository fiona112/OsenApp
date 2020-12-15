import React from 'react';

const LoggedInUserContext = React.createContext({
	authJwt: '',
	setAuthJwt: () => {}
});

export default LoggedInUserContext;