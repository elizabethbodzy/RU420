//onclick API call
function showEffects() {
        $('#display-positive').empty();
        $('#display-negative').empty();
        $('#display-medical').empty();
        var positiveTitle = $('<span>').html('Positive Effects'+'<br>');
        var negativeTitle = $('<span>').html('Negative Effects'+'<br>');
        var medicalTitle = $('<span>').html('Medical Effects'+'<br>');
        $('#display-positive').append(positiveTitle).addClass('effectCategory');
        $('#display-negative').append(negativeTitle).addClass('effectCategory');
        $('#display-medical').append(medicalTitle).addClass('effectCategory');
        var strainId = $(this).attr('strainid');

        var effectsQueryURL =
            "https://strainapi.evanbusse.com/dOdR7S1/strains/data/effects/" +
            strainId +
            "";
        $.ajax({
            url: effectsQueryURL,
            method: "GET"
        }).then(function(strainResponse) {
            var positiveResponse = strainResponse.positive;
            var negativeResponse = strainResponse.negative;
            var medicalResponse = strainResponse.medical;

                displayPositive(positiveResponse);
                displayNegative(negativeResponse);
                displayMedical(medicalResponse);
        });
};
$(document).on('click', 'button', showEffects);


