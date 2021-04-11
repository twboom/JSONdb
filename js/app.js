/*
This file contains the logic of JSONdb
*/

const app = []; // For logic
const interface = []; // For interface
const session = []; // Current session data

/* Interface */
interface.Row = class {
    constructor(arr) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let i = 0; i < arr.length ; i++) {
            const obj = arr[i];
            const field = document.createElement('input');
            field.setAttribute('type', 'text');
            field.dataset.row = session.rows.length
            row.appendChild(field);
        }
        document.getElementsByTagName('main')[0].appendChild(row);
        session.rows.push(row)
    }
}

/* Session */
session.rows = [];