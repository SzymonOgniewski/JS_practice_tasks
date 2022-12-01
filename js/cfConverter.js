const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

const swap = () => {
  if (one.textContent === "°C") {
    one.textContent = "°F";
    two.textContent = "°C";
  } else {
    one.textContent = "°C";
    two.textContent = "°F";
  }
};

const conversion = () => {
  const inputValue = parseInt(converter.value);
  let t;
  if (converter.value === "") {
    result.textContent = "Musisz podać jakąś wartość!";
  } else if (one.textContent === "°C") {
    t = inputValue * 1.8 + 32;
    result.textContent = `${inputValue}°C to ${t}°F`;
  } else {
    t = (inputValue - 32) / 1.8;
    result.textContent = `${inputValue}°F to ${t}°C`;
  }
};

const reset = () => {
  converter.value = "";
  result.textContent = "";
};

resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", swap);
convBtn.addEventListener("click", conversion);
