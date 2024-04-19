function addMenuContent() {
    let parentDiv = document.getElementById('content');
    parentDiv.innerHTML = '';
    let menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Our Menu';
    let menuText = document.createElement('p');
    menuText.innerHTML =
      '<ul><li > Americano </li><li>Cappuccino</li><li>Espresso </li><li> Latte </li><li>Iced Coffee </li><li>Caramel pudding</li></ul>';
    parentDiv.append(menuHeader, menuText);
  }
  
  export { addMenuContent };