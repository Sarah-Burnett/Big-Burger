import { hideElement, displayElement } from './changeVisibility';

// menu items
const menuJSON = require('/menu.json');
const menuContainer = document.querySelector(".menu-container");

export const updateMenu = (index) => {
  hideElement(menuContainer);
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
    displayElement(menuContainer);
  };


