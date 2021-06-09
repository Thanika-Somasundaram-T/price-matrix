/* eslint-disable react/destructuring-assignment */
import { React } from 'react';

const Item = (item) =>
	<tr key={ item.id }>
		<td>{ item.shopName }</td>
		<td>{ item.product }</td>
		<td>{ item.price }</td>
	</tr>;

export default Item;
