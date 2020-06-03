function fizzBizzPlayer() {
  ${'button[type="submit"]'}.click(function(event) {
    let inputNum = $('input').val();
    let fizz = '<div class="fizz-buzz-item fizz"><span>fizz</span></div>';
    let buzz ='<div class="fizz-buzz-item buzz"><span>buzz</span></div>';
    let fizzBuzz = '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>';

    for (let i = 0; i <= num; i++) {
      if (i % 3 == 0) {
        $('.js-results').append(fizz);
      } else if (i % 5) {
          $('.js-results').append(buzz);
      } else if (i % 3 == 0 && i % 5) {
          $('.js-results').append(fizzBuzz)
      }
    }
  }
  )}