export default function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const accordionItem = document.querySelectorAll('.js-accordion dd');
  const activeClass = 'active';

  if(accordionList.length) {
    accordionItem[0].classList.add(activeClass);               // Para deixa o primeiro item de descrição ativo

    function activeAccordion(event) {   
      this.classList.toggle(activeClass);                      // Passa o item que está sendo clicado, adicionando a class ou removendo a class ativo
      this.nextElementSibling.classList.toggle(activeClass);   // Passa o próximo item que está sendo clicado, adicionando ou removendo a class ativo
    };

    accordionList.forEach((item) => {                      // Passar pelos itens da lista, ao clicar no item a função 'activeAccordion' é acionada
      item.addEventListener('click', activeAccordion);
    });
  }
}