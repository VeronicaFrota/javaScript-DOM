export default function initNumberAnimations() {

  function numberAnimations() {
    const numbers = document.querySelectorAll('[data-number]');

    numbers.forEach((number) => {
      const total = +number.innerText;    // transforma a string dos numeros em int
      const increment = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start = start + increment;
        number.innerText = start         // Exibe o número que está sendo somado ao contador

        if(start > total) {
          number.innerText = total;     // Exibe o número correto após realizar a contagem com incremento
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {          // Função que será ativa toda vez que mudar
    if(mutation[0].target.classList.contains('active')) {
      observer.disconnect();
      numberAnimations();
    }
  }            

  const observerTarget = document.querySelector('.numbers');
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes:true } );   // Observa as alterações da class .numeros

}