import ItemManager from '../services/itemManager';

const updateShopInput = ({ data }) => ({
	shopInput: data,
});

const updateProductInput = ({ data }) => ({
	productInput: data,
});

const updatePriceInput = ({ data }) => ({
	priceInput: data,
});

const addItems = ({ state }) => {
	const { shopInput, productInput, priceInput, items } = state;

	return {
		shopInput: '',
		productInput: '',
		priceInput: '-',
		items: ItemManager.addItems(
			items, shopInput, productInput, priceInput
		),
	};
};

const actions = {
	updateShopInput,
	updateProductInput,
	updatePriceInput,
	addItems,
};

export default actions;
