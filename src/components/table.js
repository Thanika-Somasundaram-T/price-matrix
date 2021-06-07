import { React } from 'react';
import '../App.css';
import context from '../core/context';
import TableRow from './tableRow';

const style = {
	marginLeft: 'auto',
	marginRight: 'auto',
	marginBottom: 'auto',
	marginTop: '50px',
	border: '5px solid black',
};
const Table = () =>
	<div>
		<table style={ style }>
			<thead>
				<tr>
					<th> Shop Name </th>
					<th> Product </th>
					<th> Price </th>
				</tr>
			</thead>
			<tbody>
				{ context.state.priceMatrix.map(TableRow) }
			</tbody>
		</table>
	</div>;

export default Table;
