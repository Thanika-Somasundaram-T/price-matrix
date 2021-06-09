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
	const max = [];

	items.filter((item) =>
		item.product === Item.product)
		.map((dict) => max.push(dict.price));

	const maxValue = Math.max(...max);

	return maxValue;
};

const getProductMin = (items, Item) => {
	const min = [];

	items.filter((item) =>
		item.product === Item.product)
		.map((dict) => min.push(dict.price));

	const minValue = Math.min(...min);

	return minValue;
};

const getMaxMin = (items, check) => {
	const dict = [];

	items.map((Item) => {
		const num = check !== 'min'
			? getProductMax(items, Item)
			: getProductMin(items, Item);

		// eslint-disable-next-line no-unused-expressions
		num === Number(Item.price)
			? dict.push(Item)
			: null;
	});

	return dict;
};

const ItemManager = {
	addItems,
	getMaxMin,
};

export default ItemManager;
