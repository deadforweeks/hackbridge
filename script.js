

$(document).ready(function(){

console.log("Script included!");



$('<input type="checkbox" value="1"/>').prependTo('#checklist li');



$("#directions > li > div").click(function(){



$(this).next().toggle(300);

});



$("#button").click(function(){

$("#photo").hide();

});



$("#button").dblclick(function(){

$("#photo").show();

});

});
