"use strict";
var preLoader = document.getElementById('load');
var preloader = function (isLoad) {
    var addClassForHide = 'loaded_hiding';
    preLoader.classList.add('loaded');
    // preLoader.setAttribute('aria-hidden' , 'false')
    showList.classList.add(addClassForHide);
    if (isLoad) {
        preLoader.classList.remove("loaded");
        //  preLoader.setAttribute('aria-hidden' , 'true')
        preLoader.classList.add(addClassForHide);
        showList.classList.remove(addClassForHide);
    }
};
