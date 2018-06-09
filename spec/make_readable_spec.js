var makeReadable = require("../make_readable.js");

describe("Make_readable spec suite", function () {
    describe("Function returnes simplified HTML", function() {
        var valid_html = "<html><body><div><h1>Article</h1></h1></div>></body></html>";
        it ("returns valid HTML", function () {
            expect(makeReadable.make_readable(valid_html)).toContain('Article');
        })
    });
    describe("test", function () {
        it ('returns 4', function () {
            expect(2+3).toEqual(5);
        });
    })
});


