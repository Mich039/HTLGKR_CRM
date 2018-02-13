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
    $("#newTodo").click(function (e) {
        var txt = $("#input_TODO")[0].value;
        alert(txt);
        
    });
    
    $("#calendar").fullCalendar({
        locale: 'de-at',
        header: {
            left: "prev next",
            center: "today title",
            height: "parent",
            right: "month ,agendaWeek , agendaDay , listWeek"
        },
        editable:true,
        events: [
            {
                "title": "Ceramics",
                "id": "821",
                "start": "2018-01-13 09:00:00",
                "end": "2018-01-31 10:30:00"
            },
            {
                "title": "Zippy",
                "id": "822",
                "start": "2018-01-31 10:00:00",
                "end": "2018-01-31 11:30:00"
            }
        ]
        });
    
});
document.onload(alert("This website is not yet functional. All data displayed are dummy data"));