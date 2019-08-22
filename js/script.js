console.log('my script is working');  //to test the page is linked

$('.morePara').hide();
$('.lessBtn').hide();
$('.btn').show();

  $(document).ready(function(){
  	$('#menu').click(function(){
  		$('nav').toggleClass('active');
  	});

  	$('#close').click(function(){
  		$('nav').hide();
  	});


    // ---------  method 1 : show and hide with two button

    // $('.btn').click(function(){
    //   $('.morePara').show();
    //   $('.lessBtn').show();
    //   $(this).hide();
    // });
    //
    // $('.lessBtn').click(function(){
    //   $('.morePara').hide();
    //   $(this).show();
    //   $('.btn').show();
    //   $('.lessBtn').hide();
    // });

    // -------- method 2 : toggle
    // $('.btn').click(function(){
    //   $('.morePara').toggle();
    // });

    //  ----- slide up and slide down function
    // $('.btn').click(function(){
    //   $('.morePara').slideDown(3000);
    // });


    // --- toggle with animation
    $('.btn').click(function(){
      $('.morePara').slideToggle(3000);
    });
    $('#variables').click(function(){
      $('html, body').animate({
        scrollTop: $('#features').offset().top + 200 } , 3000);
      });





});
