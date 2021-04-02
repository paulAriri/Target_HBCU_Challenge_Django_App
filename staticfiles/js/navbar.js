let items = document.querySelectorAll('.editdrop');

/*
Fetch Categories From "categories_sample.json()" File
*/

/* 
    Fetch sends a GET request... Negates Django Settings
*/
    fetch("/static/js/categories_sample.json")
        .then(response => response.json())
        .then(data => {
            for(let i = 0; i < 12; i += 1){
                items[i].innerHTML = data[i + 2].displayText;
            }
        });