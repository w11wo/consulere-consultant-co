function controlNav() {
    var navClass = document.getElementById("nav").className;

    if (navClass == "main-nav-open") {
        document.getElementById("nav").className = "main-nav-close";
    } else if (navClass == "main-nav-close") {
        document.getElementById("nav").className = "main-nav-open";
    }
}

function displayText1() {
  var textClass = document.getElementById("textClass1").className;

  if (textClass == "text") {
    document.getElementById("textClass1").className = "text-appear";
  }
}

function removeText1() {
  var textClass = document.getElementById("textClass1").className;

  if (textClass == "text-appear") {
    document.getElementById("textClass1").className = "text";
  }
}

function displayText2() {
  var textClass = document.getElementById("textClass2").className;

  if (textClass == "text") {
    document.getElementById("textClass2").className = "text-appear";
  }
}

function removeText2() {
  var textClass = document.getElementById("textClass2").className;

  if (textClass == "text-appear") {
    document.getElementById("textClass2").className = "text";
  }
}

function displayText3() {
  var textClass = document.getElementById("textClass3").className;

  if (textClass == "text") {
    document.getElementById("textClass3").className = "text-appear";
  }
}

function removeText3() {
  var textClass = document.getElementById("textClass3").className;

  if (textClass == "text-appear") {
    document.getElementById("textClass3").className = "text";
  }
}

function displayText4() {
  var textClass = document.getElementById("textClass4").className;

  if (textClass == "text") {
    document.getElementById("textClass4").className = "text-appear";
  }
}

function removeText4() {
  var textClass = document.getElementById("textClass4").className;

  if (textClass == "text-appear") {
    document.getElementById("textClass4").className = "text";
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

function displayTheory1() {
  var theoryClass = document.getElementById("theory-list1").className;

  if (theoryClass == "theory-hide") {
    document.getElementById("theory-list1").className = "theory-list-show";
    document.getElementById("theory-name1").className = "theory-hide";
  }
}

function removeTheory1() {
  var theoryClass = document.getElementById("theory-list1").className;

  if (theoryClass == "theory-list-show") {
    document.getElementById("theory-list1").className = "theory-hide";
    document.getElementById("theory-name1").className = "theory-name-show";
  }
}

function displayTheory2() {
  var theoryClass = document.getElementById("theory-list2").className;

  if (theoryClass == "theory-hide") {
    document.getElementById("theory-list2").className = "theory-list-show";
    document.getElementById("theory-name2").className = "theory-hide";
  }
}

function removeTheory2() {
  var theoryClass = document.getElementById("theory-list2").className;

  if (theoryClass == "theory-list-show") {
    document.getElementById("theory-list2").className = "theory-hide";
    document.getElementById("theory-name2").className = "theory-name-show";
  }
}

function displayTheory3() {
  var theoryClass = document.getElementById("theory-list3").className;

  if (theoryClass == "theory-hide") {
    document.getElementById("theory-list3").className = "theory-list-show";
    document.getElementById("theory-name3").className = "theory-hide";
  }
}

function removeTheory3() {
  var theoryClass = document.getElementById("theory-list3").className;

  if (theoryClass == "theory-list-show") {
    document.getElementById("theory-list3").className = "theory-hide";
    document.getElementById("theory-name3").className = "theory-name-show";
  }
}

function displayTheory4() {
  var theoryClass = document.getElementById("theory-list4").className;

  if (theoryClass == "theory-hide") {
    document.getElementById("theory-list4").className = "theory-list-show";
    document.getElementById("theory-name4").className = "theory-hide";
  }
}

function removeTheory4() {
  var theoryClass = document.getElementById("theory-list4").className;

  if (theoryClass == "theory-list-show") {
    document.getElementById("theory-list4").className = "theory-hide";
    document.getElementById("theory-name4").className = "theory-name-show";
  }
}

$('#mb1').on({
    'mouseenter': function(){
        $('#mb1').attr('src','img/membercard1.jpg');
    }
});

$('#mb1').on({
    'mouseleave': function(){
        $('#mb1').attr('src','img/member1.jpg');
    }
});

$('#mb2').on({
    'mouseenter': function(){
        $('#mb2').attr('src','img/membercard2.jpg');
    }
});

$('#mb2').on({
    'mouseleave': function(){
        $('#mb2').attr('src','img/member2.jpg');
    }
});

$('#mb3').on({
    'mouseenter': function(){
        $('#mb3').attr('src','img/membercard3.jpg');
    }
});

$('#mb3').on({
    'mouseleave': function(){
        $('#mb3').attr('src','img/member3.jpg');
    }
});

$('#mb4').on({
    'mouseenter': function(){
        $('#mb4').attr('src','img/membercard4.jpg');
    }
});

$('#mb4').on({
    'mouseleave': function(){
        $('#mb4').attr('src','img/member4.jpg');
    }
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
