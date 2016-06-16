( function( $ ) {
    $( function() {
        'use strict';
        var settings = { 
            debug:true,
            anchors: 'a',
            onStart: {
                duration: 280, // ms
                render: function ( $container ) {
                    $container.addClass( 'is-exiting' );
                }
            },
            onAfter: function( $container ) {
                $container.removeClass( 'is-exiting' );
            }
        };
 
        $( '#main' ).smoothState( settings );
    } );
 
})( jQuery );