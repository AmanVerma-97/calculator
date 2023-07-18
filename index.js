

let input = document.getElementById("input");
const buttons = document.querySelectorAll(".part4");

function clear() {
  input.innerHTML = "";
}

function addNumber(number) {
  input.innerHTML += number;
}

function calculate() {
  let result = eval(input.innerHTML);
  input.innerHTML = result;
}

buttons.forEach(button => {
  button.onclick = () => {
    switch (button.textContent) {
      case "AC":
        clear();
        break;
      case "C":
        input.innerHTML = input.innerHTML.slice(0, -1);
        break;
      case "=":
        calculate();
        break;
      default:
        addNumber(button.textContent);
        break;
    }
  };
});