$(document).ready(function() {
  $("#formInformation").submit(function(event) {
    event.preventDefault();
    $("#marioDiv").hide();
    $("#dkDiv").hide();
    $("#masterChief").hide();
    $("#linkZelda").hide();
    $("#dixieKong").hide();
    $("#princessPeach").hide();
    $("#jigglyPuff").hide();
    $("#mistyWilliams").hide();

    const genderType = $("select#genderType").val();
    const facialHair = $("select#facialHair").val();
    const bodyType = $ ("select#bodyType").val();

    if (genderType === 'male' && facialHair === 'moreHairy' && bodyType === 'smaller') {
      $("#marioDiv").toggle();
    }

    if (genderType === 'male' && facialHair === 'moreHairy' && bodyType === 'larger') {
      $("#dkDiv").toggle();
    }

    if (genderType === 'male' && facialHair === 'lessHairy' && bodyType === 'larger') {
      $("#masterChief").toggle();
    }

    if (genderType === 'male' && facialHair === 'lessHairy' && bodyType === 'smaller') {
      $("#linkZelda").toggle();
    }

    if (genderType === 'female' && facialHair === 'moreHairy' && bodyType === 'larger') {
      $("#dixieKong").toggle();
    }

    if (genderType === 'female' && facialHair === 'moreHairy' && bodyType === 'smaller') {
      $("#jigglyPuff").toggle();
    }

    if (genderType === 'female' && facialHair === 'lessHairy' && bodyType === 'larger') {
      $("#mistyWilliams").toggle();
    }

    if (genderType === 'female' && facialHair === 'lessHairy' && bodyType === 'smaller') {
      $("#princessPeach").toggle();
    }

  });
});