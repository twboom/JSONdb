// Easily test things
const test = [];
test.colums = 50;
test.arr = ["value 1", "value 2", "value 3", "value 4","value 1", "value 2", "value 3", "value 4","value 1", "value 2", "value 3", "value 4", "value 5"]

test.run = function() {
    interface.init(test.arr)
    for (let i = 0; i < test.colums; i++) {
        new interface.Row(test.arr)
    }
}

test.run()