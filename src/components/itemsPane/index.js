import { React } from 'react';
import '../../App.css';
import ShopName from './shopNameInputBox';
import Product from './productInputBox';
import Price from './priceInputBox';
import AddButton from './addButton';
import ItemList from './itemList';

const style = {
	position: 'absolute',
	height: '100%',
	width: '50%',
	background: 'turquoise',
	top: 0,
	left: 0,
};

const Items = () => {

	return (
		<div className="Items" style={ style }>
			<div> <h3> Enter Details</h3></div>
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

export default Items;
