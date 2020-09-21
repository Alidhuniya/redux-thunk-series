import React, { Component, Fragment } from "react";
import "./App.scss";
// import { Route,  Switch } from 'react-router-dom';
import Cats from './components/Cats';


class App extends Component {
	render() {
		return (
			<Fragment>
			<Cats />
			</Fragment>
		);
	}
}

export default App;
