let popupButton = document.getElementById("popupButton");
let popupWin = document.getElementById("popupWin");
let blackBack = document.getElementById("black");
let popupSend = document.getElementById("popupSend");
let valueDiv = document.getElementById("valueDiv");
let closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", function() {
    popupWin.classList.remove("show");
    blackBack.classList.remove("showBlock");
})

blackBack.addEventListener("click", function() {
    popupWin.classList.remove("show");
    blackBack.classList.remove("showBlock");
})

popupButton.addEventListener("click", function() {
    popupWin.classList.add("show");
    blackBack.classList.add("showBlock");
});

popupSend.addEventListener("click", function() {
    popupWin.classList.remove("show");
    blackBack.classList.remove("showBlock");
    var info = {};
    info['name'] = document.forms['popupForm'].elements['name'].value;
    info['phone'] = document.forms['popupForm'].elements['phone'].value;
    info['email'] = document.forms['popupForm'].elements['email'].value;
    info['work'] = document.forms['popupForm'].elements['work'].value;
    info['accept'] = document.forms['popupForm'].elements['accept'].checked;
    p = document.createElement("p");
    p.innerHTML += 'Имя: ' + info['name'] + '<br>';
    p.innerHTML += 'Номер телефона: ' + info['phone'] + '<br>';
    p.innerHTML += 'Email: ' + info['email'] + '<br>';
    p.innerHTML += 'Компания: ' + info['work'] + '<br>';
    p.innerHTML += 'Согласие на обработку ' + info['accept'] + '<br>';
    info = JSON.stringify(info);
    popupButton.remove();
});


