const form = document.getElementById("disease-form");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    fetch("/predict", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        result.innerHTML = `You have ${data.disease} and probability that you may have that disease is ${data.probability}%`;
    })
    .catch(error => {
        console.error(error);
        result.innerHTML = "An error occurred. Please try again later.";
    });
});