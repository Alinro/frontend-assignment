import './style.css';

const form = document.querySelector<HTMLFormElement>('form');

form?.addEventListener('submit', function () {
  const formData = new FormData(form);
  const result: Record<string, FormDataEntryValue> = {};

  for (const [key, value] of formData.entries()) {
    result[key] = value;
  }

  console.log(JSON.stringify(result));

  const paragraph = document.createElement('p');
  paragraph.innerHTML =
    'Your payment information was successfully submitted. Please check the data in the devtool console';

  document.querySelector('#success')?.appendChild(paragraph);
});