export default class Pizza {
    constructor() {
        this.toppings = [];
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