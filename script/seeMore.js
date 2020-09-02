//alarm 구현
alarmOn = document.querySelector("#alarmOn");
alarmOff = document.querySelector("#alarmOff");
alarmOnModalLayer = document.querySelector("#alarmOnModalLayer");
alarmOffModalLayer = document.querySelector("#alarmOffModalLayer");

alarmOn.addEventListener("click", function() {
    alarmOn.style.display = "none";
    alarmOff.style.display = "block";
    alarmOffModalLayer.style.display = "block";

    setTimeout(function() {
        alarmOffModalLayer.style.display = "none";
    }, 2000);
});

alarmOff.addEventListener("click", function() {
    alarmOn.style.display = "block";
    alarmOff.style.display = "none";
    alarmOnModalLayer.style.display = "block";

    setTimeout(function() {
        alarmOnModalLayer.style.display = "none";
    }, 2000);
});

//slide Txt구현
function fnSlideTxt() {
    $("#slideShuttleFlame").animate({ "margin-top": "-30px" }, function() {
        $("#slideShuttleFlame").css({ "margin-top": 0 });
        $("#slideShuttleFlame a:first").insertAfter("#slideShuttleFlame a:last");
    });
}
setInterval(fnSlideTxt, 3000);