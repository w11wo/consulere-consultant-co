function controlNav() {
    var navClass = document.getElementById("nav").className;

    if (navClass == "main-nav-open") {
        document.getElementById("nav").className = "main-nav-close";
    } else if (navClass == "main-nav-close") {
        document.getElementById("nav").className = "main-nav-open";
    }
}

function changeInfo() {
    var arrowClass = document.getElementById("arrow").className;

    if (arrowClass == "arrow") {
      document.getElementById("arrow").className = "arrow-back";
      document.getElementById("case-title").className = "case-title-show";
    } else if (arrowClass == "arrow-back") {
        document.getElementById("arrow").className = "arrow";
        document.getElementById("case-title").className = "case-title";
    }
}

$('.service-logo').on({
  'mouseenter': function(){
    if (this.id == "service1") {
      $("#text1").attr('class','text-appear');
    }
    else if (this.id == "service2") {
      $("#text2").attr('class','text-appear');
    }
    else if (this.id == "service3") {
      $("#text3").attr('class','text-appear');
    }
    else if (this.id == "service4") {
      $("#text4").attr('class','text-appear');
    }
  },
  'mouseleave': function(){
    if (this.id == "service1") {
      $("#text1").attr('class','text');
    }
    else if (this.id == "service2") {
      $("#text2").attr('class','text');
    }
    else if (this.id == "service3") {
      $("#text3").attr('class','text');
    }
    else if (this.id == "service4") {
      $("#text4").attr('class','text');
    }
  },
});

$('.theory').on({
  'mouseenter': function(){
    if (this.id == "theory1") {
      $("#theory-name1").attr('class','theory-hide');
      $("#theory-detail1").attr('class','theory-detail-show');
    }
    else if (this.id == "theory2") {
      $("#theory-name2").attr('class','theory-hide');
      $("#theory-detail2").attr('class','theory-detail-show');
    }
    else if (this.id == "theory3") {
      $("#theory-name3").attr('class','theory-hide');
      $("#theory-detail3").attr('class','theory-detail-show');
    }
    else if (this.id == "theory4") {
      $("#theory-name4").attr('class','theory-hide');
      $("#theory-detail4").attr('class','theory-detail-show');
    }
  },
  'mouseleave': function(){
    if (this.id == "theory1") {
      $("#theory-name1").attr('class','theory-name-show');
      $("#theory-detail1").attr('class','theory-hide')
    }
    else if (this.id == "theory2") {
      $("#theory-name2").attr('class','theory-name-show');
      $("#theory-detail2").attr('class','theory-hide');
    }
    else if (this.id == "theory3") {
      $("#theory-name3").attr('class','theory-name-show');
      $("#theory-detail3").attr('class','theory-hide');
    }
    else if (this.id == "theory4") {
      $("#theory-name4").attr('class','theory-name-show');
      $("#theory-detail4").attr('class','theory-hide');
    }
  },
});

$('.member').on({
  'mouseenter': function(){
    if (this.id == "mb1") {
      $("#mb1").attr('src','img/membercard1.jpg');
    }
    else if (this.id == "mb2") {
      $("#mb2").attr('src','img/membercard2.jpg');
    }
    else if (this.id == "mb3") {
      $("#mb3").attr('src','img/membercard3.jpg');
    }
    else if (this.id == "mb4") {
      $("#mb4").attr('src','img/membercard4.jpg');
    }
  },
  'mouseleave': function(){
    if (this.id == "mb1") {
      $("#mb1").attr('src','img/member1.jpg');
    }
    else if (this.id == "mb2") {
      $("#mb2").attr('src','img/member2.jpg');
    }
    else if (this.id == "mb3") {
      $("#mb3").attr('src','img/member3.jpg');
    }
    else if (this.id == "mb4") {
      $("#mb4").attr('src','img/member4.jpg');
    }
  },
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
