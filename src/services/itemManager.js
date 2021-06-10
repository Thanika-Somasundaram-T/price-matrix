import config from '../core/config';
import { rndString } from '@laufire/utils/random';

const getArrayDict = (
	shopInput, productInput, priceInput
) => ({
	id: rndString(config.IdLength),
	shopName: shopInput,
	product: productInput,
	price: priceInput,
});

const addItems = (
	items, shopInput, productInput, priceInput
) =>
	items.concat(getArrayDict(
		shopInput, productInput, priceInput
	));

const getProductMax = (items, Item) => {
	const prices = items.filter((item) =>
		item.product === Item.product)
		.map((dict) => dict.price);

	const maxPrice = Math.max(...prices);

	return maxPrice;
};

const getProductMin = (items, Item) => {
	const min = [];

	items.filter((item) =>
		item.product === Item.product)
		.map((dict) => min.push(dict.price));

	const minValue = Math.min(...min);

	return minValue;
};

const getMaximum = (items) => {
	const arr = [];

	items.map((Item) => {
		const num = getProductMax(items, Item);

		// eslint-disable-next-line no-unused-expressions
		num === Number(Item.price)
			? arr.push(Item)
			: null;
	});

	return arr;
};

const getMinimum = (items) => {
	const arr = [];

	items.map((Item) => {
		const num = getProductMin(items, Item);

		if(num === Number(Item.price))
			arr.push(Item);
	});

	return arr;
};

const ItemManager = {
	addItems,
	getMaximum,
	getMinimum,
};

export default ItemManager;
