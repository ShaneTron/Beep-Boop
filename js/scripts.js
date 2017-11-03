$(document).ready(function() {
  $("form#number-beep").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var newNumber = [];

    for(var index = 0; index <= number; index += 1) {
      var beepboop = index;
      if (beepboop % 10 === 0 || beepboop === 0 ) {
        beepboop = "beep"
      }
        else if (beepboop % 10 === 1 || beepboop === 1 || (index > 10 && index < 20 )) {
        beepboop= "boop"
      }
        else if (beepboop % 3 === 0 ) {
        beepboop = "I'm sorry dave. I can not do that!"
      }
        newNumber.push("<li>" + beepboop + "</li>")
      }

      $("#result").append(newNumber);
  });
});
