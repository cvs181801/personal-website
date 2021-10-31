//grab elements from the DOM
const cubes = document.querySelectorAll(".cube");
const subtitle3 = document.querySelector(".subtitle3-div");
const subtitles = document.querySelectorAll(".subtitles");
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
    `<span style="transform:rotate(${i * 7}deg)">${character}</span>`
).join(""); // is there a way to avoid using inner HTML here???? ***

console.log(nameText.innerHTML);

setInterval(() => {
    subtitle3.style.transform = "scale(1.5, 1.5)"
    subtitle3.style.transition = "all 5s ease-in";
}, 1000);
    