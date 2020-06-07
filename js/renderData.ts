
let search = document.getElementById('search') as HTMLInputElement;

let chooseSuggestion = (value: string): void => {
    search.value = value;
}

 const renderHtml = (matches: Array < object > ) => {

    if (matches.length > 0) {
        let render: string = matches.map((match: any) => `
           <div class='card' id='card' onClick="chooseSuggestion('${match.name}')">
                <p aria-label="Result element" >${match.name}</p>
           </div>
        `).join('');

        showList.innerHTML = render;
    }
};

