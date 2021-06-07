/* eslint-disable react/destructuring-assignment */
import { React } from 'react';

const TableRow = (priceMatrix) =>
	<tr key={ priceMatrix.id }>
		<td>{ priceMatrix.shopName }</td>
		<td>{ priceMatrix.product }</td>
		<td>{ priceMatrix.price }</td>
	</tr>;

export default TableRow;
