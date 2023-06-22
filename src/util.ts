export const getFormData = (form: HTMLFormElement): string => {
    const formData = new FormData(form);
    const result: Record<string, FormDataEntryValue> = {};

    for (const [key, value] of formData.entries()) {
        result[key] = value;
    }

    return JSON.stringify(result);
}

export const showSuccessMessage = () => {
    const paragraph = document.createElement('p');
    paragraph.innerHTML =
        'Your payment information was successfully submitted. Please check the data in the devtool console';

    document.querySelector('#success')?.appendChild(paragraph);
}