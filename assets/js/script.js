function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  tabContent[0].classList.add('active');                // Para deixa o primeiro item de descrição ativo
  
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
}

function initAccordion() {
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

function initScroll() {
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');    // Pega o link interno

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');                     // Pega o atributo href
    const section = document.querySelector(href);                              // Link entre a section e o href 

    section.scrollIntoView({                                                   // Scroll
      behavior: 'smooth',
      block: 'start',
    });

    /* const topo = section.offsetTop;                                          // Forma Alternativa do Scrool
    window.scrollTo({
      top: topo,
      behavior: 'smooth'
    }); */
  };

  internalLinks.forEach((link) => {                           // Percorre os links(itens) e aciona a função quando clicado para ir até o link
    link.addEventListener('click', scrollToSection);
  });
}

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('active');
        else 
          section.classList.remove('active');
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}

initScroll();
initTabNav();
initAccordion();
initAnimacaoScroll();