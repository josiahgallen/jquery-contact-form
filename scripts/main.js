'use strict';

$(document).ready(function() {

    var $form = $('form');
    var $recieved = $('#recieved')
    var errorsArray = ['#error1', '#error2', '#error3', '#error4'];
    var infoArray = ['#name', '#email', '#website', 'textarea'];
    var userData = [];


    $form.submit(function(e) {
        e.preventDefault();
        var pass = false;
        for (var i = 0; i < infoArray.length; i++) {
            if (!$(infoArray[i]).val()) {
                $(errorsArray[i]).show();
                $(infoArray[i]).css({borderLeft: 'solid red .3em'});
                pass = true;
            } else {
                $(errorsArray[i]).hide();
                $(infoArray[i]).css({borderLeft: 'solid black .3em'});
            }
        }
        if ($(infoArray[1]).val().indexOf('@') === -1) {
            $(errorsArray[1]).show();
            $(infoArray[1]).css({borderLeft: 'solid red .3em'});
            pass = true;
        } else {
            $(errorsArray[1]).hide();
            $(infoArray[1]).css({borderLeft: 'solid black .3em'});
        }

        if ($(infoArray[2]).val().indexOf('http://') === -1) {
            $(errorsArray[2]).show();
            $(infoArray[2]).css({borderLeft: 'solid red .3em'});
            pass = true;
        } else {
            $(errorsArray[2]).hide();
            $(infoArray[2]).css({borderLeft: 'solid black .3em'});
        }
        if (!pass) {
        	console.log('pass');
        	for (var i = 0; i < infoArray.length; i++) {
        		userData.push($(infoArray[i]).val());
        		$form.hide();
        		$recieved.text('Thanks for contacting us ' + userData[0] + '. We recieved your message and will contact you shortly.')
        		$recieved.show();
        	}

        	console.log(userData);
        }
    })
})
