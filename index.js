//grab elements from the DOM
const cubes = document.querySelectorAll(".cube");
const nameText = document.querySelector(".contact__image--text p");

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
).join(""); // is there a way to avoid using inner HTML here???? ***

console.log(nameText.innerHTML);