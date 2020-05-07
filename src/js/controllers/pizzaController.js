import Pizza from 'models/pizza';
import { elements } from 'views/base';

const state = {};

// Pizza Controller
export const pizzaController = () => {
    // 1. Add new instance of pizza
    state.pizza = new Pizza();

    // 2. Get the values of crust and sauce and add to instance
    elements.crustSection.addEventListener('click', event => {
        if (event.target.type === 'radio') {
            const crust = document.querySelector('input[name="crust"]:checked').value;

            state.pizza.addCrust(crust);

            console.log(state.pizza);
        }
    });
    
    elements.sauceSection.addEventListener('click', event => {
        if (event.target.type === 'radio') {
            const sauce = document.querySelector('input[name="sauce"]:checked').value;

            state.pizza.addSauce(sauce);

            console.log(state.pizza);
        }
    });
    
    // 3. Get the values and names of the spinner of toppings and add to instance
};