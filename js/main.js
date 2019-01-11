// Animate Smooth Scroll
$('#view-about').on('click', function() {
  const about = $('#about').position().top;

  $('html, body').animate(
    {
      scrollTop: about
    },
    900
  );
}); 


$('#view-contact').on('click', function() {
  const contact = $('#contact').position().top;

  $('html, body').animate(
    {
      scrollTop: contact
    },
    900
  );
}); 
