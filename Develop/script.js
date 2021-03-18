

$(document).ready(function () {

    //Moment.js date for time and date display
            function fetchData() {
                $("#currentDay").text(moment().format('MMM DD YYYY, h:mm:ss a'));
            }

    //Color coding schedule dependant upon hour
    function changeColor() {
        $("input").each(function () {
            var rowHour = $(this).attr("id");
            var rowNumber = parseInt(rowHour);
            if (rowNumber === hour) {
                $(this).addClass("currentTime");
            } else if (rowNumber < hour) {
                $(this).addClass("past");
            } else {
                $(this).addClass("futureTime");
            };
        });
    };
 //calling functions
    setInterval(fetchData);
    //setInterval(changeColor);
    changeColor();

});