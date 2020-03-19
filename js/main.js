var link = document.querySelector(".article__feedback-button");

var popup = document.querySelector(".modal-form");

var close = popup.querySelector(".modal-form__close");

var yourname = popup.querySelector("[name=name]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-form__show");
    yourname.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-form__show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-form__show")) {
            popup.classList.remove("modal-form__show");
        }
    }
});


var linkMap = document.querySelector(".article__map");

var popupMap = document.querySelector(".modal-map");

linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-form__show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupMap.classList.contains("modal-form__show")) {
            popupMap.classList.remove("modal-form__show");
        }
    }
});










