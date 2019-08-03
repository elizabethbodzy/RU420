function loadBtn(){
//$(document).ready(function () {
    
    var QueryURL =
        "http://strainapi.evanbusse.com/dOdR7S1/strains/search/race/sativa";
    $.ajax({
        url: QueryURL,
        method: "GET"
    }).then(function(strainResponse) {
        //console.log(strainResponse);
        $('#indicasBtn').empty();
        
        for (i = 0; i <= 2; i++){
           // console.log(strainResponse[i].name);
           var rand = strainResponse[Math.floor(Math.random() * strainResponse.length)];

           var button = $('<button>');
           
           var pTag = $('<p>');
          $(button).appendTo('#indicasBtn').addClass('button');

          button.attr('strainid', rand.id);
          button.attr('id', rand.id);
          $(pTag).append(rand.name).addClass('lead mb-0');
          $(button).append(pTag);
          
           //console.log(rand.name + ' ' + rand.id);
        };
           });
//});
};

loadBtn();