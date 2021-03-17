

$(document).ready(function () {

    var hour = moment().hours();

    //Moment.js date for top of page
    function getDate() {
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    };
    //Prevents defualt behavior
    function handleFormSubmistion(event) {
        event.preventDefault();

        var userInput = $([]).val();
        //
        if (!userInput) {
            alert('You must enter some information for that hour');
            requestAnimationFrame;
        }
    }

    //Rendering stored inputs after page refresh
    function renderDataStored(event) {
        $(".event").each(function () {
            var inputId = $(this).attr("id");
            $(this).val(localStorage.getItem(inputId));
        });
    };

    //Color coding schedule dependant upon hour
    function changeColor() {
        $("input").each(function () {
            var rowHour = $(this).attr("id");
            var rowNumber = parseInt(rowHour);
            if (rowNumber === hour) {
                $(this).addClass("present");
            } else if (rowNumber < hour) {
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            };
        });
    };

    //Click event to save user input in local storage
    $(".saveBtn").click(function () {
        var scheduleInputs = $(this).siblings(".event").val();
        var inputsLocation = $(this).siblings(".event").attr("id");
        localStorage.setItem(inputsLocation, scheduleInputs);
    });

    setInterval(getDate, 1000);
    changeColor();
    setInterval(changeColor, 1000);
    renderDataStored();

});