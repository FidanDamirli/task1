const addButton = document.getElementById("addButton");
addButton.addEventListener("click", function() {
  const fruitInput = document.getElementById("fruitInput");
  const fruitList = document.getElementById("fruitList");
  const newFruit = document.createElement("li");
  newFruit.textContent = fruitInput.value;
  fruitList.appendChild(newFruit);
  fruitInput.value = "";
});

const countButton = document.getElementById("countButton");
countButton.addEventListener("click", function() {
  const fruitList = document.getElementById("fruitList");
  const fruitCount = fruitList.getElementsByTagName("li").length;
  alert("Number of fruits: " + fruitCount);
});

const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", function() {
  const fruitList = document.getElementById("fruitList");
  if (fruitList.style.display === "none") {
    fruitList.style.display = "block";
  } else {
    fruitList.style.display = "none";
  }
});

function addNumbers(number) {
  const numberList = document.getElementById("numberList");
  for (let i = 1; i <= number; i++) {
    const newNumber = document.createElement("span");
    newNumber.textContent = i;
    if (i % 2 === 0) {
      newNumber.classList.add("orange");
    } else {
      newNumber.classList.add("green");
    }
    numberList.appendChild(newNumber);
  }
}

addNumbers(50);