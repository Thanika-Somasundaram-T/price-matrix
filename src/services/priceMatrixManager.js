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

const addPriceMatrix = (
	priceArray, shopInput, productInput, priceInput
) =>
	priceArray.concat(getArrayDict(
		shopInput, productInput, priceInput
	));

const PriceMatrixManager = {
	addPriceMatrix,
};

export default PriceMatrixManager;
