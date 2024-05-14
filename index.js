const app_element = document.getElementById("app");

const header = document.createElement("h1");

const text = "Project 1";

header.innerText = text;

app_element.appendChild(header);

setTimeout(() => {
  header.innerText = "Hello";
}, 2000);
