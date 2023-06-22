import { describe, expect, it } from 'vitest'
import { getFormData } from './util';

/**
 * @vitest-environment jsdom
 */
describe('test getFormData', () => {
    it('returns the correct value according to the snapshot, when the form has an input', () => {
        const input = document.createElement('input');
        input.value = 'inputValue';
        input.name = 'inputName';

        const form = document.createElement('form');
        form.appendChild(input);

        const formData = getFormData(form);

        expect(formData).toMatchSnapshot();
    })

    it('returns the correct value according to the snapshot, when the form does not have any inputs', () => {
        const form = document.createElement('form');

        const formData = getFormData(form);

        expect(formData).toMatchSnapshot();
    })
})
