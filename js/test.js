// Easily test things
const test = [];
test.colums = 100;
test.arr = ["value 1", "value 2", "value 3", "value 4", "value 5"]

test.run = function() {
    interface.init(defaults.colums)
    for (let i = 0; i < test.colums; i++) {
        new interface.Row(defaults.colums, defaults.Obj)
    }
}

test.run()