import React, { Component, Fragment } from "react";
import "./App.scss";
// import { Route,  Switch } from 'react-router-dom';
import UserContainer from './components/UserContainer';


class App extends Component {
	render() {
		return (
			<Fragment>
			<UserContainer />
			</Fragment>
		);
	}
}

export default App;
