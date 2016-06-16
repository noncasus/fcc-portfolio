( function( $ ) {
    $( function() {
        'use strict';
        var settings = { 
            debug:true,
            anchors: 'a',
            onStart: {
                duration: 2000, // ms
                render: function ( $container ) {
                    $container.removeClass('site-content-in').addClass( 'is-exiting' );
                }
            },
            onAfter: function( $container ) {
                $container.removeClass( 'is-exiting' ).addClass('site-content-in');
            }
        };
 
        $( '#main' ).smoothState( settings );
    } );
 
})( jQuery );