import './style.css'

const form = document.querySelector<HTMLFormElement>('form');

form?.addEventListener('submit', function () {
  const formData = new FormData(form);
  const result: Record<string, FormDataEntryValue> = {};

  for (const [key, value] of formData.entries()) {
    result[key] = value;
  }

  console.log(JSON.stringify(result));
})