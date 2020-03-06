
const defaultSet = (() => {
  const createHeader = () => {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const main = document.createElement('div');
    main.id = 'mainContent'
    content.appendChild(header);
    content.appendChild(main);
  };

  const deleteChild = () => {
    const content = document.getElementById('mainContent')

    let child = content.lastElementChild;
    while (child) {
      content.removeChild(child);
      child = content.lastElementChild;
    }
  };

  return {
    createHeader,
    deleteChild,
  };
})();

export default defaultSet;
