import {caesarCipher} from './index'

test('Deve retornar a string segundo a cifra de cesar', () => {
    expect(caesarCipher('fulano teste')).toBe('ixodqr whvwh');
})