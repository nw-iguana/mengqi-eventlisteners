//We did not target the img tag initially
//Sorry I no longer have our initial version by the end of class

$(function() {
 $('.thumbnail').on('click', function(event) {
    let imgSrc = $(this).find('img').attr('src');  
    let imgAlt = $(this).find('img').attr('alt');
      
      $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
  })
})