export function changeDOM() {
  const taskButton = document.getElementById("create-task-button");
  const projectModal = document.getElementById("modal-container");
  const projectSubmit = document.getElementById("add-project");

  taskButton.addEventListener("click", () => {
    if (projectModal.style.display === "block") {
      projectModal.style.display = "none";
      console.log("open");
    } else {
      projectModal.style.display = "block";
      console.log("closed");
    }
  });

  projectSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("submitted");
  });
}
