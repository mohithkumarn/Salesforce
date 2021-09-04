import { LightningElement, wire } from 'lwc';
import getAllContacts from '@salesforce/apex/ContactSearchController.getAllContacts'

export default class ContactsLWC extends LightningElement {
    @wire(getAllContacts) wiredContacts; //These will be automatically available if successful
    getContacts() {
        getAllContacts()
        .then(contacts => {
            //console.log(JSON.stringify(contacts))
            console.log('Got Contacts: ' + contacts.length);
        })
        .catch(error => {
            console.log(error)
        });
    }
}