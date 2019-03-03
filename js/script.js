// A $( document ).ready() block.
$( document ).ready(function() {
  $("#tab1").hide();
  $("#tab2").hide();
  $("#tab3").hide();
  $("#tab4").hide();
  $("#tab5").hide();
  $("#tab6").hide();
  $("#intro").show();
  $("#training").hide();
});


$("#introbtn").click(function(){
  $("#intro").show();
  $("#training").hide();
  $("#tab1").hide();
  $("#tab2").hide();
  $("#tab3").hide();
  $("#tab4").hide();
  $("#tab5").hide();
  $("#tab6").hide();
});


$("#trainingbtn").click(function(){
  $("#intro").hide();
  $("#training").show();
  $("#tab1").hide();
  $("#tab2").hide();
  $("#tab3").hide();
  $("#tab4").hide();
  $("#tab5").hide();
  $("#tab6").hide();
});



$("#module1btn").click(function(){
  $("#intro").hide();
  $("#training").hide();
  $("#tab1").show();
  $("#tab2").hide();
  $("#tab3").hide();
  $("#tab4").hide();
  $("#tab5").hide();
  $("#tab6").hide();
});

$("#module2btn").click(function(){
  $("#intro").hide();
  $("#training").hide();
  $("#tab2").show();
  $("#tab1").hide();
  $("#tab3").hide();
  $("#tab4").hide();
  $("#tab5").hide();
  $("#tab6").hide();
});
$("#module3btn").click(function(){
  $("#intro").hide();
  $("#training").hide();
  $("#tab3").show();
  $("#tab2").hide();
  $("#tab1").hide();
  $("#tab4").hide();
  $("#tab5").hide();
  $("#tab6").hide();
});
$("#module4btn").click(function(){
  $("#intro").hide();
  $("#training").hide();
  $("#tab4").show();
  $("#tab2").hide();
  $("#tab3").hide();
  $("#tab1").hide();
  $("#tab5").hide();
  $("#tab6").hide();
});
$("#module5btn").click(function(){
  $("#intro").hide();
  $("#training").hide();
  $("#tab5").show();
  $("#tab2").hide();
  $("#tab3").hide();
  $("#tab4").hide();
  $("#tab1").hide();
  $("#tab6").hide();
});
