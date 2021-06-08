import context from '../core/context';
import { React } from 'react';

const checkDisable = () => {
	const { shopInput, productInput, priceInput } = context.state;

	// eslint-disable-next-line no-console
	console.log(
		'add', shopInput, productInput, priceInput
	);

	return !(shopInput !== '' && productInput !== '' && priceInput !== '') ;
};

const AddButton = () =>
	<button
		disabled={ checkDisable() }
		onClick={ () => context.actions.addItems() }
	>
		ADD
	</button>;

export default AddButton;
