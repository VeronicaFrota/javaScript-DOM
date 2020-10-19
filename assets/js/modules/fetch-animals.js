import initNumberAnimations from './number-animations.js';

export default function initFetchAnimals() {

  async function fetchAnimals(url) {
    const animalsResponse = await fetch(url);
    const animalsJson = await animalsResponse.json();
    const numberGrid = document.querySelector('.numbers-grid');

    animalsJson.forEach(animal => {
      const divAnimal = createAnimal(animal);
      numberGrid.appendChild(divAnimal);
    });

    initNumberAnimations();
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('number-animal');
    div.innerHTML = `<h3>${animal.specie}</h3> 
    <span data-number>${animal.total}</span>`;
    return div;
  }

  fetchAnimals('./json/api-animals.json');
}