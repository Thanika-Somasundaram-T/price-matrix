import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	refreshID: rndString(refreshIDLength),
	shopInput: config.shopInput,
	productInput: config.productInput,
	priceInput: config.priceInput,

};

export default seed;
