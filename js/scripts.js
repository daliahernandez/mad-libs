$(document).ready(function(){
  $('#userResponse form').submit(function(event){
    //create a variable and store all of the input id names
    var responses = ["nameOne","nameTwo","animal","ex","verb","noun"];
    //go into each input id names and add the input and id and the name.
    responses.forEach(function(responses){
      var userInput = $('input#'+ responses).val();
      //then go to the story and grab the classes which are names the same as the id names and show the the userInputs.
      $("." + responses).text(userInput);
    })

    $('#story').show();
    event.preventDefault();
  })
})
