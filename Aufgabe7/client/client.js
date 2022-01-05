"use strict";
var client;
(function (client) {
    const table = document.getElementById("table");
    const artistInput = (document.getElementById("artist"));
    const priceInput = (document.getElementById("price"));
    const dateInput = (document.getElementById("date"));
    const submit = (document.getElementById("submit"));
    const _url = "http://localhost:3000/";
    const portSingle = "concertEvent";
    const portAll = "concertEvents";
    let eventsFromServer = [];
    window.addEventListener("load", () => {
        getEventsFromServer();
    });
    submit.addEventListener("click", onSubmitEvent);
    async function getEventsFromServer() {
        let response = await fetch(_url + portAll);
        let text = await response.text();
        eventsFromServer = JSON.parse(text);
        console.log(eventsFromServer);
        for (let i = 0; i < eventsFromServer.length; i++) {
            createEvent(eventsFromServer[i].artist, eventsFromServer[i].price, eventsFromServer[i].date, eventsFromServer[i].time);
        }
    }
    async function onSubmitEvent(event) {
        event.preventDefault();
        let concertEvent = {
            index: eventsFromServer.length - 1,
            artist: artistInput.value,
            date: dateInput.value.substring(0, 10),
            time: dateInput.value.substring(11, 16),
            price: priceInput.value
        };
        eventsFromServer.push(concertEvent);
        console.log(concertEvent);
        createEvent(concertEvent.artist, concertEvent.price, concertEvent.date, concertEvent.time);
        sendJSONStringWithPost(_url + portSingle, JSON.stringify(concertEvent));
        setTimeout(() => {
            clearInput();
        }, 100);
    }
    async function sendJSONStringWithPost(url, jsonString) {
        await fetch(url, {
            method: "POST",
            body: jsonString
        });
        console.log("event sent");
    }
    function createEvent(artistText, priceText, dateText, timeText) {
        let tableRow = document.createElement("tr");
        let artist = document.createElement("td");
        artist.textContent = artistText;
        let price = document.createElement("td");
        price.textContent = priceText;
        let date = document.createElement("td");
        date.textContent = dateText;
        let time = document.createElement("td");
        time.textContent = timeText;
        let trashContainer = document.createElement("td");
        let trash = document.createElement("i");
        trash.className = "trash";
        table.appendChild(tableRow);
        tableRow.appendChild(artist);
        tableRow.appendChild(date);
        tableRow.appendChild(time);
        tableRow.appendChild(price);
        tableRow.appendChild(trashContainer);
        trashContainer.appendChild(trash);
        trash.addEventListener("click", () => {
            table.removeChild(tableRow);
        });
    }
    function clearInput() {
        artistInput.value = "";
        priceInput.value = "";
        dateInput.value = "";
    }
})(client || (client = {}));
//# sourceMappingURL=client.js.map