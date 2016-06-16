( function( $ ) {
    $( function() {
        'use strict';
        var settings = { 
            debug:true,
            anchors: 'a',
            onStart: {
                duration: 2000, // ms
                render: function ( $container ) {
                    $container.removeClass('site-content-in').addClass( 'site-content-out' );
                }
            },
            onAfter: function( $container ) {
                $container.removeClass( 'site-content-out' ).addClass('site-content-in');
            }
        };
 
        $( '#main' ).smoothState( settings );
    } );
 
})( jQuery );