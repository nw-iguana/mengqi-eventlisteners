$(function() {
 $('.thumbnail').on('click', function(event) {
    let imgSrc = $(this).find('img').attr('src');  
    let imgAlt = $(this).find('img').attr('alt');
      
      $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
  })
})

// Below is what we have got initially
function fizzBuzz() {
  $('#number-chooser').submit(function(event) {
    event.preventDefault();
    let count = $('#number-choice').val();
    let result = [];
    for (let i = 0; i < count; i++) {
      if ((i % 3 !== 0) && (i % 5 !== 0)) {
        result.push(`
         <div class="fizz-buzz-item">
        <span>${i}</span>
        </div>
      `);
      }
      
      }
      console.log(result);
    $('.js-results').append(result);
    $('#number-choice').val(" ");  
  } )
  
  
  }
  
  $(fizzBuzz);