"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.setHeader("Acces-Control-Allow-Origin", "*");
    let url = new URL(request.url || "", `http://${request.headers.host}`);
    switch (url.pathname) {
        case "/":
            response.write("Server erreichbar");
            break;
        case "/convertDate":
            let sentDate = url.searchParams.get("date") || "";
            response.end(datumAnpassenUndAusgeben(sentDate));
            break;
        default:
            response.statusCode = 404;
    }
    response.end();
});
function datumAnpassenUndAusgeben(date) {
    return "Tag:" + date.substring(9, 11) + ", " + "Monat:" + date.substring(6, 8) + ", " + "Jahr:" + date.substring(1, 5);
}
server.listen(port, hostname, () => {
    console.log(`Server läuft auf http://${hostname}:${port}/`);
});
//# sourceMappingURL=server.js.map