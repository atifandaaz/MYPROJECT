import { LightningElement } from 'lwc';

export default class UseForEachLoop extends LightningElement {
    students = [
        { id: 1, name: 'Arbaz', class: '10th', fee: 1000 },
        { id: 2, name: 'Jasunny', class: '9th', fee: 900 },
        { id: 3, name: 'rahil', class:'8th', fee: 800 },
        { id: 4, name: 'Aman', class: '7th', fee: 700 },
        { id: 5, name: 'Amit', class: '6th', fee: 600 },
        { id: 6, name: 'Rohit', class: '5th', fee: 500 },
        { id: 7, name: 'Priya', class: '4th', fee: 400 },
        { id: 8, name: 'Neha', class: '3rd', fee: 300 },
        { id: 9, name: 'Vikas', class: '2nd', fee: 200 },
        { id: 10, name: 'Sonia', class: '1st', fee: 100 },
        { id: 11, name: 'Simran', class: 'Nursery', fee: 50 }
    ]
    
}