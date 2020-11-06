import { ResponsiveMenu, hamburgerMenu } from "../JS/JS_Galeria.js";

document.addEventListener("DOMContentLoaded", (e) => {
  ResponsiveImgTrayectoria(
    ".imagsMiTrayectoria",
    ".imagsMiTrayectoriaMobile ",
    "(max-width: 768px)"
  );
  ResponsiveMenu("#boton-celu", "(min-width:1024px)");
});

function ResponsiveImgTrayectoria(original, replace, mq) {
  let $ori = document.querySelectorAll(original);
  let $replace = document.querySelectorAll(replace);

  if (window.matchMedia(mq).matches) {
    for (var i = 0; i < $ori.length; i++) {
      $ori[i].style.display = "none";
    }
    for (var j = 0; j < $replace.length; j++) {
      $replace[j].style.display = "block";
    }
  }
}
