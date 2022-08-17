const btnEl = document.getElementById('btn');
const body = document.querySelector('body');
const hex =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorValue = document.querySelector('.color');

btnEl.addEventListener('click', () => {
    let hexCode = "#";
     for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hex.length);
    hexCode += hex[index];
  }
   hexCode.innerHTML = hexCode;
   colorValue.innerHTML = hexCode;

  body.style.backgroundColor = hexCode;
  body.style.transition = "1s";
});

