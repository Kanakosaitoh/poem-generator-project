function displayPoem(response) {
  console.log("poem generated");
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
  let prompt = `Generate a canadian poem about ${instructionInput.value}`;
  let context =
    "make a Canadian poem in short 4 lines with <br /> between lines in HTML style";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("generating poem");
  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
