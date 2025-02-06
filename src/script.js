function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#user-instruction");

  let apiKey = "821b2a703ac1t98f96395477546f6ebo";
  let prompt = `Generate a Canadian poem about ${instructionInput.value}`;
  let context =
    "You are a smart AI and like to make a short 4-line-Canadian poem with <br /> between lines in HTML style. please refrain from using backticks or a word of html in the poem.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink_me">Generating a Canadian poem about ${instructionInput.value}...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
