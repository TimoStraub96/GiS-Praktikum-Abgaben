namespace testNameSpace {
    const inputInterpret: HTMLInputElement = <HTMLInputElement>document.getElementById("inputInterpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("inputPrice");
    const display: HTMLElement = <HTMLElement>document.querySelector("#display");
    const myButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#machEtwas")


    myButton.addEventListener("click", ():void=> {
        createTr();
    } );
    
    function createTr() {
    const tr =document.createElement("tr");
    const td = document.createElement("td");

    td.textContent = inputInterpret.value;
    td.textContent = inputPrice.value;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";

    tr.appendChild(td);
    tr.appendChild(removeBtn);
    }

    
    let arrayFromStorageAsString: string = localStorage.getItem("localStorageElement");
    let numbersArray: number[] = JSON.parse(arrayFromStorageAsString);
    console.log(numbersArray);

    myButton.addEventListener("click", mybuttonHandler);
    console.log(inputInterpret);
    console.log(inputPrice);
    

    let array: number[] = [12, 15, 17, 20];
    let arrayString: string = JSON.stringify(array);

    localStorage.setItem("localStorageElement", arrayString);

    function mybuttonHandler() {
        let interpretValue = inputInterpret.value;
        let priceValue: number = Number(inputPrice.value);
        
        let arrayFromStorageAsString: string = localStorage.getItem("localStorageElement");
        let numbersArray: number[] = JSON.parse(arrayFromStorageAsString);
        console.log(numbersArray);

        console.log(numbersArray[0] * numbersArray[2]);

      
        let newElement = document.createElement("div");
        newElement.textContent = interpretValue + "; " + priceValue;
        display.appendChild(newElement);
    }
}

