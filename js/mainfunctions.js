$(function() {
// On document ready:
 

    $(window).load(function(){
    $('#preloader').fadeOut(3000 ,function(){$(this).remove();});
}); 

// end preloader






 // start carousell
/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/

 //  ====================== start carousell
$(function() {

  //Function to animate slider captions 
  function doAnimations( elems ) {
    //Cache the animationend event in a variable
    var animEndEv = 'webkitAnimationEnd animationend';
    
    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data('animation');
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }
  
  //Variables on page load 
  var $myCarousel = $('#carousel-example-generic'),
    $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
    
  //Initialize carousel 
  $myCarousel.carousel();
  
  //Animate captions in first slide on page load 
  doAnimations($firstAnimatingElems);
  
  //Pause carousel  
  $myCarousel.carousel('pause');
  
  
  //Other slides to be animated on carousel slide event 
  $myCarousel.on('slide.bs.carousel', function (e) {
    var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });  
  
});
 //  ====================== end carousell

 




 



   $('#workexperiance').mixItUp();


$("#goToTop").click(function(event){     
        event.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top}, 0);
    });
	//initiate smooth scroll
 

    // toggle MixItUp selected filter
    // Instantiate MixItUp:
 
    $("#hitit-1, .switchit-1").click(function() {
        $("#readmore-1").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-1").toggle();
        // Animation complete.
    });
    $("#hitit-2, .switchit-2").click(function() {
        $("#readmore-2").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-2").toggle();
        // Animation complete.
    });   $("#hitit-new2, .switchit-new2").click(function() {
        $("#readmore-new2").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-new2").toggle();
        // Animation complete.
    });
    $("#hitit-3, .switchit-3").click(function() {
        $("#readmore-3").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-3").toggle();
        // Animation complete. 
    });
    $("#hitit-4, .switchit-4").click(function() {
        $("#readmore-4").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-4").toggle();
        // Animation complete.
    });
    $("#hitit-5, .switchit-5").click(function() {
        $("#readmore-5").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-5").toggle();
        // Animation complete.
    });
    $("#hitit-6, .switchit-6").click(function() {
        $("#readmore-6").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-6").toggle();
        // Animation complete.
    });
    $("#hitit-7, .switchit-7").click(function() {
        $("#readmore-7").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-7").toggle();
        // Animation complete.
    });
    $("#hitit-8, .switchit-8").click(function() {
        $("#readmore-8").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-8").toggle();
        // Animation complete.
    });
    $("#hitit-9, .switchit-9").click(function() {
        $("#readmore-9").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-9").toggle();
        // Animation complete.
    });
    $("#hitit-10, .switchit-10").click(function() {
        $("#readmore-10").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-10").toggle();
        // Animation complete.
    });
    $("#hitit-11, .switchit-11").click(function() {
        $("#readmore-11").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-11").toggle();
        // Animation complete.
    });
    $("#hitit-12, .switchit-12").click(function() {
        $("#readmore-12").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-12").toggle();
        // Animation complete.
    });
    $("#hitit-13, .switchit-13").click(function() {
        $("#readmore-13").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-13").toggle();
        // Animation complete.
    });
    $("#hitit-14, .switchit-14").click(function() {
        $("#readmore-14").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-14").toggle();
        // Animation complete.
    });
    $("#hitit-15, .switchit-15").click(function() {
        $("#readmore-15").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-15").toggle();
        // Animation complete.
    });
    $("#hitit-16, .switchit-16").click(function() {
        $("#readmore-16").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-16").toggle();
        // Animation complete.
    });
    $("#hitit-17, .switchit-17").click(function() {
        $("#readmore-17").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-17").toggle();
        // Animation complete.
    });
    $("#hitit-18, .switchit-18").click(function() {
        $("#readmore-18").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-18").toggle();
        // Animation complete.
    });
    $("#hitit-19, .switchit-19").click(function() {
        $("#readmore-19").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-19").toggle();
        // Animation complete.
    });
    $("#hitit-20, .switchit-20").click(function() {
        $("#readmore-20").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-20").toggle();
        // Animation complete.
    });
    $("#hitit-21, .switchit-21").click(function() {
        $("#readmore-21").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-21").toggle();
        // Animation complete.
    });
    $("#hitit-22, .switchit-22").click(function() {
        $("#readmore-22").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-22").toggle();
        // Animation complete.
    });
    $("#hitit-23, .switchit-23").click(function() {
        $("#readmore-23").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-23").toggle();
        // Animation complete.
    });
    $("#hitit-24, .switchit-24").click(function() {
        $("#readmore-24").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-24").toggle();
        // Animation complete.
    });
    $("#hitit-25, .switchit-25").click(function() {
        $("#readmore-25").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-25").toggle();
        // Animation complete.
    });
    $("#hitit-26, .switchit-26").click(function() {
        $("#readmore-26").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-26").toggle();
        // Animation complete.
    });
    $("#hitit-27, .switchit-27").click(function() {
        $("#readmore-27").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-27").toggle();
        // Animation complete.
    });
    $("#hitit-28, .switchit-28").click(function() {
        $("#readmore-28").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-28").toggle();
        // Animation complete.
    });  

     $("#hitit-29, .switchit-29").click(function() {
        $("#readmore-29").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");

        $(".rmore-29").toggle();
        // Animation complete.
    });    

     $("#hitit-30, .switchit-30").click(function() {
        $("#readmore-30").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-30").toggle();
        // Animation complete.
    });


  $("#hitit-31, .switchit-31").click(function() {
        $("#readmore-31").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-31").toggle();
        // Animation complete.
    }); 


  $("#hitit-32, .switchit-32").click(function() {
        $("#readmore-32").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $(".rmore-32").toggle();
        // Animation complete.
    }); 
  
  $("#hitit-33, .switchit-33").click(function() {
         $(this).next(".readmore-33").finish().slideToggle("slow");

        $("#readmore-33").animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");

        $(".rmore-33").toggle();
        // Animation complete.
    });







/////////////// contactform

    function validateEmail(email) { 
        var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    }


 
 
       $(".fancybox").fancybox();
        $("#contact").submit(function() { return false; });

        
        $("#send").on("click", function(){
            var emailval  = $("#email").val();
            var msgval    = $("#msg").val();
            var msglen    = msgval.length;
            var mailvalid = validateEmail(emailval);
            
            if(mailvalid == false) {
                $("#email").addClass("error");
            }
            else if(mailvalid == true){
                $("#email").removeClass("error");
            }
            
            if(msglen < 4) {
                $("#msg").addClass("error");
            }
            else if(msglen >= 4){
                $("#msg").removeClass("error");
            }
            
            if(mailvalid == true && msglen >= 4) {
                // if both validate we attempt to send the e-mail
                // first we hide the submit btn so the user doesnt click twice
                $("#send").replaceWith("<em>sending...</em>");
                
                $.ajax({
                    type: 'POST',
                    url: 'mailer.php',
                    data: $("#contact").serialize(),
                    success: function(data) {
                        if(data == "true") {
                            $("#contact").fadeOut("fast", function(){
                                $(this).before("<p><strong>Success! Your feedback has been sent, thanks :)</strong></p>");
                                setTimeout("$.fancybox.close()", 1000);
                            });
                        }
                    }
                });
            }
        });

// end contact form



 // end functions
  
});



$(document).ready(function () {
    $(".box-content").hide();
console.log('ready to rock!');
// https://jsfiddle.net/arunpjohny/Huvak/
    $(".open-close").click(function () {
        $(this).next(".box-content").finish().slideToggle("slow");
    });
});



 

  
 
