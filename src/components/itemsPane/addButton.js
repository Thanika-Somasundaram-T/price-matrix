import context from '../../core/context';
import { React } from 'react';

const checkDisable = ({ shopInput, productInput, priceInput }) =>
	!(shopInput !== '' && productInput !== '' && priceInput !== '');

const AddButton = () =>
	<button
		disabled={ checkDisable(context.state) }
		onClick={ () => context.actions.addItems() }
	>
		ADD
	</button>;

export default AddButton;
