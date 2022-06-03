import {createRoot} from 'react-dom/client';
import './style.css';
import WebContent from './app';

import './App.scss';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<WebContent />);

const toggle = document.querySelector('.hover-show');

if(toggle){
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
  });
}


let Icons = document.querySelectorAll('.navigation .icon');

Icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    changeactive();
    icon.classList.add('active-nav');
  });
});

function changeactive() {
  Icons.forEach((icon) => {
    icon.classList.remove('active-nav');
  });
}
