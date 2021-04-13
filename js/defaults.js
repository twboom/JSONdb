/*
This file contains the default values and config of JSONdb
*/

const defaults = []; // Default values

/* Default values */
defaults.colums = ["name", "value", "value2"]

defaults.Obj = class {
    constructor(name, value, value2) {
        this.name = name;
        this.value = value;
        this.value2 = value2;
    }
}