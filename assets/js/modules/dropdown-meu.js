import outsideClick from './outside-click.js';

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]');

  dropDownMenus.forEach((menu) => {
    // Adiciona e aciona mais de um evento
    ['click', 'touchstart'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');  // Adiciona ativo na classe

    outsideClick(this, ['click', 'touchstart'], () => {    // Ativa outsideClick()
      this.classList.remove('active');
    });
  };
}