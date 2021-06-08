import { React } from 'react';
import '../App.css';
import context from '../core/context';
import Item from './item';

const style = {
	marginLeft: 'auto',
	marginRight: 'auto',
	marginBottom: 'auto',
	marginTop: '50px',
	border: '5px solid black',
};
const ItemList = () =>
	<div>
		<table style={ style }>
			<thead>
				<tr>
					<th> Shop </th>
					<th> Product </th>
					<th> Price </th>
				</tr>
			</thead>
			<tbody>
				{ context.state.items.map(Item) }
			</tbody>
		</table>
	</div>;

export default ItemList;
