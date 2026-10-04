import { LightningElement } from 'lwc';

export default class ConditionalRenderElement extends LightningElement {
   fullName = '';
   phone = '';
   email = '';

handleChange(event) {
    const field=event.target.name;
    if(field =='fullName'){
        this.fullName = event.target.value;
    } else if(field =='phone'){
        this.phone = event.target.value;
    } else if(field=='email'){
        this.email=event.target.value;
    }
    
}
get toUppercase()
{
   // return this.fullname? this.fullName.toUpperCase() : '';
   return this.fullName ? this.fullName.toUpperCase() : '';
}
}