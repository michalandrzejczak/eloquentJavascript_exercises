var mediaTypes = ["text/plain", "text/html", "application/json"];
var http = require("http");
mediaTypes.forEach(function(type) {
    var request = http.request({
    hostname: "eloquentjavascript.net",
    path: "/author.html",
    method: "GET",
    headers: {Accept: type}
}, function(response) {
    response.on("data", function(chunk) {
        process.stdout.write(chunk);
    });
});
request.end("Hello author!");
});
