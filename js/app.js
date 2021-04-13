/*
This file contains the logic of JSONdb
*/

const app = []; // For logic
const interface = []; // For interface
const session = []; // Current session data

/* App */

app.update = function(evt) {
    const target = { row: parseInt(evt.target.dataset.row), property: evt.target.dataset.property, value: evt.target.value }
    const row = session.data[target.row];
    row[target.property] = target.value
}

/* Interface */
interface.Row = class {
    constructor(arr, Construct) {
        const row = document.createElement('tr');
        row.setAttribute('class', 'row');
        for (let i = 0; i < arr.length ; i++) {
            const obj = arr[i];
            const container = document.createElement('td');
            container.setAttribute('class', 'row');
            const field = document.createElement('input');
            field.setAttribute('type', 'text');
            field.setAttribute('class', 'field');
            field.dataset.row = session.rows.length;
            field.dataset.property = obj;
            field.addEventListener('blur', app.update)
            row.appendChild(field);
        };
        const data = new Construct();
        session.data.push(data);
        document.getElementById('app').appendChild(row);
        session.rows.push(row);
    }
}

interface.init = function(headers) {
    const header = document.createElement('tr');
    for (let i = 0; i < headers.length ; i++) {
        const value = headers[i];
        const el = document.createElement('th');
        el.innerText = value;
        header.appendChild(el);
    }
    document.getElementById('app').appendChild(header)
};

/* Session */
session.rows = [];
session.data = [];