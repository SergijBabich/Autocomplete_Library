"use strict";
var timeout = null;
var startSearching = function (value) {
    searchSities(value);
    preloader(true);
};
var checkInputValue = function (value) {
    search.value = '';
    preloader(true);
};
var searchData = function (value) {
    if (search.value.match(/^[ ]+$/)) {
        checkInputValue(value);
    }
    else {
        startSearching(value);
    }
};
search.addEventListener('input', function () {
    clearTimeout(timeout);
    preloader(false);
    timeout = setTimeout(function () {
        searchData(search.value);
    }, 200);
});
