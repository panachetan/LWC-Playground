import { LightningElement, track, wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountController.getAccount';

export default class ParentCompo extends LightningElement {

    // Message = 'Hello from Parent'
    // value ="In Progress"
    // Val = '50'
    // checkboxValue = false

    // handleClick(){
    //     this.Message = 'welcome to lwc'
    // }

    storeInputValue = '' //Default value

    get options(){
        return[
        { label: 'Input 1', value: 'Input1' },
        { label: 'Input 2', value: 'Input2' },
        { label: 'Input 3', value: 'Input3' }
        ];
    }

    handleChange(event){
        this.storeInputValue = event.target.value
        console.log(this.storeInputValue)
    }

    // selectedValue

    // handleChange(event){
    //     this.selectedValue = event.target.value
    //     console.log(this.selectedValue)
    // }

    // holdKeyPressValue
    // handleKeyPress(event){
    //     this.holdKeyPressValue = event.target.value
    //     console.log(this.holdKeyPressValue)
    // }

    // sliderChangeValue
    // handleSliderChange(event){
    //     this.sliderChangeValue = event.target.value
    // }

    // get checkboxOptions(){
    //     return[
    //         {label:'checkbox1',value:'option1'}
    //     ]
    // }

    // handleCheckboxChange(event){
    //     console.log('before event fire',this.checkboxValue)
    //     this.checkboxValue = event.target.checked
    //     console.log('after event fire in prent',this.checkboxValue)
    // }

    // @track inputFromChild = ''

    // reciveChildInput(event){
    //     this.inputFromChild = event.detail.storevalue
    //     console.log(this.inputFromChild)
    // }

    // accountDetails = []
    // getAccountDetails(){

    //     getAccount()
    //         .then(result=>{
    //             this.accountDetails = result
    //             console.log(this.accountDetails)
    //         })
    //         .catch(error =>{
    //             console.error('error', error)
    //         })
    // }
// @track Accounts = []

//     @wire(getAccount)
//     wiredAccount({data,error}){
//         if(data){
//             this.Accounts = data
//         }
//         else if(error){
//             console.error('error',error)
//         }
//         }
    }