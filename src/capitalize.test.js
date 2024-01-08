import {capitalize} from './index'

test('Deve retornar uma string com o primeiro caractere em maiúsculo', () => {
  let name = 'fulano';
  expect(capitalize(name)).toMatch(/[A-Z][a-zA-Z]+/);
})
