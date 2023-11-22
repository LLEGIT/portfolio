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

  let sectionLinks = document.querySelectorAll(".section-link");
  sectionLinks.forEach((link) => {
    link.addEventListener("click", handleLinkClick);
  });
});

function toggleProjectView(project) {
  let imagePreview = project.querySelector("img");
  let imageHeight = imagePreview.offsetHeight;
  imagePreview.classList.toggle("hidden");

  let projectInfos = project.querySelector("div");
  projectInfos.style.height = imageHeight + "px";
  projectInfos.classList.toggle("hidden");
}

function resetProjectView(project) {
  let imagePreview = project.querySelector("img");
  imagePreview.classList.remove("hidden");

  let projectInfos = project.querySelector("div");
  projectInfos.classList.add("hidden");
}

function handleLinkClick(event) {
  let linkElement = event.target;
  let elementHref = linkElement.href;
  let targetId = elementHref.substring(elementHref.indexOf("#") + 1);

  let sectionLinks = document.querySelectorAll(".section-link");
  sectionLinks.forEach((link) => {
    if (link === linkElement) {
      return;
    }

    link.classList.remove("active");
    link.classList.remove("border-dashed");
  });

  let sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (section.id === targetId) {
      // Toggle the "hidden" class on the section
      section.classList.toggle("hidden");

      // Toggle the "active" and "border-dashed" classes on the clicked link
      linkElement.classList.toggle("active");
      linkElement.classList.toggle("border-dashed");
    } else {
      section.classList.add("hidden");
    }
  });
}
