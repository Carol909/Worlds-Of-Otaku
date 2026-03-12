let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active')
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
}

function prev(){
    slides[index].classList.remove('active')
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
}

setInterval(next, 9000);

//*

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.filter-genre, .filter-tag');
    const comics = document.querySelectorAll('.comic');
    
    let tag = getQueryParam('tag');
    if (tag) {
        activateCheckbox(tag);
        showExtraTags(tag);
        filterComics();
    }
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            filterComics();
        });
    });
    
    function filterComics() {
        comics.forEach(comic => {
            comic.style.display = 'none';
            
            let showComic = true;
            
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    const filterValue = checkbox.value;
                    
                    if (!comic.classList.contains(filterValue.toLowerCase())) {
                        showComic = false;
                    }
                }
            });
            
            if (showComic) {
                comic.style.display = 'block';
            }
        });
    }
    
    function showExtraTags(tag) {
        const extraTagsContainer = document.querySelector('.tag');
        const tagsThatRequireExtras = ['webtoons', 'baseado-em-uma-web-novel', 'colorido', 'adaptado-para-anime'];
    
        
        if (tagsThatRequireExtras.includes(tag.toLowerCase())) {
            extraTagsContainer.classList.add('active');
        }
    }
    
    function getQueryParam(param) {
        let params = new URLSearchParams(window.location.search);
        return params.get(param);
    }
    
    function activateCheckbox(tag) {
        checkboxes.forEach(checkbox => {
            if (checkbox.value.toLowerCase() === tag.toLowerCase()) {
                checkbox.checked = true;
                showExtraTags(tag);
            }
        });
    }
    
    document.getElementById("tag").addEventListener("click", function() {
        this.parentElement.classList.toggle("active");
    });
});