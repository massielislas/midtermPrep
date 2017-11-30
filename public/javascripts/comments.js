$(document).ready(function(){
  $("#postComment").click(function(){
    var myobj = {Name:$("#name").val(),Comment:$("#comment").val()};
    jobj = JSON.stringify(myobj);
    $("#json").text(jobj);
  });
});
