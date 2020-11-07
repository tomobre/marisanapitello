document.addEventListener("DOMContentLoaded", (e) => {
  ResponsiveMenu("#boton-celu", "(min-width:1024px)");
  hamburgerMenu(".panel-btn", ".panel", "#NavBar a");
  Images("#img-1", "#backFromImg");
  Images("#img-2", "#backFromImg");
  Images("#img-3", "#backFromImg");
  Images("#img-4", "#backFromImg");
  Images3("#img-5", "#backFromImg");
  Images3("#img-6", "#backFromImg");
  Images2("#img-7", "#backFromImg");
  Images("#img-8", "#backFromImg");
  Images("#img-9", "#backFromImg");
  Images2("#img-10", "#backFromImg");
});

function Images(image, background) {
  let $image = document.querySelector(image);
  let $back = document.querySelector(background);

  document.addEventListener("click", (e) => {
    if (e.target.matches(image)) {
      $image.classList.toggle("image-bigger");
      $back.classList.toggle("back-from-img");
    }
    if (e.target.matches(background)) {
      $image.classList.remove("image-bigger");
      $back.classList.remove("back-from-img");
    }
  });
}

function Images2(image, background) {
  let $image = document.querySelector(image);
  let $back = document.querySelector(background);

  document.addEventListener("click", (e) => {
    if (e.target.matches(image)) {
      $image.classList.toggle("image-bigger-dif-tall");
      $back.classList.toggle("back-from-img");
    }
    if (e.target.matches(background)) {
      $image.classList.remove("image-bigger-dif-tall");
      $back.classList.remove("back-from-img");
    }
  });
}

function Images3(image, background) {
  let $image = document.querySelector(image);
  let $back = document.querySelector(background);

  document.addEventListener("click", (e) => {
    if (e.target.matches(image)) {
      $image.classList.toggle("image-bigger-dif");
      $back.classList.toggle("back-from-img");
    }

    if (e.target.matches(background)) {
      $image.classList.remove("image-bigger-dif");
      $back.classList.remove("back-from-img");
    }
  });
}

function hamburgerMenu(panelBtn, panel, menuLink) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}

function ResponsiveMenu(id, mq) {
  if (window.matchMedia(mq).matches) {
    document.querySelector(id).style.display = "none";
  }
}

export { ResponsiveMenu, hamburgerMenu };

