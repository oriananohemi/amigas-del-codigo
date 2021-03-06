import './styles/styles.scss';
import router from './router/router';
import footer from './template/footer';
import header from './template/header';
import { validateSession } from './firebase/auth';
import './firebase/init';

const root = document.getElementById('root');

window.addEventListener('load', async () => {
  root.innerHTML = '';
  if(window.location.hash !== '#/registro-paciente' && window.location.hash !== '#/registro-doctor' && window.location.hash !== '#/login' ) {
    root.insertAdjacentElement('afterbegin', header())
  }
    root.insertAdjacentElement('beforeend', await router(window.location.hash))
  if(window.location.hash !== '#/registro-paciente' && window.location.hash !== '#/registro-doctor' && window.location.hash !== '#/login' ) {
    root.insertAdjacentElement('beforeend', footer())
  }
  validateSession();
  })

window.addEventListener('hashchange', async () => {
  root.innerHTML = '';
  if(window.location.hash !== '#/registro-paciente' && window.location.hash !== '#/registro-doctor' && window.location.hash !== '#/login' ) {
    root.insertAdjacentElement('afterbegin', header())
  }
    root.insertAdjacentElement('beforeend', await router(window.location.hash))
  if(window.location.hash !== '#/registro-paciente' && window.location.hash !== '#/registro-doctor' && window.location.hash !== '#/login' ) {
    root.insertAdjacentElement('beforeend', footer())
  }
  validateSession();
})
