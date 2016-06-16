( function( $ ) {
    $( function() {
        'use strict';
        var settings = { 
            debug:true,
            anchors: 'a',
            onStart: {
                duration: 2000, // ms
                render: function ( $container ) {
                    $container.toggleClass('site-content-in').delay(500).toggleClass('site-content-out');
                }
            },
            onAfter: function( $container ) {
                $container.toggleClass('site-content-in').delay(500).toggleClass('site-content-out');
            }
        };
 
        $( '#main' ).smoothState( settings );
    } );
 
})( jQuery );