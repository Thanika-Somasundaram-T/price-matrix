const updateShopInput = ({ data }) => ({
	shopInput: data,
});

const updateProductInput = ({ data }) => ({
	productInput: data,
});

const updatePriceInput = ({ data }) => ({
	priceInput: data,
});

const actions = {
	updateShopInput,
	updateProductInput,
	updatePriceInput,
};

export default actions;
