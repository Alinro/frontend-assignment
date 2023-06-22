import './style.css'

const form = document.querySelector<HTMLFormElement>('form');

form?.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  console.log([...formData])
})