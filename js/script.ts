

interface HTMLInputElement extends HTMLElement {
    value: string;
}

let timeout: any = null;


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
