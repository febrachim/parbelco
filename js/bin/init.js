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
            loadingInner: '' // e.g '<img src="loading.svg" />'
        });

//        smooth scroll target
        $('a').click(function() {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500);
            return false;
        });

//        scrollFire
        var options = [
            {selector: '#speck-of-dust', offset: 200, callback: function(el) {
                    $(el).typed({
                        strings: ["just a speck of dust within the galaxy..."],
                        loop: false,
                        // typing speed
                        typeSpeed: 0,
                        // backspacing speed
                        backSpeed: 10,
                        // time before backspacing
                        backDelay: 1700,
                        // show cursor
                        showCursor: true,
                        //callback for every typed string
                        onStringTyped: function() {
                            $('#speck-btn').fadeIn("slow");
                        }
                    });
                }},
            {selector: '#staggered-test', offset: 400, callback: function(el) {
                    Materialize.showStaggeredList($(el));
                }},
            {selector: '#image-test', offset: 500, callback: function(el) {
                    Materialize.fadeInImage($(el));
                }}
        ];
        Materialize.scrollFire(options);

    }); // end of document ready
})(jQuery); // end of jQuery name space