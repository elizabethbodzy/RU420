function displayMoodInfo(effects) {
    console.log(effects);
    var networkRequests = [];

    for (var i = 0; i < effects.length; i++) {
        var queryURL =
            "https://api.giphy.com/v1/gifs/search?q=" +
            effects[i] +
            "&api_key=NboZIbbhYd3ktqKYAPpw3huD841MgC4E&limit=1";
        var networkRequest = $.ajax({
            url: queryURL,
            method: "GET"
        });

        networkRequests.push(networkRequest);
    }

    Promise.all(networkRequests).then(function(responses) {

        // for (var i = 0; i < responses.length; i++) {
        //     var gifDiv = $("<div class='myEffect'>");

        //     var imageUrl = responses[i].data[0].images.fixed_height_small.url;

        //     var imageTag = "<img src='" + imageUrl + "' alt=''>";

        //     gifDiv.append(imageTag);
        //     $("#gifies").append(gifDiv);
        // }

    });
    var effectMe = $(this).attr("");
}
//displayMoodInfo(strainResponse.positive);
