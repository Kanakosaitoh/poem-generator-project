function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "poem";

  new Typewriter("#poem", {
    strings: ["Hello"],
    autoStart: true,
    delay: 100,
    cursor: " ",
  });
}
let textElement = document.querySelector("#text-element");
textElement.addEventListener("submit", generatePoem);
