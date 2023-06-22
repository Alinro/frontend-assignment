import './style.css';
import { getFormData, showSuccessMessage } from './util';

document.querySelector<HTMLFormElement>('form')?.addEventListener('submit', function () {
  console.log(getFormData(this));
  showSuccessMessage();
});