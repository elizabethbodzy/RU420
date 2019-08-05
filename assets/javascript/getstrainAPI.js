function loadGitStrainBtn(){
    var button = $('<button>');
    $(button).appendTo('#gitStrainDiv');
    button.attr('id', 'gitStrainsBtn');
    $(button).text('Git More Strains');    
    };
   
function loadIndicaBtn(){
    var QueryURL =
        "https://strainapi.evanbusse.com/dOdR7S1/strains/search/race/indica";
    $.ajax({
        url: QueryURL,
        method: "GET"
    }).then(function(strainResponse) {
        $('#indicaBtn').empty();
        
        for (i = 0; i <= 2; i++){
           var rand = strainResponse[Math.floor(Math.random() * strainResponse.length)];

           var button = $('<button>');
           
           var pTag = $('<p>');
          $(button).appendTo('#indicaBtn').addClass('button');

          button.attr('strainid', rand.id);
          button.attr('id', rand.id);
          $(pTag).append(rand.name).addClass('lead mb-0');
          $(button).append(pTag);
        };
        });
};

function loadSativaBtn(){
    var QueryURL =
    "https://strainapi.evanbusse.com/dOdR7S1/strains/search/race/sativa";
$.ajax({
    url: QueryURL,
    method: "GET"
}).then(function(strainResponse) {
    $('#sativaBtn').empty();
    
    for (i = 0; i <= 2; i++){
       var rand = strainResponse[Math.floor(Math.random() * strainResponse.length)];

       var button = $('<button>');
       
       var pTag = $('<p>');
      $(button).appendTo('#sativaBtn').addClass('button');

      button.attr('strainid', rand.id);
      button.attr('id', rand.id);
      $(pTag).append(rand.name).addClass('lead mb-0');
      $(button).append(pTag);
    };
    });
};

function loadHybridBtn(){
    var QueryURL =
    "https://strainapi.evanbusse.com/dOdR7S1/strains/search/race/hybrid";
$.ajax({
    url: QueryURL,
    method: "GET"
}).then(function(strainResponse) {
    $('#hybridBtn').empty();
    
    for (i = 0; i <= 2; i++){
       var rand = strainResponse[Math.floor(Math.random() * strainResponse.length)];

       var button = $('<button>');
       
       var pTag = $('<p>');
      $(button).appendTo('#hybridBtn').addClass('button');

      button.attr('strainid', rand.id);
      button.attr('id', rand.id);
      $(pTag).append(rand.name).addClass('lead mb-0');
      $(button).append(pTag);
    };
    });
};

loadGitStrainBtn();
loadIndicaBtn();
loadSativaBtn();
loadHybridBtn();