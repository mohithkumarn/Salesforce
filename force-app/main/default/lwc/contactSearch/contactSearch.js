import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin, CurrentPageReference } from 'lightning/navigation';
import { loadStyle } from 'lightning/platformResourceLoader';
import searchContacts from '@salesforce/apex/ContactSearchController.searchContacts';
export default class BearListNav extends NavigationMixin(LightningElement) {
	@track searchTerm = '';
    @track bears;
    @wire(CurrentPageReference) pageRef;
    @wire(searchContacts, {searchTerm: '$searchTerm'})
    loadBears(result) {
        this.bears = result;
        if (result.data) {
            fireEvent(this.pageRef, 'bearListUpdate', result.data);
        }
    }
	connectedCallback() {
		loadStyle(this, ursusResources + '/style.css');
	}
	handleSearchTermChange(event) {
		window.clearTimeout(this.delayTimeout);
		const searchTerm = event.target.value;
		this.delayTimeout = setTimeout(() => {
			this.searchTerm = searchTerm;
		}, 300);
	}
	get hasResults() {
		return (this.bears.data.length > 0);
	}
	handleBearView(event) {
		this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes: {
				recordId: event.target.bear.Id,
				objectApiName: 'Contact',
				actionName: 'view',
			},
		});
	}
}