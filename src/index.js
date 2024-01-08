function capitalize(name)
{
    let letterCapitalize = name.charAt(0).toUpperCase();
    let rest = name.slice(1);

    let fullString = letterCapitalize + rest;

    return fullString;
}

function reverseString(string)
{
    return string.split("").reverse().join("");
}

const calculator = {
    add: (a,b) => {
        return a+b;
    },
    subtract: (a,b) => {
        return a-b;
    },
    divide: (a,b) => {
        return a/b;
    },
    multiply: (a,b) => {
        return a*b;
    }
}

export {capitalize,reverseString,calculator}