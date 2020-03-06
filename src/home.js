import defaultSet from './default';

const jumbotron = (() => {
  const display = () => {
    defaultSet.deleteChild();
    const content = document.getElementById('mainContent');
    const main = document.createElement('main');
    main.classList.add('main');
    content.appendChild(main);

    const section = document.createElement('section');
    section.id = 'home';
    section.classList.add('jumbotron');
    section.classList.add('text-center');

    const container = document.createElement('div');
    container.classList.add('container');

    const title = document.createElement('h1');
    title.innerHTML = "Welcome to Leo's Restaurant";

    const para = document.createElement('p');
    para.classList.add('lead');
    para.classList.add('text-muted');
    para.textContent = 'We know what your taste buds want!';

    const button = document.createElement('button');
    button.id = 'order-now';
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.textContent = 'Order Now';

    main.appendChild(section);
    section.appendChild(container);
    container.appendChild(title);
    container.appendChild(para);
    container.appendChild(button);
  };

  return {
    display,
  };
})();

export default jumbotron;
