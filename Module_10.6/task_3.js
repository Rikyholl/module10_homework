const sendBtn = document.querySelector('.sendBtn');
const geoBtn = document.querySelector('.geoBtn');
const blockMesseges = document.querySelector('.blockMesseges');


let websocket;

let mapLink = '', link = '';

function writeMsgServer(message){

    let messages_server = ' ';

    let showMessage = `
        <div class="messegeServer msgStyle"> ${message} </div>
    `;

    messages_server = showMessage;

    blockMesseges.innerHTML += messages_server;
}

function writeMsgSender(msgSend){

    let messages_sender = ' ';

    let showMessageSend = `
        <div class="messegeSender msgStyle"> ${msgSend} </div>
    `;

    messages_sender = showMessageSend;
    blockMesseges.innerHTML += messages_sender;
}

function getGeolocation(position){

    console.log(position);
    const latitude = position.coords.latitude; // Широта
    const longitude = position.coords.longitude; // Долгота

    mapLink = `https://www.openstreetmap.org/#map=15/${latitude}/${longitude}`;

    link = `
        <a href="${mapLink}" class="messegeSender msgStyle"> Данные о вашем местоположении </a>
    `;

    blockMesseges.innerHTML += link;
}

function error(err) {
    
    console.warn(`ERROR(${err.code}): ${err.message}`);

};

sendBtn.addEventListener('click', function(){

    const inputText = document.querySelector('.inputText').value;

    websocket = new WebSocket('wss://echo-ws-service.herokuapp.com');

    if (inputText){

        writeMsgSender(inputText);

        websocket.onopen = function (evt){
           websocket.send(inputText);
        };
        websocket.onmessage = function (evt){
            writeMsgServer(evt.data);
        };
       
        websocket.onerror = function (evt) {
            writeMsgServer(`Данные не получены: ${evt.data}`);
        };

    } 
});


geoBtn.addEventListener('click', function (){

    websocket.close();

    if (!navigator.geolocation){

        status.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
        let geo = navigator.geolocation.getCurrentPosition(getGeolocation, error);

       
       websocket.onopen = function (e){
            websocket.send(geo);
       };
       websocket.onmessage = function (e){
            getGeolocation(e);
        };
        websocket.onerror = function (evt) {
            writeMsgServer(`Данные не получены: ${evt.data}`);
        };
    }
});