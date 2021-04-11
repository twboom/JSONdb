// Easily test things
const test = [];
test.colums = 5;

test.run = function() {
    for (let i = 0; i < test.colums; i++) {
        new interface.Row(defaults.colums)
    }
}

test.run()