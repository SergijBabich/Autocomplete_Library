"use strict";
var search = document.getElementById('search');
var chooseSuggestion = function (value) {
    search.value = value;
};
var renderHtml = function (matches) {
    if (matches.length > 0) {
        var render = matches.map(function (match) { return "\n           <div class='card' id='card' onClick=\"chooseSuggestion('" + match.name + "')\">\n                <p aria-label=\"Result element\" >" + match.name + "</p>\n           </div>\n        "; }).join('');
        showList.innerHTML = render;
    }
};
