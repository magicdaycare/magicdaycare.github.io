document.addEventListener("DOMContentLoaded", () => {
  console.log("Script file is loaded.");

  // Add classes for mobile navigation toggling
  var CSbody = document.querySelector("body");
  const CSnavbarMenu = document.querySelector("#cs-navigation");
  const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

  console.log(CShamburgerMenu);

  if (CShamburgerMenu) {
    CShamburgerMenu.addEventListener("click", function () {
      CShamburgerMenu.classList.toggle("cs-active");
      CSnavbarMenu.classList.toggle("cs-active");
      CSbody.classList.toggle("cs-open");
      // Run the function to check the aria-expanded value
      ariaExpanded();
    });
  } else {
    console.error("CShamburgerMenu not found in the DOM.");
  }

  // Function to toggle aria-expanded value
  function ariaExpanded() {
    const csUL = document.querySelector("#cs-expanded");
    const csExpanded = csUL.getAttribute("aria-expanded");

    if (csExpanded === "false") {
      csUL.setAttribute("aria-expanded", "true");
    } else {
      csUL.setAttribute("aria-expanded", "false");
    }
  }

  // Add scroll event listener
  document.addEventListener("scroll", (e) => {
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
      document.querySelector("body").classList.add("scroll");
    } else {
      document.querySelector("body").classList.remove("scroll");
    }
  });

  // Mobile nav dropdown toggle code
  const dropDowns = Array.from(
    document.querySelectorAll("#cs-navigation .cs-dropdown")
  );
  for (const item of dropDowns) {
    const onClick = () => {
      item.classList.toggle("cs-active");
    };
    item.addEventListener("click", onClick);
  }
});
