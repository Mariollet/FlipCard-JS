let card = document.getElementById("js-card");
let btn = document.getElementById("btn");
let switching = false;

console.log(btn);
console.log(card);

card.onclick = () => {
  if (switching) {
    return false;
  }
  switching = true;

  card.classList.toggle("is-switched");
  window.setTimeout(function () {
    card.children[0].classList.toggle("is-active");
    switching = false;
  }, 500 / 2);
};
