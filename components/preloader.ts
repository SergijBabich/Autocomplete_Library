let preLoader = < HTMLElement > document.getElementById('load');
let showList = < HTMLElement > document.getElementById('show-list');

export let preloader = (isLoad: boolean): void => {
        let addClassForHide: string = 'loaded_hiding';

        preLoader.classList.add('loaded')
        // preLoader.setAttribute('aria-hidden' , 'false')

        showList.classList.add(addClassForHide);

        if (isLoad) {
            preLoader.classList.remove("loaded")
            //  preLoader.setAttribute('aria-hidden' , 'true')
            preLoader.classList.add(addClassForHide)

            showList.classList.remove(addClassForHide);
        }
    }