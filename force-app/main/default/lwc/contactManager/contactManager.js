import { LightningElement, api, track, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
 
export default class contactManager extends LightningElement {
    
    @api title = 'Contact Manager';
 
    // Reactive variables
    @track searchKey = '';         // Holds the search input value
    @track contacts = [];          // List of contacts received from Apex
    @track error;                  // Error message if something goes wrong
 
    // Columns for lightning-datatable
    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' }
    ];
 
    // Automatically call Apex method when searchKey changes
    @wire(getContacts, { searchKey: '$searchKey' })
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = [];
        }
    }
 
    // Capture input change in search box
    handleSearchInput(event) {
        this.searchKey = event.target.value;
    }
 
    // Computed property to return contact count
    get totalContacts() {
        return this.contacts.length;
    }
}