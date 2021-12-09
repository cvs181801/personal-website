//grab elements from the DOM
const cubes = document.querySelectorAll(".cube");
const subtitle3 = document.querySelector(".subtitle3-div");
const subtitles = document.querySelectorAll(".subtitles");
const nameText = document.querySelector(".contact__image--text p");
const modal = document.querySelector(".modal");
const project8 = document.querySelector(".project8");
const project2 = document.querySelector(".project2");
const closeModal = document.querySelector(".modal__close");
const contactMeElements = document.querySelectorAll(".aboutMe");
const checkbox = document.querySelector(".darkLightMode--checkbox");
const lightText = document.querySelectorAll(".ltText");
const projectLayout = document.querySelector(".projectlayout");
const lightAnchors = document.querySelectorAll(".ltAnchor");
//darkmode selections
const themedElements = document.querySelectorAll(".theme");

lightText.forEach(link => {
    link.style.color = "aqua";
})

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
    event.preventDefault();
    projectLayout.style.color = "black";
    project8.style.color = "black";
    project2.style.color = "black";
    themedElements.forEach(element => {
        element.classList.toggle("dark");
    })

    lightText.forEach(link => {
        if(link.style.color === "aqua") {
            link.style.color = "blue";
        } else {
            link.style.color = "aqua"
        }
    })

    lightAnchors.forEach(link => {
        link.style.color = "black";
    })

    // lightAnchors.forEach(link => {
    //     link.addEventListener("hover", function(event) {
    //         event.preventDefault();
    //         link.style.color = "white";
    //     })
    // })

})

