function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "rose is rose",
    autoStart: true,
    delay: 100,
  });
  poemElement.innerHTML = "Rose is rose";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
