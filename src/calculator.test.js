import {calculator} from './index'

test('Deve retornar o resultado da soma de dois números', () => {
    expect(calculator.add(2,3)).toBe(5);
});

test('Deve retornar o resultado da subtração de dois números', () => {
    expect(calculator.subtract(3,2)).toBe(1);
});

test('Deve retornar o resultado da divisão de dois números', () => {
    expect(calculator.divide(6,2)).toBe(3);
});

test('Deve retornar o resultado da multiplicação de dois números', () => {
    expect(calculator.multiply(5,5)).toBe(25);
});