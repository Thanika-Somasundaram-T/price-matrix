import { React, useEffect } from 'react';
import './App.css';
import SampleService from './services/sample';
import ShopName from './components/shopNameInputBox';
import ProductName from './components/productNameInputBox';
import ProductPrice from './components/productPriceInputBox';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div>
			<div>
				<span>ShopName: { ShopName() }</span>
				<span>ProductName: { ProductName() }</span>
			</div>
			<div>
				<span>Price: { ProductPrice() }</span>
			</div>
		</div>

	);
};

export default App;
