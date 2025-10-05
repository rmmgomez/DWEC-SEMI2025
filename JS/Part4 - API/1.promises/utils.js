export function convertBase64(file) {
    if(!file || !(file instanceof File)) {
        return Promise.reject("The argument must be a valid File!");
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // Serializar en base64

    return new Promise((resolve, reject) => {
        fileReader.addEventListener('load', e => {// Serialización terminada
            resolve(fileReader.result);// Datos en Base64
        });

        fileReader.addEventListener('error', e => reject("Error converting to Base64"));
    });
}