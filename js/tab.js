const tabs = document.querySelectorAll(".tab li");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Remove Active Class From Previous Tab
    tabs.forEach((tab) => tab.classList.remove("active"));

    // Active Class Form Tab
    tab.classList.add("active");

    // to Hide Previous tab content

    contents.forEach((c) => c.classList.remove("active"));

    // Show Content according to tab Selected
    contents[index].classList.add("active");
  });
});

// Deafult Select Tab

tabs[0].click();
