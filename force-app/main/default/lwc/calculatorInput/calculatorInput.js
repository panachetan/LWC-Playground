import { LightningElement, api } from 'lwc';
 
export default class CalculatorInput extends LightningElement {
    number1 = 0;
    number2 = 0;
 
    handleNumber1Change(event) {
        this.number1 = parseFloat(event.target.value);
        this.dispatchEvent(new CustomEvent('numberchange', {
            detail: { number1: this.number1, number2: this.number2 }
        }));
    }
 
    handleNumber2Change(event) {
        this.number2 = parseFloat(event.target.value);
        this.dispatchEvent(new CustomEvent('numberchange', {
            detail: { number1: this.number1, number2: this.number2 }
        }));
    }
}