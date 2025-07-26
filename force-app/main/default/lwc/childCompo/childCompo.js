import { LightningElement, api } from 'lwc';

export default class ChildCompo extends LightningElement {

    @api inputValueFromParent
    
    get showNameField(){
        return this.inputValueFromParent === 'Input1'
    }

    get showPhoneField(){
        return this.inputValueFromParent === 'Input2'
    }

    get showEmailField(){
        return this.inputValueFromParent === 'Input3'
    }

    // renderedCallback(){
    //     console.log('Input value from parent =',this.inputValueFromParent)
    // }

    // @api passValueToChild

    // get showValue(){
    //     console.log('after event value recieved in child',this.passValueToChild)
    //     return this.passValueToChild
        
    // }
    // storeInputValue = ''

    // handleKeyPress(event){
    //     this.storeInputValue = event.target.value
    //     console.log(this.storeInputValue)

    //     const customevent = new CustomEvent('passvalue',{
    //         detail:{ storevalue: this.storeInputValue }
    // })
    // this.dispatchEvent(customevent)
        
    // }

    // get options(){
    //     return[
    //         {label: 'option1', value: 'Hot'},
    //         {label: 'option2', value: 'warm'}
    //     ];
    // }

    // value = ''
    // handleChange(event){
    //     this.value = event.detail.value

    //     const customevent = new CustomEvent('passvalue',{
    //         detail:{ storevalue: this.value }
    //         })
    //         this.dispatchEvent(customevent)
    //     }

    //     columns = [
    //         { label: 'Account Name', fieldName: 'Name', type: 'text' },
    //         { label: 'Account Id', fieldName: 'Id', type: 'text' }
            
    //     ];

    //     @api accounts = []
    }