$(document).ready(function() {
    $('#flipbook').turn({
        width: 800,
        height: 2000,
        autoCenter: true,
	display: 'single', // Set to single page display
        when: {
            turning: function(event, page, view) {
                document.getElementById('page-turn-sound').play();
            }
        }
    });




    


// Arrow click events to flip pages
    $('#left-arrow').click(function () {
        $('#flipbook').turn('previous');
    });

    $('#right-arrow').click(function () {
        $('#flipbook').turn('next');
    });






});



