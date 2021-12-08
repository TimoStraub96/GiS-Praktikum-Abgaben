"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.setHeader("Access-Control-Allow-Origin", "*"); 
    
    let url = new URL(request.url || "", `http://${request.headers.host}`);
    switch (url.pathname) { 
        case "/": 
            response.write("Server erreichbar");
            break;
        case "/convertDate":
            if (request.method === "POST") {
                let jsonString = "";
                request.on("data", (data) => {
                    jsonString += data;
                });
                request.on("end", () => {
                    console.log(JSON.parse(jsonString));
                });
            }
            break;
        default:
            response.statusCode = 404; 
            break;
    }
    response.end();
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

