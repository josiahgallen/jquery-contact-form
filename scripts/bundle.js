(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

    var $form = $('form');
    var $submit = $('button');
    var errorsArray = ['#error1', '#error2', '#error3', '#error4'];
    var infoArray = ['#name', '#email', '#website', 'textarea'];

    $form.submit(function (e) {
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
    });
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map