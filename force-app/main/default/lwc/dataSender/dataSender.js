import { LightningElement } from 'lwc';

export default class DataSender extends LightningElement {


    handleChange(event){
        const recievedNumber = event.target.value
        console.log(recievedNumber)

        const myEvent = new CustomEvent('numberchange',{
            detail: {value: recievedNumber},
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(myEvent);
    }
}