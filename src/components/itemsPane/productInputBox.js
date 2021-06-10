import { React } from 'react';
import context from '../../core/context';
import config from '../../core/config';

const Product = () =>
	<select
		name="Product"
		value={ context.state.productInput }
		onChange={ (evt) =>
			context.actions.updateProductInput(evt.target.value) }
	>
		{ config.products.map((name) =>
			<option
				key={ name }
				value={ name }
			>{ name }
			</option>) }
	</select>;

export default Product;
