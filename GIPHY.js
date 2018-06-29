$("button").on("click", function() {
      var topics = $(this).attr("data-topics");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topics + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          var results = response.data;
          console.log(this)

          for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var topicsImage = $("<img>");
            topicsImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(topicsImage);

          $("#gifs-appear-here").prepend(gifDiv);
          }
        });

        });