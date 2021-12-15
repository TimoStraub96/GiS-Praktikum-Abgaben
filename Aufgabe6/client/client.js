"use strict";
const datumEingabe = document.getElementById("datumEingabe");
const Antwort = document.getElementById("Antwort");
const sendenButton = document.getElementById("Senden");
const url = "http://127.0.0.1:3000";
const path = "/datumÄndern";
sendenButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    datumZumServerSenden();
});
async function datumAnfordern(url) {
    let response = await fetch(url);
    let date = await response.text();
    return date;
}
async function datumZumServerSenden() {
    let inputValue = JSON.stringify(datumEingabe.value);
    let serverResponse = await datumAnfordern(url + path + `?date=${inputValue}`);
    datumDOMHinzufügen(serverResponse);
}
async function datumDOMHinzufügen(serverResponse) {
    let neuesDatum = document.createElement("d");
    neuesDatum.className = "serverAntwort";
    neuesDatum.textContent = serverResponse;
    sendenButton.appendChild(neuesDatum);
}
//# sourceMappingURL=client.js.map