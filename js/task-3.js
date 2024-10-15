//Напиши скрипт, який

//під час набору тексту в інпуті input#name - input(подія input) підставляє його поточне значення в span#name - output
//Обовязково очищай значення в інпуті по краях від пробілів.
//Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".


const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
    const trimmedContent = event.currentTarget.value.trim();
    //  if (trimmedContent === "") {
    //     output.textContent = "Anonymous"; 
    // } else {
    //     output.textContent = trimmedContent; 
    // }
    output.textContent = trimmedContent === "" ? "Anonymous" : trimmedContent;
});




