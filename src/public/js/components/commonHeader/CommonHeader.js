const element = document.createElement("h1");
element.classList.add("commonHeader");

const message = "foobar";
const letters = message.split("");

letters.forEach(letter => {
  const span = document.createElement("span");
  span.textContent = letter;
  span.classList.add("commonHeader__letter");
  element.appendChild(span);
});

document.body.appendChild(element);
