const navbar = (() => {
  const display = () => {
    const content = document.querySelector('header');

    const nav = document.createElement('nav');
    nav.classList.add('navbar');
    nav.classList.add('navbar-expand-lg');
    nav.classList.add('navbar-dark');
    nav.classList.add('bg-dark');
    const logo = document.createElement('a');
    logo.classList.add('navbar-brand');
    logo.classList.add('logo');
    logo.textContent = "Leo's Restaurant";

    const menu = document.createElement('ul');
    menu.classList.add('navbar-nav');
    menu.classList.add('ml-auto');
    const listOne = document.createElement('li');
    listOne.id = 'home';
    listOne.classList.add('nav-item');

    const listItemOne = document.createElement('a');
    listItemOne.href = '#home';
    listItemOne.classList.add('nav-link');
    listItemOne.innerHTML = 'Home';

    const listTwo = document.createElement('li');
    listTwo.id = 'menu';
    listTwo.classList.add('nav-item');

    const listItemTwo = document.createElement('a');
    listItemTwo.href = '#menu';
    listItemTwo.classList.add('nav-link');
    listItemTwo.innerHTML = 'Menu';

    const listThree = document.createElement('li');
    listThree.id = 'contact';
    listThree.classList.add('nav-item');

    const listItemThree = document.createElement('a');
    listItemThree.href = '#contact';
    listItemThree.classList.add('nav-link');
    listItemThree.innerHTML = 'Contact';


    content.appendChild(nav);
    nav.appendChild(logo);
    nav.appendChild(menu);
    menu.appendChild(listOne);
    listOne.appendChild(listItemOne);
    menu.appendChild(listTwo);
    listTwo.appendChild(listItemTwo);
    menu.appendChild(listThree);
    listThree.appendChild(listItemThree);
  };

  return {
    display,
  };
})();

export default navbar;
