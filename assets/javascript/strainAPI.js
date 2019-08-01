//Global Variables

//onclick API call
function showEffects() {
    $("button").on("click", function(event) {
        //event.preventDefault();
        $("#display-data").empty();
        var strainId = $(this).attr("strainID");

        var effectsQueryURL =
            "http://strainapi.evanbusse.com/dOdR7S1/strains/data/effects/" +
            strainId +
            "";
        $.ajax({
            url: effectsQueryURL,
            method: "GET"
        }).then(function(strainResponse) {
            var positiveReponse = strainResponse.positive;
            for (i = 0; i < positiveReponse.length; i++) {
                var effectDivTag = $("<div>").addClass("effects");
                var spanTag = $("<h4>")
                    .html(positiveReponse[i])
                    .addClass("effectTitle");
                effectDivTag.prepend(spanTag);
                //$("#display-data").prepend(effectDivTag);
                // $(effectDivTag).appendTo(selector);
            
            }
            displayMoodInfo(positiveReponse);
        });
    });
}

showEffects();


