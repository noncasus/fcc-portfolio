( function( $ ) {
 
    $( function() { // Ready
        'use strict';
        var settings = { 
            anchors: 'a',
            onStart: {
                duration: 2000, // ms
                render: function ( $container ) {
                    $container.addClass( 'site-content-out' );
                }
            },
            onAfter: function( $container ) {
                $container.removeClass( 'site-content-out' );
            },
            debug:true
        };
 
        $( '#container' ).smoothState( settings );
    } );
 
})( jQuery );