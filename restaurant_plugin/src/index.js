
import { addHomeContent } from './Home';
import { addMenuContent } from './Menu';
import { addAboutContent } from './About';
import './style.css';

addHomeContent();

document.getElementById('home-btn').addEventListener('click', (e) => {
  addHomeContent();
});

document.getElementById('menu-btn').addEventListener('click', (e) => {
  addMenuContent();
});

document.getElementById('about-btn').addEventListener('click', (e) => {
  addAboutContent();
});