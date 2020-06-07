import {preloader} from '../components/preloader';
import {searchSities} from '../components/searching';
import {renderHtml} from '../components/renderData';

interface HTMLInputElement extends HTMLElement {
    value: string;
}

let timeout: any = null;
let search = document.getElementById('search') as HTMLInputElement;

const startSearching = (value: string): void => {
        searchSities(value);

        preloader(true);
}

const checkInputValue = (value: string): void => {
    search.value = '';

    preloader(true);
}

let searchData = (value: string): void => {
    if (search.value.match(/^[ ]+$/)) {
        checkInputValue(value)
    } else {
        startSearching(value);
    }
}

search.addEventListener('input', () => {

    clearTimeout(timeout);

    preloader(false);

    timeout = setTimeout(() => {
       searchData(search.value);
    }, 200);

});
