import React, { Component, Fragment } from "react";
import "./App.scss";
// import { Route,  Switch } from 'react-router-dom';
import Counter from './components/Counter';


class App extends Component {
	render() {
		return (
			<Fragment>
			<Counter />
			</Fragment>
		);
	}
}

export default App;
