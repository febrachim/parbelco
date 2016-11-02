(function($) {
    $(function() {

        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 240
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: false // Choose whether you can drag to open on touch screens
        });

        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space