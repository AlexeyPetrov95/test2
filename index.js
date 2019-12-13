$('.form').submit(function(e) {
    e.preventDefault();
    const number1Str = $('#number1').val();
    const number2Str = $("#number2").val();

    if ((+number1Str < 2 || +number1Str > 100) || (+number2Str < 2 || +number2Str > 100)) {
        $('.error').text('Invalid input, please try again');
    } else {
        $('.error').text('');
        const numbers = findPrimeNumbers(+number1Str, +number2Str);
        $('.result').text(`There are prime numbers: ${numbers}`);
    }
});

function findPrimeNumbers(number1, number2) {
    const min = number1 > number2 ? number2 : number1;
    const max = number1 < number2 ? number2 : number1;
    const resultArray = [];

    for (var counter = min; counter <= max; counter++) {
        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter%i===0 && i!==counter) {
                notPrime = true;
            }
        }
        if (!notPrime) {
            resultArray.push(counter);
        }
    }

    return resultArray;
}