import { React } from 'react';
import context from '../core/context';

const ShopName = () =>
	<input
		name="shopName"
		type="text"
		// eslint-disable-next-line no-console
		value={ context.state.shopInput }
		onChange={ (evt) => context.actions.updateShopInput(evt.target.value) }
	/>;

export default ShopName;
