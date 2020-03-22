var link = document.querySelector(".article__feedback-button");

var popup = document.querySelector(".modal-form");

var close = document.querySelectorAll(".modal-form__close");

var linkMap = document.querySelector(".article__map");

var popupMap = document.querySelector(".modal-map");

if (popup) {
  var yourname = popup.querySelector("[id=name]");

  var form = popup.querySelector(".modal-form__contact-form");

  var email = popup.querySelector("[id=mail]");

  var text = popup.querySelector("[id=message]");
}

var linkCart = document.querySelectorAll(".catalog__buy");

var popupCart = document.querySelector(".modal-cart");

var cartClose = document.querySelector(".modal-cart__continue");


if (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-form__show");
    if (yourname) {
      yourname.focus();
    }
  });
}

for (var i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    evt.target.parentElement.classList.remove("modal-form__show");
    evt.target.parentElement.classList.remove("modal-form__error");
  });
}

if (popup) {
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
}

if (popup) {
  form.addEventListener("submit", function (evt) {
    if (!yourname.value || !email.value || !text.value) {
      evt.preventDefault();
      popup.classList.remove("modal-form__error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-form__error");
      console.log("Заполните все поля");
    }
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-form__show")) {
      popup.classList.remove("modal-form__show");
      popup.classList.remove("modal-form__error");
    }
  }
});

if (linkMap) {
  linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-form__show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("modal-form__show")) {
      popupMap.classList.remove("modal-form__show");
    }
  }
});

if (linkCart) {
  for (var i = 0; i < linkCart.length; i++) {
    linkCart[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popupCart.classList.add("modal-form__show");
    });
  }
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupCart.classList.contains("modal-form__show")) {
      popupCart.classList.remove("modal-form__show");
    }
  }
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.remove("modal-form__show");
});








