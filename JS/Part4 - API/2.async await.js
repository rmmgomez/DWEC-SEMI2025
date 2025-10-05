function sumPromise(n1, n2, time = 2000) {
    if(n1 < 0 || n2 < 0) {
        return Promise.reject("Can't add negative numbers");
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n1 + n2), time);
    });
}

async function executeSum(n1, n2) {
    try {
        const result = await sumPromise(n1, n2, 2000);
        console.log(result);
    } catch(e) {
        console.log(e);
    }
}

// const r = await executeSum(); // Dangerous
// console.log(r);

executeSum(4, 7);
executeSum(4, -7);

document.getElementById("btn").addEventListener("click", e => {
    document.getElementById("p1").textContent = "Hello world!";
});

