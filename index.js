const board = document.querySelector("#board");
const SQ_NUM = 1520;
const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  r = r > 100 ? r : 250;
  g = g > 100 ? g : 250;
  b = b > 100 ? b : 250;

  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
};

for (let i = 0; i < SQ_NUM; i++) {
  const qs = document.createElement("div");
  qs.classList.add("square");
  qs.addEventListener("mouseover", setColor);
  qs.addEventListener("mouseleave", removeColor);
  board.append(qs);
}

function setColor(el) {
  el.target.style.backgroundColor = `${randomColor()}`;
  el.target.style.boxShadow = `0 0 2px ${randomColor()}, 0 0 10px ${randomColor()}`;
}
function removeColor(el) {
  el.target.style.backgroundColor = "#1d1d1d";
  el.target.style.boxShadow = "0 0 2px #1d1d1d";
}
