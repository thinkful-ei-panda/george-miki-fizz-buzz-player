function fizzBuzzPlayer() {

    $('button[type="submit"]').on('click', function(event) {
        event.preventDefault();
        $(".js-results").empty();
        const num = $('input').val();
        const fizz = '<div class="fizz-buzz-item fizz"><span>fizz</span></div>';
        const buzz = '<div class="fizz-buzz-item buzz"><span>buzz</span></div>';
        const fizzBuzz = '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'
        for (let i = 1; i <= num; i++) {
          let notFizzBuzz = `<div class="fizz-buzz-item"><span>${i}</span></div>`
          if (i%15 == 0) {
            $('.js-results').append(fizzBuzz);
          } else if (i%3 == 0) {
            $('.js-results').append(fizz);
            } else if (i%5 == 0) {
              $('.js-results').append(buzz);
              } else {
                $('.js-results').append(notFizzBuzz);
                }
        }
    });
  }
  
  $(fizzBuzzPlayer);
  