const toggleList = document.getElementById("toggleList");
const listDiv = document.querySelector(".list");
const descriptionInput = document.querySelector("input.description");
const descriptionP = document.querySelector("p.description");
const descriptionButton = document.querySelector("button.description");
const listUl = document.querySelector(".list ul");
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

function updateButtons() {
  let buttons = document.querySelectorAll(".list li button");

  for (let i = 0; i < buttons.length; i++) {
    if (i === 0) {
      buttons[i].classList.add("disabled");
    } else if (i === buttons.length - 2) {
      buttons[i].classList.add("disabled");
    } else {
      buttons[i].classList.remove("disabled");
    }
  }
}

function attachListItemButtons(li) {
  let up = document.createElement("button");
  up.className = "up";
  up.textContent = "up";
  li.appendChild(up);

  let down = document.createElement("button");
  down.className = "down";
  down.textContent = "down";
  li.appendChild(down);

  let remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "remove";
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i++) {
  attachListItemButtons(lis[i]);
}

updateButtons();

firstListItem.style.backgroundColor = "grey";
lastListItem.style.backgroundColor = "darkGrey";

listUl.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    if (event.target.className == "remove") {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == "up") {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className == "down") {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
    updateButtons();
  }
});

toggleList.addEventListener("click", () => {
  if (listDiv.style.display == "none") {
    toggleList.textContent = "Hide list";
    listDiv.style.display = "block";
  } else {
    toggleList.textContent = "Show list";
    listDiv.style.display = "none";
  }
});

descriptionButton.addEventListener("click", () => {
  descriptionP.innerHTML = descriptionInput.value + ":";
  descriptionInput.value = "";
});

addItemButton.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.createElement("li");
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = "";
  updateButtons();
});
