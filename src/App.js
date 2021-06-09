import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import Items from './components/itemsPane';
import Maximum from './components/maximumPane';
import Minimum from './components/minimumPane';

const App = () => {
	useEffect(SampleService.sayHai, []);
	// eslint-disable-next-line no-console
	console.log(context.state.items);

	return (
		<div className="App">
			<div> { Items() } </div>
			<div> { Maximum() } </div>
			<div> { Minimum() } </div>
		</div>

	);
};

export default App;
