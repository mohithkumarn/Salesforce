import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.Account';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';


export default class ContactRecord extends LightningElement {
    @api recordId;
    @api objectApiName;

    fields = [NAME_FIELD, ACCOUNT_FIELD, FIRSTNAME_FIELD,LASTNAME_FIELD,EMAIL_FIELD];

    nameField = NAME_FIELD;
    accountField=ACCOUNT_FIELD;
    firstnameField=FIRSTNAME_FIELD;
    lastnameField=LASTNAME_FIELD;
    emailField=EMAIL_FIELD;

    // Flexipage provides recordId and objectApiName



}
