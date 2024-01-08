import {capitalize} from './index'
import {reverseString} from './index'

test('Deve retornar uma string com o primeiro caractere em maiúsculo', () => {
  let name = 'fulano';
  expect(capitalize(name)).toMatch(/[A-Z][a-zA-Z]+/);
})

test('Deve retornar uma string invertida', () => {
  expect(reverseString('fulano')).toBe('onaluf');
})
