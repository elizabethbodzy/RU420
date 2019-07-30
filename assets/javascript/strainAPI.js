//Global Variables

//onclick API call
function showEffects(){
$('button').on('click', function(event){
//event.preventDefault();
$('#display-data').empty();
var strainId = $(this).attr('strainID');

console.log(strainId);
var effectsQueryURL = "http://strainapi.evanbusse.com/dOdR7S1/strains/data/effects/"+ strainId +"";
$.ajax({ 
    url: effectsQueryURL,
    method: "GET"
}).then(function(strainResponse){

console.log(strainResponse.positive);

$('#display-data').append(strainResponse.positive);
});

});};

showEffects();