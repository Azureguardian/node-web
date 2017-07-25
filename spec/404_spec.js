var request = require("request");
var server = require("../server.js");
var base_url = "http://localhost:3000/";
var dummy_url = "index.html";

describe("Hello World Server", function() {
    describe("GET /", function() {
        it("returns status code 404", function(done) {
            request.get(base_url+dummy_url, function(error, response) {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
});
