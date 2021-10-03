//Ways I use technology for good
const essentialsDiv = document.querySelector(".essentials");

const theEssentials = ["Using secure coding practices", "Creating meaningful plaforms", 
"Lifelong learning", "Creating amazing experiences", "Making the web safer for all"];

function renderTheEssentials() {
    for(essential of theEssentials) {
        essentialItem = document.createElement('p');
        essentialItem.textContent = `${essential} is what I do`;
        essentialsDiv.append(essentialItem);
    }
}

renderTheEssentials();


