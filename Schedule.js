$(document).ready(function() {
    $('.saveBtn').on('click', function() {
        // Event Listener in Jquery
        console.log(this);
        const value = $(this)
            .siblings('.description')
            .val();
        const time = $(this).attr('data-time');
        const hour = moment().hour();

        localStorage.setItem(time, value);
    });

    // date and time
    $('#currentDay').text(moment());

    // Update seconds
    setInterval(displayTodaysDate, 1000);

    // Update date on page every second
    currentDate = $('#currentDay');
    displayTodaysDate();

    function displayTodaysDate() {

        currentDate.text(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
    }
    // Store hours into an array
    const timeArray = [];
    // Loop through hours and push them into an array
    for (let i = 9; i < 18; i++) {
        timeArray.push(
            moment()
            .hour(i)
            .format('h, a')
        );
    }
    console.log(timeArray);


    function ResetCal() {
        localStorage.clear()
        location.reload()
    }

    $(".clearcal").on("click", ResetCal);


    // Background colors
    function setColors() {
        const currentHr = moment().hours();
        console.log(currentHr);
        $('.time-block').each(function() {
            const currentId = $(this).attr('id');
            console.log(currentHr > currentId);
            if (currentHr > currentId) {
                $(this).addClass('past');
            } else if (currentHr < currentId) {
                $(this)
                    .addClass('future')
                    .removeClass('past', 'present');
            } else {
                $(this)
                    .addClass('present')
                    .removeClass('past', 'future');
            }
        });
    }

    // Append local storage data to the screen
    function saveLocalStorage() {
        const userInput9 = localStorage.getItem('9');
        $('#9')
            .children('.description')
            .text(userInput9);

        const userInput10 = localStorage.getItem('10');
        $('#10')
            .children('.description')
            .text(userInput10);

        const userInput11 = localStorage.getItem('11');
        $('#11')
            .children('.description')
            .text(userInput11);

        const userInput12 = localStorage.getItem('12');
        $('#12')
            .children('.description')
            .text(userInput12);

        const userInput13 = localStorage.getItem('13');
        $('#13')
            .children('.description')
            .text(userInput13);

        const userInput14 = localStorage.getItem('14');
        $('#14')
            .children('.description')
            .text(userInput14);

        const userInput15 = localStorage.getItem('15');
        $('#15')
            .children('.description')
            .text(userInput15);

        const userInput16 = localStorage.getItem('16');
        $('#16')
            .children('.description')
            .text(userInput16);

        const userInput17 = localStorage.getItem('17');
        $('#17')
            .children('.description')
            .text(userInput17);
    }

    setColors();
    saveLocalStorage();
});