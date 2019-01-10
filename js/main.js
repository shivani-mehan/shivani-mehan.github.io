// // Animate Smooth Scroll
$('#view-resume').on('click', function() {
  const resume = $('#resume').position().top;

  $('html, body').animate(
    {
      scrollTop: resume
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
