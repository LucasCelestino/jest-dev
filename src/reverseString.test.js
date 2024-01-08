import {reverseString} from './index'

test('Deve retornar uma string invertida', () => {
    expect(reverseString('fulano')).toBe('onaluf');
  })