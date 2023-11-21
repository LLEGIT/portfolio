document.addEventListener("DOMContentLoaded", function () {
  let projectcContainers = document.querySelectorAll(".project");
  projectcContainers.forEach((project) => {
    project.addEventListener("click", function () {
      let previouslyOpened = document.querySelector(".clicked") ?? null;

      if (previouslyOpened) {
        previouslyOpened.classList.toggle("clicked");
        resetProjectView(previouslyOpened);
      }

      if (previouslyOpened === project) {
        toggleProjectView(project);
      } else {
        project.classList.toggle("clicked");
        toggleProjectView(project);
      }
    });
  });
});

function toggleProjectView(project) {
  let imagePreview = project.querySelector("img");
  imagePreview.classList.toggle("hidden");

  let projectInfos = project.querySelector("div");
  projectInfos.classList.toggle("hidden");
}

function resetProjectView(project) {
  let imagePreview = project.querySelector("img");
  imagePreview.classList.remove("hidden");

  let projectInfos = project.querySelector("div");
  projectInfos.classList.add("hidden");
}
