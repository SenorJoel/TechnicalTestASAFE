	$(document).ready(function () 
{
	let jokes = [];
	let selectedJoke = null;
  // Navigation helpers
	function showPage(pageId) 
{
    $(".page").removeClass("active");
    $(`#${pageId}`).addClass("active");
}
  // Button used to go to categories
	$("#startBtn").click(function () 
{
    showPage("categories");
});
  // Button used to go back to Categories
	$("#backToCover").click(function ()
{
    showPage("cover");
});
  // Button used to go back to Joke List
	$("#backToList").click(function ()
{
    showPage("categories");
});
  // List all jokes when the API is fetched
	$(".categoryBtn").click(function ()
{
    const category = $(this).data("category");
    const url = `https://official-joke-api.appspot.com/jokes/${category}/ten`;
    $("#jokeList").empty();
    $.getJSON(url, function (data) 
{
      jokes = data;
      data.forEach((joke, index) =>
{
        $("#jokeList").append(
          `<li data-index="${index}">${joke.setup}</li>`
       );
     });
   });
});
 // Outputs the Punchline of the Joke when pressed on Programming etc.
  $("#jokeList").on("click", "li", function ()
{
    const index = $(this).data("index");
    selectedJoke = jokes[index];
    $("#setup").text(selectedJoke.setup);
    $("#punchline").text(selectedJoke.punchline);
    showPage("jokeDetails");
  });
});
