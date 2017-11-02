$(document).ready(function() {
  $("form#number-beep").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());

var newNumber = [];{
newNumber.push(number + 1);

};

    $("#result").text(newNumber);

    });
});
