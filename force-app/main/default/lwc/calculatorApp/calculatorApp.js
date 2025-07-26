import { LightningElement } from 'lwc';
 
export default class CalculatorApp extends LightningElement {
    number1 = 0;
    number2 = 0;
    result = 0;
 
    handleNumberChange(event) {
        this.number1 = event.detail.number1;
        this.number2 = event.detail.number2;
    }
 
    handleAddition() {
        this.result = this.number1 + this.number2;
    }
 
    handleSubtraction() {
        this.result = this.number1 - this.number2;
    }
 
    handleMultiplication() {
        this.result = this.number1 * this.number2;
    }
 
    handleDivision() {
        this.result = this.number2 !== 0 ? (this.number1 / this.number2).toFixed(2) : 'Error';
    }
}