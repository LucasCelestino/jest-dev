function capitalize(name)
{
    let letterCapitalize = name.charAt(0).toUpperCase();
    let rest = name.slice(1);

    let fullString = letterCapitalize + rest;

    return fullString;
}

export default capitalize;