import defaultSet from './default';
import navbar from './navbar';
import jumbotron from './home';
import menu from './menu';
import contact from './contact';

defaultSet.createHeader();
navbar.display();

jumbotron.display();
// menu.display();
// contact.display();


document.getElementById('home').addEventListener('click', jumbotron.display);
document.getElementById('menu').addEventListener('click', menu.display);
document.getElementById('contact').addEventListener('click', contact.display);
document.getElementById('order-now').addEventListener('click', contact.display);

// footer.display();
