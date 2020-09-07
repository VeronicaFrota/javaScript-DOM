export default function initScrollSmooth() {
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

   // Percorre os links(itens) e aciona a função quando clicado para ir até o link
  internalLinks.forEach((link) => {                                          
    link.addEventListener('click', scrollToSection);
  });
}
