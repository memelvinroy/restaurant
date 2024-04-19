function addAboutContent() {
    let parentDiv = document.getElementById('content');
    parentDiv.innerHTML = '';
    let aboutHeader = document.createElement('h1');
    aboutHeader.textContent = 'About Us';
    let aboutText = document.createElement('p');
    aboutText.textContent = `
    At Cafe Coffee , we believe the best dishes are the ones that remind you of childhood. A portion of great food should make you feel like you are wrapped in a warm blanket.

    At our location in Boston or online, you will find the best dishes you didn't know you craved: extra-creamy mac and cheese, hot chicken casserole, fried dumplings like your mama makes, and many more.`;
   
    parentDiv.append(aboutHeader, aboutText);
  }
  
  export { addAboutContent };