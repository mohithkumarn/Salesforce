import { LightningElement, wire } from 'lwc';
import getAllContacts from '@salesforce/apex/ContactSearchController.getAllContacts'

export default class contactSearch extends LightningElement {
    @wire(getAllContacts) wiredContacts;
    getContacts() {
        getAllContacts()
        .then(contacts => {
            console.log('Got Contacts: ' + contacts.length);
        })
        .catch(error => {
            console.log(error)
        });
    }
    value = '';

    get options() {
        return [
            { label: 'All Contacts', value: 'option1' },
            { label: 'Search Pattern', value: 'option2' },
        ];
    }
}