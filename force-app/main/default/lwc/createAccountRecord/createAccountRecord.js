import { LightningElement } from 'lwc';
import {ShowToastEvent} from'lightning/platformShowToastEvent';
import Account_Object from '@salesforce/schema/Account';
import Name_FIELDS from '@salesforce/schema/Account.Name';
import Phone_FIELDS from '@salesforce/schema/Account.Phone';
import AnnualRevenue from '@salesforce/schema/Account.AnnualRevenue';

export default class CreateAccountRecord extends LightningElement {
    objectApiName = Account_Object;
    fieldsName= [Name_FIELDS, Phone_FIELDS, AnnualRevenue];
    
    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title:'Account has been created succesfully',
            message:'Account created'+event.detail.id,
            variant: 'success'
                    });

 this.dispatchEvent(toastEvent);



    }
    
    }
