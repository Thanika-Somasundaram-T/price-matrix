import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import ShopName from './components/shopNameInputBox';
import Product from './components/productInputBox';
import Price from './components/priceInputBox';
import AddButton from './components/addButton';
import ItemList from './components/itemList';

const App = () => {
	useEffect(SampleService.sayHai, []);
	// eslint-disable-next-line no-console
	console.log(context.state.items);

	return (
		<div className="App">
			<div>Shop Name : { ShopName() }</div>
			<div>Product : { Product() }</div>
			<div>
				<span>Price : { Price() }</span>
				<span>{ AddButton() }</span>
			</div>
			<div>{ ItemList() }</div>
		</div>

	);
};

export default App;
