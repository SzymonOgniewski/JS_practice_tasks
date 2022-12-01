const sizeUpBtn = document.querySelector(".sizeUp");
const sizeDownBtn = document.querySelector(".sizeDown");
const colorChangeBtn = document.querySelector(".color");
const text = document.querySelector("p");

const textStyles = getComputedStyle(text);

const sizeUp = () => {
  let currentFontSize = textStyles.fontSize;
  let cfsParsed = parseInt(currentFontSize);
  if (cfsParsed < 72) {
    let changedFs = cfsParsed + 4;
    text.style.fontSize = `${changedFs}px`;
    console.log(changedFs);
  }
};

const sizeDown = () => {
  let currentFontSize = textStyles.fontSize;
  let cfsParsed = parseInt(currentFontSize);
  if (cfsParsed > 16) {
    let changedFs = cfsParsed - 4;
    text.style.fontSize = `${changedFs}px`;
    console.log(changedFs);
  }
};

const colorChange = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  text.style.color = `#${randomColor}` || `#ffffff`;
};
colorChangeBtn.addEventListener("click", colorChange);
sizeUpBtn.addEventListener("click", sizeUp);
sizeDownBtn.addEventListener("click", sizeDown);
