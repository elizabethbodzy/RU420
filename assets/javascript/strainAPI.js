//Global Variables

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
                for (i = 0; i < positiveResponse.length; i++) {
                    var positiveEffectDivTag = $('<div>').addClass('positiveEffects');
                    var spanPositiveTag = $('<h4>')
                    .html(positiveResponse[i])
                    .addClass('positiveEffectTitle');
                    positiveEffectDivTag.prepend(spanPositiveTag);
                    //console.log(strainResponse);
                    };

                for(i = 0; i < negativeResponse.length; i++ ){
                    var negativeEffectDivTag = $('<div>').addClass('negativeEffects');
                    var spanNegativeTag = $('<h4>')
                    .html(negativeResponse[i])
                    .addClass('negativeEffectTitle');
                    negativeEffectDivTag.prepend(spanNegativeTag);
                    //console.log(strainResponse);
                    };

                for(i = 0; i < medicalResponse.length; i++){
                    var medicalEffectDivTag = $('<div>').addClass('medicalEffects');
                    var spanMedicalTag = $('<h4>')
                    .html(medicalResponse[i])
                    .addClass('medicalEffectTitle');
                    medicalEffectDivTag.prepend(spanMedicalTag);
                    //console.log(strainResponse);
                    };
            
                displayMoodInfo(positiveResponse);
                displayMoodInfo(negativeResponse);
                displayMoodInfo(medicalResponse);

        });
};
$(document).on('click', 'button', showEffects);


