const nBtn = document.querySelector(".no-btn");
let left = 40;
nBtn.addEventListener("mouseover", function () {
  if (left == 40) {
    left = 44;
  } else {
    left = 40;
  }
  this.style.left = left + "%";
});

const yBtn = document.querySelector(".yes-btn");
const success = document.querySelector(".success-container");
const question = document.querySelector(".question-container");
yBtn.addEventListener("click", function (e) {
  e.preventDefault();
  question.style.display = "none";
  success.style.display = "flex";
  success.style.flexDirection = "column";
  success.style.position = "relative";
  success.style.height = "700px";
  success.style.width = "700px";
});
