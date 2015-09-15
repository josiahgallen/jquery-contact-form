'use strict';

$(document).ready(function() {

    var $form = $('form');
    var $submit = $('button');
    var errorsArray = ['#error1', '#error2', '#error3', '#error4'];
    var infoArray = ['#name', '#email', '#website', 'textarea'];


    $form.submit(function(e) {
        e.preventDefault();
        var pass = false;
        if (!pass) {
            for (var i = 0; i < infoArray.length; i++) {
                if (!$(infoArray[i]).val()) {
                    $(errorsArray[i]).show();
                } else {
                    $(errorsArray[i]).hide();
                }
            }
            if ($(infoArray[1]).val().indexOf('@') === -1) {
                $(errorsArray[1]).show();
            } else {
                $(errorsArray[1]).hide();
            }

            if ($(infoArray[2]).val().indexOf('http://') === -1) {
                $(errorsArray[2]).show();
            } else {
                $(errorsArray[2]).hide();
            }
            pass = !pass;
        }
        console.log('passed');
    })
})
