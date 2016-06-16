( function( $ ) {
    $( function() {
        'use strict';
        var settings = { 
            debug:true,
            anchors: 'a',
            onStart: {
                duration: 2000, // ms
                render: function ( $container ) {
                    $container.removeClass('site-content-in').delay(200).addClass( 'site-content-out' );
                }
            },
            onAfter: function( $container ) {
                $container.removeClass( 'site-content-out' ).delay(200).addClass('site-content-in');
            }
        };
 
        $( '#main' ).smoothState( settings );
    } );
 
})( jQuery );