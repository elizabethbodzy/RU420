//onclick API call
function showEffects() {
        $('#display-data').empty();
        var strainId = $(this).attr('strainid');

        var effectsQueryURL =
            "http://strainapi.evanbusse.com/dOdR7S1/strains/data/effects/" +
            strainId +
            "";
        $.ajax({
            url: effectsQueryURL,
            method: "GET"
        }).then(function(strainResponse) {
            var positiveResponse = strainResponse.positive;
            var negativeResponse = strainResponse.negative;
            var medicalResponse = strainResponse.medical;

                displayMoodInfo(positiveResponse);
                displayMoodInfo(negativeResponse);
                displayMoodInfo(medicalResponse);

        });
};
$(document).on('click', 'button', showEffects);


