const form = document.getElementById("formPersona");
const imgPreview = document.getElementById("imgPreview");
const usersTable = document.getElementById("users"); 

form.avatar.addEventListener('change', event => {
    let file = event.target.files[0];
    if(file) {
        imgPreview.src = URL.createObjectURL(file);
    }
});

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Impedimos que se recargue la página

    // Podríamos enviar directamente esto al servidor
    const formData = new FormData(form);
    formData.set("creado", new Date()); // Se pueden añadir nuevos valores
    console.log(formData.get("nombre")); // valor del input "nombre"
    console.log(formData.getAll("hobbies")); // Valor múltiple "checkbox"

    console.log(formData.get("avatar"));
    // Resto del código

    const tr = document.createElement("tr");
    const tdAvatar = document.createElement("td");
    const avatar = document.createElement("img");
    avatar.src = imgPreview.src;

    avatar.addEventListener('load', e => URL.revokeObjectURL(avatar.src));

    tdAvatar.append(avatar);
    const tdNombre = document.createElement("td");
    tdNombre.append(formData.get("nombre"));
    const tdHobbies = document.createElement("td");
    tdHobbies.append(formData.getAll("hobbies").toString());

    tr.append(tdAvatar, tdNombre, tdHobbies);
    usersTable.querySelector("tbody").append(tr);

    form.reset(); // Limpia los campos del formulario
    imgPreview.src = "";
});