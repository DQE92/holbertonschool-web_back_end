import Currency from './3-currency.js';

export default class Pricing {
    /**
     * Creates a new Pricing instance.
     * @param {number} amount - The price amount.
     * @param {Currency} currency - The currency of the price.
     */
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    /**
     * Gets the amount of the pricing.
     * @returns {number} The current amount.
     */
    get amount() {
        return this._amount;
    }

    /**
     * Sets the amount of the pricing.
     * @param {number} newAmount - The new amount to set.
     */
    set amount(newAmount) {
        this._amount = newAmount;
    }

    /**
     * Gets the currency of the pricing.
     * @returns {Currency} The current currency.
     */
    get currency() {
        return this._currency;
    }

    /**
     * Sets the currency of the pricing.
     * @param {Currency} newCurrency - The new currency to set.
     * @throws {Error} If the new currency is not an instance of Currency class.
     */
    set currency(newCurrency) {
        if (newCurrency instanceof Currency) {
            this._currency = newCurrency;
        } else {
            throw new Error('Currency must be an instance of Currency class');
        }
    }

    /**
     * Displays the full price with currency details.
     * @returns {string} Formatted string of amount, currency name, and currency code.
     */
    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    /**
     * Converts the price using a given conversion rate.
     * @param {number} amount - The amount to convert.
     * @param {number} conversionRate - The rate to convert the amount.
     * @returns {number} The converted amount.
     */
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}
