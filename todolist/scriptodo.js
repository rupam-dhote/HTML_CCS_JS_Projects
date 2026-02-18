const input = document.getElementById("inputbox");
const container = document.getElementById("list1");
const btn = document.getElementById("btn");
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // optional
    btn.click();
  }
});

function add() {
  if (input.value === "") {
    alert("You must write somthing");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    container.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  save();
}
container.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      save();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      save();
    }
  },
  false,
);

function save() {
  localStorage.setItem("data", container.innerHTML);
}
function show() {
  container.innerHTML = localStorage.getItem("data");
}

show();
