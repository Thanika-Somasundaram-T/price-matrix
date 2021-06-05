import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (

	);
};

export default App;
