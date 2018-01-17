import * as RANGE from "../constants/ranges";

// Private
const _getRandomValue = (min, max) => {
    return Math.random() * (max - min) + min;
};

const _getRandomDollarAmount = (min, max) => {
    return Math.round(_getRandomValue(min, max) * 100) / 100; // rount to 2 decimals
};

// Public
export const getRandomPrice = () => {
    const { min, max } = RANGE.price;
    return _getRandomDollarAmount(min, max);
};

export const getRandomCash = () => {
    const { min, max } = RANGE.cash;
    return _getRandomDollarAmount(min, max);
} 

export const getRandomSupply = () => {
    const min = RANGE.supply.min;
    const max = RANGE.supply.max;
    const random = _getRandomValue(min, max);
    return Math.round(random); // round to whole number
};

export const getRandomCash = () => {

}

export const getRandomWallet = coins => {
    const wallet = {
        cash: getRandomCashAmount(),
        coins: []
    }

    return wallet;
};
