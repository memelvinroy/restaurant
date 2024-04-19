// import Home from './home.jpg';

function addHomeContent() {
  let parentDiv = document.getElementById('content');
  parentDiv.innerHTML = '';
  let homeHeader = document.createElement('h1');
  homeHeader.textContent = 'CAFE COFFEE';
  let homeText = document.createElement('p');
  homeText.textContent =
    'Cafe Cofeee opened on Thanksgiving Day 1990. Chef / Owner Ron Silver began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca.Today, NYC’s beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking. .';
    // let homeImage = new Image();
    // homeImage.src = Home;
  parentDiv.append(homeHeader, homeText);
}

export { addHomeContent };