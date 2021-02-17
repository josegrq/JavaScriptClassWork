function factorize(x)
{
    var factors = [];
    for(var value = 0; value < x; value++)
    {
        if(x % value === 0)
        {
            factors.push(value);
        }
    }
    return factors;
}

function findUnique(str)
{
    str = str.toLowerCase();
    var unique = "";
    for(var index = 0; index < str.length; index++)
    {
        if(!unique.includes(str[index]))
        {
            unique += str[index];
        }
    }
    return unique;
}

function doOperation(a, b, operation)
{
    return operation(a, b);
}



function multiply(x, y)
{
    return x * y;
}

function power(x, y)
{
    return Math.pow(x, y);
}