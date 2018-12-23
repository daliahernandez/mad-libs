$(document).ready(function(){
  $('#userResponse form').submit(function(event){
    var nameOneInput = $('input#nameOne').val();
    var nameTwoInput = $('input#nameTwo').val();
    var animalInput = $('input#animal').val();
    var exInput = $('input#ex').val();
    var verbInput = $('input#verb').val();
    var nounInput = $('input#noun').val();

    $('.nameOne').text(nameOneInput);
    $('.nameTwo').text(nameTwoInput);
    $('.animal').text(animalInput);
    $('.ex').text(exInput);
    $('.verb').text(verbInput);
    $('.noun').text(nounInput)

    $('#story').show();
    event.preventDefault();
  })
})
