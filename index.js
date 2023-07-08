const Hamburger = document.querySelector(".openNavBar")
const closeTag = document.querySelector(".clearBtn")
const projectAndResume = document.querySelector(".projectAndResumeDiv")

Hamburger.addEventListener("click", ()=> {
    projectAndResume.classList.add("active");
    Hamburger.classList.add("hide");
    closeTag.classList.add("active");
})

closeTag.addEventListener("click", ()=> {
    projectAndResume.classList.remove("active");
    Hamburger.classList.remove("hide");
    closeTag.classList.remove("active");
})