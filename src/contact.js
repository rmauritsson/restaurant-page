const contact = (() => {
  const display = () => {
    const main = document.querySelector('main');

    const divider = document.createElement('hr');
    divider.classList.add('featurette-divider');

    const row = document.createElement('div');
    row.id = 'contact'
    row.classList.add('row');
    row.classList.add('featurette');

    const column = document.createElement('div');
    column.classList.add('col-md-7');
    const columnTitle = document.createElement('h2');
    columnTitle.textContent = 'Contact Us';
    columnTitle.classList.add('featurette-heading');
    const columnPara = document.createElement('p');
    columnPara.classList.add('lead');
    columnPara.textContent = 'We are Open every day of the week from 8am - 10pm';

    const columnTwo = document.createElement('div');
    columnTwo.classList.add('col-md-5');

    const form = document.createElement('form');
    form.id = 'contact-us';

    // name field
    const formItemOne = document.createElement('div');
    formItemOne.classList.add('form-group');
    const labelOne = document.createElement('label');
    labelOne.id = 'name';
    labelOne.innerHTML = 'Your Name';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classList.add('form-control');

    // email field

    const formItemTwo = document.createElement('div');
    formItemTwo.classList.add('form-group');
    const labelTwo = document.createElement('label');
    labelTwo.id = 'email';
    labelTwo.innerHTML = 'Your Email Address';
    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.classList.add('form-control');

    // message field

    const formItemThree = document.createElement('div');
    formItemThree.classList.add('form-group');
    const labelThree = document.createElement('label');
    labelThree.id = 'message';
    labelThree.innerHTML = 'Your Message';
    const messageInput = document.createElement('textarea');
    messageInput.createTextNode = 'Your Message';
    messageInput.classList.add('form-control');

    const submitButton = document.createElement('button');
    submitButton.classList.add('btn');
    submitButton.classList.add('btn-primary');
    submitButton.textContent = 'Submit';

    main.appendChild(divider);
    main.appendChild(row);
    row.appendChild(column);
    column.appendChild(columnTitle);
    column.appendChild(columnPara);

    row.appendChild(columnTwo);
    columnTwo.appendChild(form);
    form.appendChild(formItemOne);
    formItemOne.appendChild(labelOne);
    formItemOne.appendChild(nameInput);

    form.appendChild(formItemTwo);
    formItemTwo.appendChild(labelTwo);
    formItemTwo.appendChild(emailInput);

    form.appendChild(formItemThree);
    formItemThree.appendChild(labelThree);
    formItemThree.appendChild(messageInput);

    form.appendChild(submitButton);
  };

  return { display };
})();

export default contact;
