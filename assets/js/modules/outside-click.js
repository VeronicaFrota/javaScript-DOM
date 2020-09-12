  // Verifica se o click foi do lado de fora
export default function outsideClick(element, events, callback) {
  const html = document.documentElement;                // Seleciona o elemento html
  const outside = 'data-outside';

  if(!element.hasAttribute(outside)) {
    // Poderá passar mais de um evento direto
    events.forEach(userEvent => {
      html.addEventListener(userEvent, handleOutsideClick);   // Adiciona evento ao html
    });

    element.setAttribute(outside, '');
  }

  // A função só será criada quando outsideClick() for ativado
  function handleOutsideClick(event) {
    if(!element.contains(event.target)) {
      element.removeAttribute(outside);

      // Poderá passar mais de um evento direto
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick); // Remove evento ao html
      });

      callback();
    }
  }
}