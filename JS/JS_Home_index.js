import { hamburgerMenu, ResponsiveMenu } from "./JS_Galeria.js";

document.addEventListener("DOMContentLoaded", (e) => {
  ScrollName(".MarisaNapiHome", ".barraHome", "(min-width:1024px)");
  ArrowScroll("#botSwipe", ".barraHome");
  ResponsiveMenu("#boton-celu", "(min-width:1024px)");
  Responsive("#Fondo", "(min-width: 320px)");
  ResponsiveVideo("#video", "(max-width: 768px)");
});

function ScrollName(name, when, mq) {
  let $theName = document.querySelector(name);
  let $theWhen = document.querySelector(when);

  window.addEventListener("scroll", (e) => {
    if (window.matchMedia(mq).matches) {
      if (
        $theWhen.getBoundingClientRect().top >
        $theName.getBoundingClientRect().top
      ) {
        $theName.classList.remove("change-color");
      } else {
        $theName.classList.add("change-color");
      }
    }
  });
}

function ArrowScroll(btn, to) {
  let $btn = document.querySelector(btn);
  let $to = document.querySelector(to);

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($to.getBoundingClientRect().top < window.innerHeight) {
        let calc = window.innerHeight - $to.getBoundingClientRect().top;

        window.scrollTo(0, $to.getBoundingClientRect().top + calc);
      } else {
        window.scrollTo(0, $to.getBoundingClientRect().top);
      }
    }
  });
}

function ResponsiveVideo(id, mq) {
  if (window.matchMedia(mq).matches) {
    document.querySelector(id).style.width = `${window.innerWidth}px`;
    document.querySelector(id).style.height = `${window.innerWidth / 2}px`;
  }
}
function Responsive(id, mq) {
  if (window.matchMedia(mq).matches) {
    document.querySelector(id).style.width = `${window.innerWidth}px`;
  }
}
