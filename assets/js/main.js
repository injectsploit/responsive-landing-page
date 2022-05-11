const showMenu = (navM, navC, navT, overL) => {
  const navMenu = document.querySelector(navM),
    navClose = document.querySelector(navC),
    navToggle = document.querySelector(navT),
    overLay = document.querySelector(overL);

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
      overLay.style.display = "block";
    });
  }
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
      overLay.style.display = "none";
    });
  }
};

showMenu(".nav__menu", ".nav__close", ".nav__toggle", ".overlay");

// DROP DOWN

const showDropD = (links, dropDM, dropDI) => {
  const navLinkD = document.querySelectorAll(links),
    dropDownM = document.querySelectorAll(dropDM),
    dropDownI = document.querySelectorAll(dropDI);
  for (let i = 0; i < navLinkD.length; i++) {
    navLinkD[i].addEventListener("click", () => {
      dropDownM[i].classList.toggle("dropDMenu");
      dropDownI[i].classList.toggle("rotate");
    });
  }
};

showDropD(".nav__linkD", ".drop__down-menu", ".drop__down-icon");
