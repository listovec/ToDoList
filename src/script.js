const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const total = document.querySelector("#total");

btn.addEventListener("click", (e) => {
  if (input.value === "") return;
  createDeleteElements(input.value);
  input.value = "";
});

function createDeleteElements(value) {
  const li = document.createElement("li");
  li.className = "li";
  li.textContent = value;

  const btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = "Delete";
  li.appendChild(btn);
  btn.addEventListener("click", (e) => {
    result.removeChild(li);
  });
  li.addEventListener("click", (e) => {
    li.classList.toggle("li-active");
  });

  result.appendChild(li);
}
