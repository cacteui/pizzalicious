import Pizza from 'models/pizza';
import { elements } from 'views/base';

const state = {};

export const pizzaController = () => {
    
    // 1. Add new instance of pizza
    state.pizza = new Pizza();

    // 2. Get the values of crust and sauce and add to instance
    elements.crustSection.addEventListener('click', event => {
        if (event.target.type === 'radio') {
            const crust = document.querySelector('input[name="crust"]:checked').value;

            state.pizza.addCrust(crust);
        }
    });
    
    elements.sauceSection.addEventListener('click', event => {
        if (event.target.type === 'radio') {
            const sauce = document.querySelector('input[name="sauce"]:checked').value;

            state.pizza.addSauce(sauce);
        }
    });
    
    // 3. Get the values and names of the spinner of toppings and add to instance
    state.numberOfToppings = 0;

    elements.toppingsSection.addEventListener('click', event => {
        let spinner = event.target.parentNode.querySelector('.spinner__input');
        let spinnerName = event.target.parentNode.querySelector('.spinner__input').name;
        let spinnerValue = event.target.parentNode.querySelector('.spinner__input').value;
        
        if (event.target.type === 'button' && event.target.className.includes('increase')) {
            
            // If number of toppings is below 5 you can add more
            if (state.numberOfToppings < 5) {
                
                // If spinner is 5 or below you can increase the number
                // if (spinnerValue < 5) {
                    spinnerValue++;
                    spinner.value = spinnerValue;
                    
                    state.pizza.addTopping(spinnerName, spinnerValue);
    
                    state.numberOfToppings++;
                // }
                
            }
        }

        if (event.target.type === 'button' && event.target.className.includes('decrease')) {

            // If spinner is 0 or above you can decrease the number
            if (spinnerValue > 0) {
                spinnerValue--;
                spinner.value = spinnerValue;
                
                state.pizza.addTopping(spinnerName, spinnerValue);

                state.numberOfToppings--;
            }
        }
    });

    elements.orderBtn.addEventListener('click', event => {
        event.preventDefault();

        console.log(state.pizza);
    });
};