// menu items
const menuJSON = require('/menu.json');
const menuContainer = document.querySelector(".menu-container");

export function menuContents() {
  function updateMenu(index) {
    menuContainer.style.opacity = 0;
    let {menu, intro, items} = menuJSON[index];
    let output = "";
    output += `
      <h3>${menu}</h3>
      <p class="menu-description">${intro}</p>
      <div class="menu-list">
      `;
    items.forEach( item => {
      output += `
      <div class="menu-item">
        <h4>${item.title}</h4>
        <span>${item.ingredients}</span>
        <div>${item.price}</div>
      </div>
      `
    });
    menuContainer.innerHTML = output;
    menuContainer.style.opacity = 1;
  };

  document.querySelector("#button-starter").addEventListener('click', () => {updateMenu(0)}); 
  document.querySelector("#button-burger").addEventListener('click', () => {updateMenu(2)}); 
  document.querySelector("#button-sides").addEventListener('click', () => {updateMenu(1)}); 
  document.querySelector("#button-pudding").addEventListener('click', () => {updateMenu(3)}); 

}


//0 = starter; 1 = sides; 2= burger; 3=pudding


