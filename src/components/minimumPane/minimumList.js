import { React } from 'react';
import ItemManager from '../../services/itemManager';
import context from '../../core/context';
import MinimumData from './minimumData';

const style = {
	marginLeft: 'auto',
	marginRight: 'auto',
	marginBottom: 'auto',
	marginTop: '50px',
	border: '5px solid black',
};

const MaximumList = () =>
	<table style={ style }>
		<thead>
			<tr>
				<th> Shop </th>
				<th> Product </th>
				<th> Price </th>
			</tr>
		</thead>
		<tbody>
			{ ItemManager.getMinimum(context.state.items)
				.map(MinimumData) }
		</tbody>
	</table>;

export default MaximumList;
