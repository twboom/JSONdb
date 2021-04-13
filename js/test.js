// Easily test things
const test = [];
test.colums = 5;
test.arr = ["name", "slug", "extension"];
test.Obj = class {
    constructor() {
        this.name = undefined;
        this.slug = undefined;
        this.extension = undefined;
    }
}

test.run = function() {
    interface.init(test.arr)
    for (let i = 0; i < test.colums; i++) {
        new interface.Row(test.arr, test.Obj);
    }
}

test.run()