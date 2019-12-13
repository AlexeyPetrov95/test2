$('.form').submit(function(e) {
    e.preventDefault();
    const number1Str = $('#number1').val();
    const number2Str = $("#number2").val();

    if ((+number1Str < 2 || +number1Str > 100) || (+number2Str < 2 || +number2Str > 100)) {
        $('.error').text('Invalid input, please try again');
    } else {
        $('.error').text('');
    }
});