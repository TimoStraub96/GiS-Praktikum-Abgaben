import * as http from "http";

const hostname: string = "127.0.0.1";
const port: number = 3000;

const server: http.Server = http.createServer (
    (request: http.IncomingMessage, response: http.ServerResponse) => {

        response.statusCode = 200;

        response.setHeader("Content-Type", "text/plain");
        response.setHeader("Acces-Control-Allow-Origin", "*");


        let url: URL = new URL(request.url || "", `http://${request.headers.host}`); 
        switch (url.pathname) { 
          case "/":
            response.write("Server erreichbar");
            break;
          case "/convertDate":
            let sentDate: string = url.searchParams.get("date") || "";
            response.end(datumAnpassenUndAusgeben(sentDate)); 
            break;
          default:
            response.statusCode = 404; 
        }  
        response.end(); 
      }
  );

function datumAnpassenUndAusgeben(date: string): string {
    return "Tag:" + date.substring(9, 11) + ", " + "Monat:" + date.substring(6, 8) + ", " + "Jahr:" + date.substring(1, 5);
}
server.listen(port, hostname, () => {
    console.log(`Server läuft auf http://${hostname}:${port}/`);
});
// Server starten mit der folgenden Konsoleneingabe: node ./Aufgabe6/server/server.js