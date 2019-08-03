function displayPositive(effects) {
    console.log(effects);
    var networkRequests = [];
​
    for (var i = 0; i < effects.length; i++) {
        var queryURL =
            "https://api.giphy.com/v1/gifs/search?q=" +
            effects[i] +
            "&api_key=NboZIbbhYd3ktqKYAPpw3huD841MgC4E&limit=5";
        var networkRequest = $.ajax({
            url: queryURL,
            method: "GET"
        });
​
        networkRequests.push(networkRequest);
    }
    Promise.all(networkRequests).then(function(responses) {
         for (var i = 0; i < responses.length; i++) {
             console.log({test: responses});
             var gifDiv = $("<div class='myEffect'>");
​
            var spanTag = $('<span>').html(effects[i] + '<br>');
             var imageUrl = responses[i].data[0].images.fixed_width.url;
​
             var imageTag = "<img src='" + imageUrl + "' alt=''>";
​
             gifDiv.prepend(spanTag);
             gifDiv.append(imageTag);
             $('#display-positive').append(gifDiv);
         }
    });
};
​
function displayNegative(effects) {
    console.log(effects);
    var networkRequests = [];
​
    for (var i = 0; i < effects.length; i++) {
        var queryURL =
            "https://api.giphy.com/v1/gifs/search?q=" +
            effects[i] +
            "&api_key=NboZIbbhYd3ktqKYAPpw3huD841MgC4E&limit=5";
        var networkRequest = $.ajax({
            url: queryURL,
            method: "GET"
        });
​
        networkRequests.push(networkRequest);
    }
    Promise.all(networkRequests).then(function(responses) {
         for (var i = 0; i < responses.length; i++) {
             console.log({test: responses});
             var gifDiv = $("<div class='myEffect'>");
​
            var spanTag = $('<span>').html(effects[i] + '<br>');
             var imageUrl = responses[i].data[0].images.fixed_width.url;
​
             var imageTag = "<img src='" + imageUrl + "' alt=''>";
​
             gifDiv.prepend(spanTag);
             gifDiv.append(imageTag);
             $('#display-negative').append(gifDiv);
         }
    });
};
​
function displayMedical(effects) {
    console.log(effects);
    var networkRequests = [];
​
    for (var i = 0; i < effects.length; i++) {
        var queryURL =
            "https://api.giphy.com/v1/gifs/search?q=" +
            effects[i] +
            "&api_key=NboZIbbhYd3ktqKYAPpw3huD841MgC4E&limit=5";
        var networkRequest = $.ajax({
            url: queryURL,
            method: "GET"
        });
​
        networkRequests.push(networkRequest);
    }
    Promise.all(networkRequests).then(function(responses) {
         for (var i = 0; i < responses.length; i++) {
             console.log({test: responses});
             var gifDiv = $("<div class='myEffect'>");
            
            var spanTag = $('<span>').html(effects[i] + '<br>');
             var imageUrl = responses[i].data[0].images.fixed_width.url;
​
             var imageTag = "<img src='" + imageUrl + "' alt=''>";
​
             gifDiv.prepend(spanTag);
             gifDiv.append(imageTag);
             
             $('#display-medical').append(gifDiv);
         }
    });
};






//displayMoodInfo(strainResponse.positive);
