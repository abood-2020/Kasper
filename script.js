$(document).ready(function() {
    $("#view").click(function() {
        $("#view").hide();
    })
    $("#card").click(function(){
        $("#card").hide("slow",function(){alert("Hello World ?...")});
    })
});