namespace testNameSpace {
    const inputInterpret: HTMLInputElement = <HTMLInputElement>document.getElementById("input.interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("input-price");
    const display: HTMLInputElement = <HTMLInputElement>document.querySelector("#display");
    const Eintragen: HTMLButtonElement = <HTMLButtonElement>document.querySelector("Eintragen");
    const Laden: HTMLButtonElement = <HTMLButtonElement>document.querySelector("Laden");
    const Löschen: HTMLButtonElement = <HTMLButtonElement>document.querySelector("Löschen");

    const tr = document.createElement("tr");
    const td = document.createElement("td");

    td.textContent = inputInterpret.value;
    td.textContent = inputPrice.value;

    const editBtn = document.createElement("button");
    editBtn.textContent = "remove";

    LadeButton();

    tr.appendChild(td);
    tr.appendChild(editBtn);
    tr.appendChild(Eintragen);
    tr.appendChild(Laden);



    Eintragen.addEventListener("click", EintragenButton)

    function EintragenButton() {
        let aktuellerWert; String = inputInterpret.value;
        localStorage.setItem("InputWert", aktuellerWert);
    }
    function LadeButton(){
        let wertLocalStorage: string = localStorage.getItem("aktuellerWert");
        inputInterpret.value= wertLocalStorage;
    }


}