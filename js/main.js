var catGifs;

var yoFunnyCats = {

    init: function () {
        'use strict';

        yoFunnyCats.getNewCats();

        yoFunnyCats.addEventListeners();

        yoFunnyCats.render();

    },

    addEventListeners: function () {
        'use strict';
        
        $( '#gif-container' ).on( 'click', yoFunnyCats.displayNewCat );

    },

    getNewCats: function () {
        'use strict';
        
        $.ajax({
            async: false,
            type: "GET",
            dataType: 'json',
            url: 'php/funnycats.php',
        }).done( function ( response ) {
            window.catGifs = response;
        });
    },

    displayNewCat: function () {
        'use strict';

        var n = Math.floor(Math.random() * 99),
            el = '<img src="';
        
        el += catGifs[n];
        el += '" />';

        $( '#gif-container' ).html( el );
    },

    render: function () {
        'use strict';

        yoFunnyCats.displayNewCat();

    }

};

yoFunnyCats.init();