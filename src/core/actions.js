import PriceMatrixManager from '../services/priceMatrixManager';

const updateShopInput = ({ data }) => ({
	shopInput: data,
});

const updateProductInput = ({ data }) => ({
	productInput: data,
});

const updatePriceInput = ({ data }) => ({
	priceInput: data,
});

const addPriceMatrix = ({ state }) => {
	const { shopInput, productInput, priceInput, priceMatrix } = state;

	return {
		priceMatrix: PriceMatrixManager.addPriceMatrix(
			priceMatrix, shopInput, productInput, priceInput
		),
	};
};

const actions = {
	updateShopInput,
	updateProductInput,
	updatePriceInput,
	addPriceMatrix,
};

export default actions;
