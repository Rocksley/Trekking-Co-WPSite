$ = jQuery;
jQuery(document).ready(function($) {
    "use strict";
    $('#trav_trek_country').change(function(){
        $.ajax({
            url: ajaxurl,
            type: "POST",
            data: {
                'action': 'get_cities_in_country',
                'country_id': $(this).val()
            },
            success: function(response){
                if ( response ) {
                    var room_type_id = $('#trav_trek_city').val();
                    $('#trav_trek_city').html(response);
                    $('#trav_trek_city').val(room_type_id);
                    $('#trav_trek_city').select2({
                        placeholder: "Select a City",
                        width: "200px",
                        allowClear: true,
                    });
                }
            }
        });
    });

    $('#trav_trek_city').change(function(){
        if ( ! $('#trav_trek_country').val() ) {
            $.ajax({
                url: ajaxurl,
                type: "POST",
                data: {
                    'action': 'get_country_from_city',
                    'city_id': $(this).val()
                },
                success: function(response){
                    if ( response ) {
                        $('#trav_trek_country').val(response).change();
                    }
                }
            });
        }
    });
});