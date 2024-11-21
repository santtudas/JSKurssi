// Exercise 2.
$("h2"); // Valitsee kaikki h2 elementit.

$("#contant").text("Moi Maailma"); // Muutin ensimmäisen h1 elementin tekstiä.

$("img").attr("src", "https://cdn.pixabay.com/photo/2023/02/07/17/49/supercar-7774683_640.jpg"); // Lisäsin HTML oman kuvan, tämä vaihtaa sen.

$("img").hide(); // Piilottaa kuvan.

$("li:contains('Lorem')").css("text-decoration", "underline");

$(".SideBarListBox a").css({
  "color": "blue",               
  "background-color": "#f0f0f0",
});


 // Exercise 3.
$(document).ready(function() {
  $("#button").click(function (){
    $("h1").fadeIn()
  });
});

$(document).ready(function() {
  $("#button2").click(function (){
    $("h1").fadeOut();
  });
});

$(document).ready(function() {
  $("#button3").click(function (){
    $("h2").slideUp();
  });
});

$(document).ready(function() {
  $("#button4").click(function (){
    $("h2").slideDown();
  });
});

$(document).ready(function() {
  $("#button5").click(function(){
    $("img")
    .animate({
        left: '200px',
    }, 1000)
    .animate({
        left: '0px',
        opacity: 0,
        width: '0%'
    }, 1000)
    .animate({   
      opacity: 1,    
      width: '30%'     
  }, 1000);
  })
});

$(document).ready(function() {
  $("#mySelect").change(function() {
    let selectedValue = $(this).val();
    let url;
      if (selectedValue === "first") {
        url = "https://meijastiina.github.io/news_rss_topstories.xml";
      } else if (selectedValue === "second") {
        url = "https://jsonplaceholder.typicode.com/posts/1";
      } else if (selectedValue === "third") {
        url = "https://jsonplaceholder.typicode.com/posts/2";
      }
      if (url) {
        $("#ajax").load(url, function(response, status, xhr) {
          if (status === "error") {
              $("#ajax").html("Failed to load content: " + xhr.statusText);
            }
        });
    }
  });
});