"use strict";
var form = document.querySelector('.new-item-form');
var field = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var Amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(field.value, toFrom.value, details.value, Amount.valueAsNumber);
});
