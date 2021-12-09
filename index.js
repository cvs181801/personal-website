//grab elements from the DOM
const cubes = document.querySelectorAll(".cube");
const subtitle3 = document.querySelector(".subtitle3-div");
const subtitles = document.querySelectorAll(".subtitles");
const nameText = document.querySelector(".contact__image--text p");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const contactMeElements = document.querySelectorAll(".aboutMe");
const checkbox = document.querySelector(".darkLightMode--checkbox");
//darkmode selections
const themedElements = document.querySelectorAll(".theme");
// const body = document.querySelector("body");
// const project1 = document.querySelector(".project1");
// const headerDiv = document.querySelector(".header-div");
// const subtitleDiv = document.querySelector(".subtitle-div");



cubes.forEach(cube => {
            cube.addEventListener("mouseover", function() {
                cube.style.transform = "translate3d(.8em, -0.5em, .8em)";
                cube.style.transition = "all .5s ease-in-out";
            })
            cube.addEventListener("mouseout", function() {
                cube.style.transform = "translate3d(-0.8em, .5em, -0.8em)";
                cube.style.transition = "all .5s ease-in-out";  
            })
})

 
nameText.innerHTML = nameText.innerText.split("").map((character, i) => 
    `<span style="transform:rotate(${i * 8}deg)">${character}</span>`
).join(""); 

setInterval(() => {
    subtitle3.style.transform = "scale(1.5, 1.5)"
    subtitle3.style.transition = "all 5s ease-in";
}, 1000);
    
contactMeElements.forEach(element => {
    element.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.remove("hidden");
    })
})

closeModal.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("hidden");
})

checkbox.addEventListener("change", function(event) {
    themedElements.forEach(element => {
        element.classList.toggle("dark");
    })
})

