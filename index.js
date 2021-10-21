//grab elements from the DOM
const cubes = document.querySelectorAll(".cube");


for (cube=0; cube < cubes.length; cube++) {
            cubes[cube].addEventListener("mouseover", function() {
                //cubes[cube].style.transform = "translate3d(.8em, -0.8em, .8em)";
                //cubes[cube].style.transition = "all 1s ease-in-out";
                console.log("hovered")
            })
}

// .project1:hover {
//     transform: translate3d(.8em, -0.8em, .8em);
//     transition: all 1s ease-in-out;
// }
