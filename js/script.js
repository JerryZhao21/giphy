// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$(".search-button").click(function(){
  
  let searchBar = $(".search-term").val();
  let customAPI = "https://api.giphy.com/v1/gifs/search?rating=pg&api_key=dc6zaTOxFJmzC&q=" + searchBar;
fetch(customAPI)
    
  
  .then(function(response) {
  return response.json();
})
  
  .then(function(GIFdata) { 
 // console.log(GIFdata);
  let picURL = GIFdata.data[2].images.original.url;
  //console.log(GIFdata);
  $('body').append('<img src=' + picURL + '>');
  console.log(picURL);
});


 
});

