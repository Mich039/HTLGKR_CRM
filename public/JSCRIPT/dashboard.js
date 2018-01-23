$(document).ready(function () {
    $("#expand_custom_options")[0].style.width = '20%';
    $("#main aside")[0].style.width = $("#expand_custom_options")[0].style.width;
    console.log("document.ready()");
    $("#expand_custom_options").click(function (e) {
        $("#expand_custom_options")[0].style.width = '100%';
        $("#main aside")[0].style.width = '100%';
        $("#main aside")[0].style.alignItems = 'baseline';
        $("#main aside")[0].style.minWidth = 'auto';
        console.log(new Date().getMilliseconds());
        setTimeout(function (e) {
            console.log(new Date().getMilliseconds());
            $("#main aside a span").toArray().forEach(function (e) {
                console.log(e);
                e.style.display = "inline-block";

            })
        }, 300);
        
        console.log("onExpandClick - " + parseFloat(window.getComputedStyle($("#expand_custom_options")[0]).width));
        e.stopPropagation();
    });
    $("*:not(#expand_custom_options, #expand_custom_options img)").click(function (e) {
        $("#expand_custom_options")[0].style.width = '20%';
        $("#main aside")[0].style.width = '20%';
        $("#main aside")[0].style.alignItems = 'center';
        $("#main aside")[0].style.minWidth = 'fit-content';
        $("#main aside a span").toArray().forEach(function (e) {
            console.log(e);
            e.style.display = "none";
        })
        console.log("onShrinkClick");
        e.stopPropagation();
    })

    //$("#expand_custom_options").click(function (e) {
    //    $("#expand_custom_options")[0].style.width = '100%';
    //    $("#main aside")[0].style.width = parseFloat(window.getComputedStyle($("#expand_custom_options")[0]).width);
    //    console.log("onExpandClick - " + parseFloat(window.getComputedStyle($("#expand_custom_options")[0]).width));
    //    e.stopPropagation();
    //});
    //$("*:not(#expand_custom_options, #expand_custom_options img)").click(function (e) {
    //    $("#expand_custom_options")[0].style.width = '20%';
    //    $("#main aside")[0].style.width = parseFloat(window.getComputedStyle($("#expand_custom_options")[0]).width);
    //    console.log("onShrinkClick - " + parseFloat(window.getComputedStyle($("#expand_custom_options")[0]).width));
    //    e.stopPropagation();
    //})
});