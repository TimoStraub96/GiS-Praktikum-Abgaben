namespace aufgabe4{
    const table: HTMLElement = document.getElementById("table");
    const price: HTMLInputElement = <HTMLInputElement>document.querySelector("#price");
    const Interpret: HTMLInputElement = <HTMLInputElement>document.querySelector("#Interpret");
    const Speichern_Button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#Speichern_Button");

    function Speichern_Buttonusführen(interpretInput: string, priceInput: string, save: boolean): void {
        let priceValue: string = priceInput;
        let InterpretValue: string = interpretInput;
        let _Interpret: HTMLElement = document.createElement("td");
        _Interpret.textContent = InterpretValue;
        let _Price: HTMLElement = document.createElement("td");
        _Price.textContent = priceValue;
        let _Trash: HTMLElement = document.createElement("td");
        let Trash: HTMLButtonElement = document.createElement("button");
        Trash.textContent = "löschen";
    
        let Tabellenzeile: HTMLElement = document.createElement("tr"); 
        table.appendChild(Tabellenzeile);
        Tabellenzeile.appendChild(_Interpret);
        Tabellenzeile.appendChild(_Price);
        Tabellenzeile.appendChild(_Trash);
        _Trash.appendChild(Trash);

        if (save) {
            let speicherzeile: Event = {
                Interpret: _Interpret.textContent,
                price: _Price.textContent
            };
            zeilen.push(speicherzeile);

            speicherzeilen = JSON.stringify(zeilen);
            localStorage.setItem("speicherzeilen", speicherzeilen);
        }

        Trash.addEventListener("click", (): void => {
            table.removeChild(Tabellenzeile);
        });
    }
    
    interface Event {
        Interpret: string;
        price: string;
    }
    let zeilen: Event[] = [];
    let ladezeilen: Event[] = [];
    let speicherzeilen: string;

    window.addEventListener("load", (): void => {
        ladeTabelle();
    });

    Speichern_Button.addEventListener("click", (): void => {
        Speichern_Buttonusführen(Interpret.value, price.value, true);
        console.log(ladezeilen);
    });

    

    function ladeTabelle(): void {
        if(localStorage.length < 1)
            return;

        ladezeilen = JSON.parse(localStorage.getItem("speicherzeilen"));
        for(let i: number = 0; i < ladezeilen.length; i++) {
            Speichern_Buttonusführen(ladezeilen[i].Interpret, ladezeilen[i].price, false);
        }
        zeilen = ladezeilen;
        ladezeilen = [];
    }
}

 