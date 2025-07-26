import { LightningElement, track } from 'lwc';

export default class DataListener extends LightningElement {

    @track number = ''

    renderedCallback(){
        const sender = this.template.querySelector('c-data-sender')
        if(sender){
            sender.addEventListener('numberchange', this.handleNumberChange.bind(this))
        }
        
    }

    handleNumberChange(event){
        this.number = event.detail.value
        console.log('Number Changed ',this.number)
    }
}