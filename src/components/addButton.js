import context from '../core/context';
import { React } from 'react';

const AddButton = () =>
	<button
		onClick={ () => context.actions.addPriceMatrix() }
	>ADD
	</button>;

export default AddButton;
