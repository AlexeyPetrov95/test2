$('.form').submit(function(e) {
    e.preventDefault();
    const number1Str = $('#number1').val();
    const number2Str = $("#number2").val();

    if (+number1Str > +number2Str) {
        $('.error').text('Invalid input, please try again');
    }

});