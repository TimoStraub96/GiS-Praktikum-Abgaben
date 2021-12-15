const datumEingabe: HTMLInputElement = <HTMLInputElement> document.getElementById("datumEingabe");
const sendenButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("Senden");
const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("Form");
const ausgabeHtml: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("Ausgabe");

const url: string = "http://127.0.0.1:3000";
const path: string = "/datumÄndern";

sendenButton.addEventListener("click", (evt: Event) => {
    evt.preventDefault();
    datumZumServerSenden();
});

async function datumAnfordern(url: RequestInfo): Promise<string> {
    let response: Response = await fetch(url);
    let date: string = await response.text();

    return date;
}

async function datumZumServerSenden(): Promise<void> {
    let inputValue: string = JSON.stringify(datumEingabe.value);
    let serverResponse: string = await datumAnfordern(url + path + `?date=${inputValue}`); 
    datumDOMHinzufügen(serverResponse); 
  }

async function datumDOMHinzufügen(serverResponse: string): Promise<void>  {
    let neuesDatum: HTMLElement = document.createElement("d");
    neuesDatum.className = "serverAntwort";
    neuesDatum.textContent = serverResponse;
    sendenButton.appendChild(neuesDatum);
}