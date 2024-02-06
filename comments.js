// Create web server
// Create a web server that serves up a static HTML file. Create a file called index.html and put some HTML in it. 
// Use the fs module to read in the HTML file and serve it back to the client.
// Reference: https://nodejs.org/api/fs.html

// Load the fs module
var fs = require('fs');
// Load the http module
var http = require('http');

// Create a server
var server = http.createServer(function (req, res) {
    // Read the file
    fs.readFile('index.html', function (err, data) {
        // Write the file to the response
        res.write(data);
        res.end();
    });
});

// Listen on port 8080
server.listen(8080);

// Log a message to the console
console.log('Server running at http://localhost:8080'); // Fix: Added closing quotation mark

