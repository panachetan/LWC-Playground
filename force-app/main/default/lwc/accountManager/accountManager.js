import { LightningElement, api, track, wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountController.getAccount';

export default class accountManager extends LightningElement {

    @api title = 'Account Manager';
    @track userInput = '';
    @track accounts = [];
    @track error;

    @wire(getAccount, {accname : '$userInput'})
    wiredAccounts({data, error}){
        if(data)
            {
                this.accounts = data;
                this.error = undefined;
            }
        else if(error){
            this.error = error;
            this.accounts = [];
        }
    }

        columns = [
                    {label: 'Name', fieldName: 'Name'},
                    {label: 'Rating', fieldName: 'Rating'},
                    {label: 'Type', fieldName: 'Type'}
                ]

        handlechange(event){
            this.userInput = event.target.value;
        }

        get accountCount(){
            return this.accounts.length;
        }
}