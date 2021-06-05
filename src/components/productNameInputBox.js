import { React } from 'react';
import context from '../core/context';

const ProductName = () =>
	<input
		name="productName"
		type="text"
		// eslint-disable-next-line no-console
		value={ context.state.productInput }
		onChange={ (evt) =>
			context.actions.updateProductInput(evt.target.value) }
	/>;

export default ProductName;
