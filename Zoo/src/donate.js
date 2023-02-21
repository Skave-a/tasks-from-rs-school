let form = document.querySelector(".donate__back");
let log = document.querySelector("#log");

log.value = 100;

form.addEventListener("change", (event) => {
  let data = new FormData(form);
  let output = "";
  for (const entry of data) {
    output = entry[1];
  };

  log.value = output;
  event.preventDefault();
}, false);

log.oninput = function () {
  this.value = this.value.substr(0, 4);
}

function getSum() {
  let rangeRadio = document.querySelectorAll(".input-reset");
  rangeRadio.forEach(el => {
    log.addEventListener('keyup', () => {
      if (log.value == el.value) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    })
  })
}
getSum()