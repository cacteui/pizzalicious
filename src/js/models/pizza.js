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

    addTopping(name, amount) {

        // Create topping object
        const topping = {
            name,
            amount
        }

        // Check if toppings are already added to array
        if (this.toppings.length > 0) {

            // Check if array does not have object with topping name
            if (!this.toppings.some(el => el.name.includes(`${topping.name}`))) {

                this.toppings.push(topping);

            } else {

                // Change the object if topping exists
                for (let el of this.toppings) {
                    if (el.name === topping.name) {
                        el.amount = topping.amount;
                    }
                }
            }

        } else {
            this.toppings.push(topping);
        }
    }
}