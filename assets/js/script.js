const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[0].classList.add('active');

function activeTab(index) {                           // Adiciona (ativa) a classe de acordo com o número passado
  tabContent.forEach((section) => {                   // Remove a classe 'active' anterior assim que a classe atual é selecionada
    section.classList.remove('active');
  });

  tabContent[index].classList.add('active');           // Adiciona a classe 'active' assim que clicado
}

tabMenu.forEach((itemMenu, index) => {                // Quando clicar passa o numero para aativação da class
  itemMenu.addEventListener('click', () => {
    activeTab(index);                                 // passa o index da imagem clicada para ser ativado a class 'active'
  });
});