const footer = (() => {
  const display = () => {
    const main = document.querySelector('main');

    const divider = document.createElement('hr');
    divider.classList.add('featurette-divider');

    const pagefooter = document.createElement('footer');
    pagefooter.classList.add('container');

    const footerPara = document.createElement('p');
    footerPara.classList.add('float-right');
    const footerAnchor = document.createElement('a');
    footerAnchor.textContent = 'Back to top';
    const copyrights = document.createElement('p');
    copyrights.textContent = "©2020 Leo's Restaurant";

    main.appendChild(divider);
    main.appendChild(pagefooter);
    pagefooter.appendChild(footerPara);
    footerPara.appendChild(footerAnchor);
    pagefooter.appendChild(copyrights);

    console.log(main);
  };

  return { display };
})();

export default footer;
