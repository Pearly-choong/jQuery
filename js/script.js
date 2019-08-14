console.log('my script is working');  //to test the page is linked



  $(document).ready(function(){
  	$('#menu').click(function(){
  		$('nav').toggleClass('active'); 		
  	})
  
  	$('#close').click(function(){
  		$('nav').hide();
  	})

});