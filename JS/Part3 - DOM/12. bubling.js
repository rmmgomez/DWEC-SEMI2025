let divClick = function (event) {
  // eventPhase: 1 -> capture, 2 -> target (objetivo), 3 -> bubble
  console.log(
    "Has pulsado: " +
      this.id +
      ". Fase: " +
      event.eventPhase +
      ". Target: " +
      event.target.id
  );
//   event.stopPropagation();
};

let div1 = document.getElementById("verd");
let div2 = document.getElementById("red");
let div3 = document.getElementById("blue");

/* div1.addEventListener("click", divClick);
div2.addEventListener("click", divClick);
div3.addEventListener("click", divClick); */

/* div1.addEventListener("click", divClick, true);
div2.addEventListener("click", divClick, true);
div3.addEventListener("click", divClick, true); */
