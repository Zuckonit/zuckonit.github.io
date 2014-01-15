/*jshint undef:false */
(function () {
    "use strict";
    
    $(document).ready(function ()
    {
        
        var w_height = $(window).height();
        
        /* Initialize project filters */
        $('#filtered-list').mixitup();
        
        /* Center Tree menu */
        var marginTop = (w_height-$('#menu').height())>0 ? w_height-$('#menu').height():0;
        $('#menu').css('margin-top', marginTop/2);
    });
}).call(this);
