const menu = (() => {
  const display = () => {
    const main = document.querySelector('main');

    const wrapper = document.createElement('div');
    wrapper.classList.add('album');
    wrapper.classList.add('py-5');
    wrapper.classList.add('bg-light');

    const container = document.createElement('div');
    container.classList.add('container');

    const row = document.createElement('div');
    row.classList.add('row');

    const columnOne = document.createElement('div');
    columnOne.classList.add('col-md-4');

    const cardOne = document.createElement('div');
    cardOne.classList.add('card');
    cardOne.classList.add('mb-4');
    cardOne.classList.add('shadow-sm');

    const cardOneBackground = document.createElement('div');
    cardOneBackground.id = 'card-one'
    cardOneBackground.classList.add('card-body');

    const cardOneTitle = document.createElement('h2');
    cardOneTitle.classList.add('card-title');
    cardOneTitle.innerHTML = 'Chinese Meals';

    const cardOneText = document.createElement('div');
    cardOneText.classList.add('card-text');
    cardOneText.textContent = 'Our Chinese menu includes Sweet and Sour Pork, Spring Rolls, Fried Shrimp and Cashew,Chow Mein,Egg-fried Rice,Spicy Tofu....and more.';

    // column Two
    const columnTwo = document.createElement('div');
    columnTwo.classList.add('col-md-4');

    const cardTwo = document.createElement('div');
    cardTwo.classList.add('card');
    cardTwo.classList.add('mb-4');
    cardTwo.classList.add('shadow-sm');

    const cardTwoBackground = document.createElement('div');
    cardTwoBackground.id = 'card-two'
    cardTwoBackground.classList.add('card-body');

    const cardTwoTitle = document.createElement('h2');
    cardTwoTitle.classList.add('card-title');
    cardTwoTitle.innerHTML = 'Inter Continental Meals';

    const cardTwoText = document.createElement('div');
    cardTwoText.classList.add('card-text');
    cardTwoText.textContent = 'The Inter continental menu includes Crispy Calamari Rings,Quick Salted Caramel Pie,Sweet Potato Pie, Prawn Pie, Sticky Toffee....and more.';

    // column three
    const columnThree = document.createElement('div');
    columnThree.classList.add('col-md-4');

    const cardThree = document.createElement('div');
    cardThree.classList.add('card');
    cardThree.classList.add('mb-4');
    cardThree.classList.add('shadow-sm');

    const cardThreeBackground = document.createElement('div');
    cardThreeBackground.id = 'card-three'
    cardThreeBackground.classList.add('card-body');

    const cardThreeTitle = document.createElement('h2');
    cardThreeTitle.classList.add('card-title');
    cardThreeTitle.innerHTML = 'Local Meals';

    const cardThreeText = document.createElement('div');
    cardThreeText.classList.add('card-text');
    cardThreeText.textContent = 'Our local menu has the famous luwombo, TV chicken, muchomo, Gnut sauce, katogo with meat stew, pilawo, pork and much more';


    main.appendChild(wrapper);
    wrapper.appendChild(container);
    container.appendChild(row);
    row.appendChild(columnOne);
    columnOne.appendChild(cardOne);
    cardOne.appendChild(cardOneBackground);
    cardOne.appendChild(cardOneTitle);
    cardOne.appendChild(cardOneText);

    row.appendChild(columnTwo);
    columnTwo.appendChild(cardTwo);
    cardTwo.appendChild(cardTwoBackground);
    cardTwo.appendChild(cardTwoTitle);
    cardTwo.appendChild(cardTwoText);

    row.appendChild(columnThree);
    columnThree.appendChild(cardThree);
    cardThree.appendChild(cardThreeBackground);
    cardThree.appendChild(cardThreeTitle);
    cardThree.appendChild(cardThreeText);
  };

  return { display };
})();


export default menu;
