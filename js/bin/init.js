(function($) {
    $(function() {

        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 240
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: false // Choose whether you can drag to open on touch screens
        });

        $('.parallax').parallax();

        $(".animsition").animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 250,
            outDuration: 250,
            loading: true,
            loadingParentElement: 'body', //animsition wrapper element
            loadingClass: 'animsition-loading',
            loadingInner: '<img src="squares.svg" />', // e.g '<img src="loading.svg" />'
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space