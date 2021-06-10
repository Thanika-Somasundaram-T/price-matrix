import { React } from 'react';
import context from '../../core/context';
import config from '../../core/config';

const ShopName = () =>
	<select
		name="Shop"
		value={ context.state.shopInput }
		onChange={ (evt) => context.actions.updateShopInput(evt.target.value) }
	>
		{ config.shops.map((name) =>
			<option
				key={ name }
				value={ name }
			>{ name }
			</option>) }
	</select>;

export default ShopName;
