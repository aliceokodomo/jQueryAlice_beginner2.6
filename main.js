$(document).ready(function() {
    $("#green").mouseenter(function() {
        $("#texte").css("color", "green");
    });
    $("#green").mouseleave(function() {
        $("#texte").css("color", "black");
    });
    $("#red").mouseenter(function() {
        $("#texte").css("color", "red");
    });
    $("#red").mouseleave(function() {
        $("#texte").css("color", "black");
    });
    $("#blue").mouseenter(function() {
        $("#texte").css("color", "blue");
    });
    $("#blue").mouseleave(function() {
        $("#texte").css("color", "black");
    });
})