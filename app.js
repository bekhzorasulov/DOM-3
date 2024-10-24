const input = document.querySelector("input");
const text = document.querySelector("h3");
input.addEventListener("input", () => {
  text.style.fontSize = input.value + "px";
});
