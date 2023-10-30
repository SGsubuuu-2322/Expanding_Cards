const panels = document.querySelectorAll(".panel");

// This script is written for adding active class dynamically in the panel when clicked...
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});

// This script is written for removing all active class from all the panel except the current one which is clicked...
function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
