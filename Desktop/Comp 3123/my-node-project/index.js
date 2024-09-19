// index.js
const http = require("http");
const employeeModule = require("./Employee");

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json'); // Set Content-Type for JSON responses

    if (req.method !== 'GET') {
        res.writeHead(405);
        res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
    } else {
        if (req.url === '/') {
            res.writeHead(200, {'Content-Type': 'text/html'}); // Set Content-Type for HTML responses
            res.end('<h1>Welcome to Lab Exercise 03</h1>');
        } else if (req.url === '/employee') {
            res.writeHead(200);
            res.end(JSON.stringify(employeeModule.getAllEmployees()));
        } else if (req.url === '/employee/names') {
            res.writeHead(200);
            res.end(JSON.stringify(employeeModule.getEmployeeNames()));
        } else if (req.url === '/employee/totalsalary') {
            res.writeHead(200);
            res.end(JSON.stringify(employeeModule.getTotalSalary()));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
        }
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
