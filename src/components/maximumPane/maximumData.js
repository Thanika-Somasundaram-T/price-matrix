/* eslint-disable react/destructuring-assignment */
import { React } from 'react';

const MaximumData = (item) =>
	<tr>
		<td>{ item.shopName }</td>
		<td>{ item.product }</td>
		<td>{ item.price }</td>
	</tr>;

export default MaximumData;
