export default class Pizza {
    constructor(crust, sauce, toppings) {
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = toppings;
    }

    addCrust(value) {
        this.crust = value;
    }

    addSauce(value) {
        this.sauce = value;
    }

    addTopping(value, amount) {
        const topping = {
            name: value,
            amount
        }

        this.toppings.push(topping);
    }
}