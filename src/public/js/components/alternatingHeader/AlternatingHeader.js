const element = document.createElement("h1");
element.classList.add("alternatingHeader");

const message = "foobar";
const letters = message.split("");

letters.forEach(letter => {
  const span = document.createElement("span");
  span.textContent = letter;

  const random = Math.random();

  if (random >= 0.85) {
    span.classList.add("alternatingHeader__letter--green");
  } else if (random >= 0.45 && random < 0.85) {
    span.classList.add("alternatingHeader__letter--blue");
  } else if (random >= 0.25 && random < 0.45) {
    span.classList.add("alternatingHeader__letter--red");
  } else {
    span.classList.add("alternatingHeader__letter--yellow");
  }

  element.appendChild(span);
});

document.body.appendChild(element);
