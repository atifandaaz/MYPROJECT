import { LightningElement } from 'lwc';

export default class ConditionalRenderElement extends LightningElement {

    myValue = 'World';
    showMe = false;
    handleChange(event) {
        this.showMe = event.target.checked;
    }
}