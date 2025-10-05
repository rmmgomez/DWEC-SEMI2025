import {convertBase64} from './utils.js';

const btnConvert = document.getElementById("btnConvert");
const imageFile = document.getElementById("imageFile");
const imgPreview = document.getElementById("imgPreview");

btnConvert.addEventListener('click', e => {
    const file = imageFile.files[0];
    convertBase64(file)
    .then((result) => imgPreview.src = result)
    .catch(error => console.log(error));    
});

