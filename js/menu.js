// menu items
const starterBtn = document.querySelector("#button-starter"); 
const burgerBtn = document.querySelector("#button-burger");
const sidesBtn = document.querySelector("#button-sides");
const puddingBtn = document.querySelector("button-pudding");

const menuContainer = document.querySelector(".menu-container");



export function updateContainer() {
    console.log("change div");
    menuContainer.innerHTML = "";
    const menuItem = document.createDocumentFragment();
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const div = document.createElement("div");
    h3.innerHTML = menuStarter["h3"];
    p.innerHTML = menuStarter["p"];
    div.innerHTML = menuStarter["div"].item1 + menuStarter["div"].item2;
    menuItem.appendChild(h3);
    menuItem.appendChild(p);
    menuItem.appendChild(div);
    menuContainer.appendChild(menuItem);
};

export function updateMenu(){
    console.log("update menu");
    starterBtn.addEventListener('click', updateContainer());
};

