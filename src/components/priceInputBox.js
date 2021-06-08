import { React } from 'react';
import context from '../core/context';

const Price = () =>
	<input
		name="productPrice"
		type="number"
		min="10"
		max="1000"
		// eslint-disable-next-line no-console
		value={ context.state.priceInput }
		onChange={ (evt) =>
			context.actions.updatePriceInput(evt.target.value) }
	/>;

export default Price;
