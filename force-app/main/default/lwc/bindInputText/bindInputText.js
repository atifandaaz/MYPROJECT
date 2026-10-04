import { LightningElement } from 'lwc';

export default class BindInputText extends LightningElement {
        myValue='Atif Hussain';
handleChange(event)
{
    this.myValue=event.target.value;
}
}