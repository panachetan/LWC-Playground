import { LightningElement, api } from 'lwc';

export default class PracticeChildCompo extends LightningElement {

    @api selectedOption = 'None';


    get showName(){
        console.log('inside showname')
       return this.selectedOption == 'Name';
    }

    get showPhone(){
        console.log('inside showphone')
        return this.selectedOption == 'Phone';
    }

    get showEmail(){
        return this.selectedOption == 'Email';
    }
}