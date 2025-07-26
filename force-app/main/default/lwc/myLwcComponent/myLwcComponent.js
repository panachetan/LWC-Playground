import { LightningElement, track } from 'lwc';

export default class MyLwcComponent extends LightningElement {

    name = 'punam'
    age = 28

    updateNameHandler(event) {

        this.name = event.target.value

    }

    @track adress ={
        city: 'warora',
        pincode: 442907
    }

    updateAdressHandler(event){

        this.adress.city = event.target.value
    }

    users=['chetan', 'punam', 'nik']
    num1 = 10
    num2 = 20

    get usersName(){
        return this.users[1]
    }

    get multiplication(){
        return this.num1*this.num2
    }

    isVisible = false
    showDetailsHandler(){
        this.isVisible = true
    }

    name
    
    changeHandler(event){
        this.name = event.target.value
    }

    get nameIsCorrect(){
        console.log(this.name)
        return this.name === "hello"
    }

    
}