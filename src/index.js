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

function caesarCipher(string)
{
    let alphabet = ['a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    if(string.length == 1)
    {
        let indexLetter = alphabet.indexOf(string);
        return alphabet[indexLetter + 3];
    }

    let splitString = string.split("");

    let cipheredString = splitString.map((letter) => {
        let indexLetter = alphabet.indexOf(letter);

        if(letter == ' ')
        {
            return ' ';
        }

        if((indexLetter + 3) > 26)
        {
            let newIndex = ((indexLetter + 3) - 26);

            return alphabet[newIndex];
        }

        return alphabet[indexLetter + 3];
    })

    console.log(cipheredString.join(''));

}

caesarCipher('lucas celestino');
// [oxfdv]

