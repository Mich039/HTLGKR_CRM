$(document).ready(function () {
    console.log("document.ready()");
    $("#expand_custom_options").click(function (e) {
        console.log("onclick");
        $("#expand_custom_options, #expand_custom_options img").animate({ width:'300px' });
        e.stopPropagation();
    });
    $("*:not(#expand_custom_options, #expand_custom_options img)").click(function (e) {
        $("#expand_custom_options").style.width()
        e.stopPropagation();
    })
});