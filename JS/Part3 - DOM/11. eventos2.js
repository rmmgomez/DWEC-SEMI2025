const div = document.getElementById("div1");
const div2 = document.getElementById("div2");

div.addEventListener("mousemove", (e) => {
  const x = e.pageX - div.offsetLeft;
  const y = e.pageY - div.offsetTop;
  div.textContent = `${x}, ${y}`;
});

div2.addEventListener("mousemove", (e) => {
    const red = e.pageY - div2.offsetTop;
    const green = e.pageX - div2.offsetLeft;
    const blue = 255 - e.pageX - div2.offsetLeft;
    div2.style.backgroundColor = `rgb(${red},${green},${blue})`;
});
