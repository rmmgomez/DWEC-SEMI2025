function onClick(e) {
    console.log(`Event ${e.type} on element ${this.id}`);
}

const btn1 = document.getElementById("btn1");
// btn1.addEventListener('click', function(e) {
//     console.log(`Event ${e.type} on element ${this.id}`)
// });
// btn1.addEventListener('click', (e) => {
//     console.log(`Event ${e.type} on element ${e.target.id}`)
// });
// RECOMENDADO
btn1.addEventListener('click', onClick);