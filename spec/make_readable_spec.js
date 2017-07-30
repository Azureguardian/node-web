var makeReadable = require("../make_readable.js");

describe("Make_readable spec suite", function () {
    describe("Function returnes simplified HTML", function() {
        var valid_html = "<html><body></body></html>";
        it ("returns valid HTML", function () {
            expect(makeReadable.make_readable(valid_html)).toBeDefined();
        })
    });
});

