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

const ItemManager = {
	addItems,
};

export default ItemManager;
