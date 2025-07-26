import { LightningElement } from 'lwc';

export default class PracticeParentCompo extends LightningElement {

    selectedOption = 'None';

    get options() {
        return [
            { label: 'None', value: 'None'},
            { label: 'Show Input 1', value: 'Name' },
            { label: 'Show Input 2', value: 'Phone' },
            { label: 'Show Input 3', value: 'Email' },
        ];
    }

    handleChange(event) {
        this.selectedOption = event.detail.value;
    }
}