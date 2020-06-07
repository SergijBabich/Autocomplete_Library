import {renderHtml} from './renderData';

let showList = < HTMLElement > document.getElementById('show-list');

let searchInOtherFiles = (matches: Array < object > , searchSity: string) => {

    if (matches.length === 0) {
		count++;

        searchSities(searchSity);
    }
}
let count = 0;
export const searchSities = async (searchSity: string): Promise < void > => {

    try {
        let res = await fetch(`./data/data${count}.js`);
        const cities: Array < object > = await res.json();

        let matches: Array < object > = cities.filter((city: any): Array < string > => {
            const regex: RegExp = new RegExp(`^${searchSity}`, 'gi');
            return city.name.match(regex);
        });

        if (searchSity.length === 0 || matches.length === 0) {
            matches = [];
            showList.innerHTML = ' ';
        }

        renderHtml(matches);

        searchInOtherFiles(matches, searchSity);
    } catch (err) {
        showList.innerHTML = 'The search returned no result';
        count = 0;
    }
}