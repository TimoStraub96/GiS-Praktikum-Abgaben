namespace testNameSpace
    const inputInterpret: HTMLInputElement = <HTMLInputElement>document.getElementById("input.interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("input-price");
    const display: HTMLInputElement = <HTMLInputElement>document.querySelector("#display");
    const myButton: HTMLInputElement = <HTMLButtonElement>document.querySelector("#machEtwas");

    const tr = document.createElement("tr");
    const td = document.createElement("td");

    td.textContent = inputInterpret.value;
    td.textContent = inputPrice.value;

    const editBtn = document.createElement("button");
    editBtn.textContent = "remove";

    tr.appendChild(td);
    tr.appendChild(editBtn);
    tr.appendChild(removeBtn);

    