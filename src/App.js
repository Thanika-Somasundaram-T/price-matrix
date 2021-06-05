import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import ShopName from './components/shopNameInputBox';
import ProductName from './components/productNameInputBox';
import ProductPrice from './components/productPriceInputBox';
import AddButton from './components/addButton';

const App = () => {
	useEffect(SampleService.sayHai, []);
	// eslint-disable-next-line no-console
	console.log(context.state.priceMatrix);

	return (
		<div className="App">
			<div>
				ShopName : { ShopName() }
			</div>
			<div>
				ProductName : { ProductName() }
			</div>
			<div>
				<span>Price : { ProductPrice() }</span>
				<span>{ AddButton() }</span>
			</div>
		</div>

	);
};

export default App;
