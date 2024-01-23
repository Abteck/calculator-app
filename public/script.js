const input_1 = document.getElementById("first");
const input_2 = document.getElementById("second");
const input_3 = document.getElementById("third");
const calculator = document.getElementsByClassName("calculator");

const toggle = document.querySelectorAll(".toggle");

// theme switcher
toggle.forEach((i) => {
  i.addEventListener("click", () => {
    if (i.classList.contains("light")) {
      document.querySelector("html").setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else if (i.classList.contains("dark")) {
      document.querySelector("html").setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "normal");
      localStorage.setItem("theme", "normal");
    }
  });
});

// save initial theme in the browser
window.onload = function checkTheme() {
  const localStorageTheme = localStorage.getItem("theme");

  // lightMode
  if (localStorageTheme !== null && localStorageTheme === "light") {
    document.querySelector("html").setAttribute("data-theme", "light");
    input_2.checked = true;

    // darkMode
  } else if (localStorageTheme !== null && localStorageTheme === "dark") {
    document.querySelector("html").setAttribute("data-theme", "dark");
    input_3.checked = true;

    // defaultMode
  } else {
    document.querySelector("html").setAttribute("data-theme", "normal");
    input_1.checked = true;
  }
};

const output = document.querySelector(".output");
// display value
function display(val) {
  const result = output.value;
  if (
    result.includes("+*") ||
    result.includes("+/") ||
    result.includes("+.") ||
    result.includes("++") ||
    result.includes("+-") ||
    result.includes("--") ||
    result.includes("-.") ||
    result.includes("..") ||
    result.includes("**") ||
    result.includes("//")
  ) {
    output.value = output.value.slice(0, -1);
  } else {
    output.value += val;
  }
}

function handleSolve(val) {
  let x = output.value;
  let y = eval(x);
  output.value = y;
}

function handleReset(val) {
  output.value = "";
}

function handleDelete() {
  output.value = output.value.slice(0, -1);
}
