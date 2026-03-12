document.addEventListener('DOMContentLoaded', function() {
    let tag = getQueryParam('tag');
    if (tag) {
        activateCheckbox(tag);
        checkTagsExtras(tag);
    }
});

function getQueryParam(param) {
    let params = new URLSearchParams(window.location.search);
    return params.get(param);
}

function activateCheckbox(tag) {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.value.toLowerCase() === tag.toLowerCase()) {
            checkbox.checked = true;
        }
    });
}

function checkTagsExtras(tag) {
    const tagsExtras = document.getElementById('tags-extras');
    const tagsToActivate = ['baseado-em-uma-web-novel', 'isekai', 'webtoons'];

    if (tagsToActivate.includes(tag.toLowerCase())) {
        tagsExtras.style.display = 'block';
    }
}

window.onload = function() {
    let tag = getQueryParam('tag');
    if (tag) {
        activateCheckbox(tag);
        checkTagsExtras(tag);
    }
};

//*

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search-chapter-input');
    const chapterItems = document.querySelectorAll('.chapter-item');
    const svgUI2 = document.querySelector('.svg-UI-2');
    const showMoreButton = document.getElementById('show-more-button');
    const hiddenChapters = document.querySelectorAll('.hidden-chapter');
    const chapterPosition = document.querySelector('.chapter-position');
    
    searchInput.addEventListener('input', function() {
        const searchValue = searchInput.value.toLowerCase();
        
        chapterItems.forEach(item => {
            const chapterText = item.textContent.toLowerCase();
            
            item.classList.remove('highlight');
                
            if (searchValue === '' || chapterText.includes(searchValue)) {
                item.style.display = 'block';
                item.classList.remove('hide');
                
                if (searchValue !== '' && chapterText.includes(searchValue)) {
                    item.classList.add('highlight');
                }
            } else {
                item.style.display = 'none';
                item.classList.add('hide');
            }
        });
        
        if (searchValue !== '') {
            hiddenChapters.forEach(function(chapter) {
                chapter.style.display = 'block';
                chapter.classList.remove('hide');
                chapter.classList.add('show');
            });
            showMoreButton.style.display = 'none';
            chapterPosition.classList.add('hide-gradient');
            svgUI2.style.display = 'none';
        } else {
            hiddenChapters.forEach(function(chapter) {
                chapter.style.display = 'none';
                chapter.classList.remove('show');
                chapter.classList.add('hide');
            });
            showMoreButton.style.display = 'block';
            showMoreButton.textContent = 'Mostrar mais';
            chapterPosition.classList.remove('hide-gradient');
            svgUI2.style.display = 'block';
        }
        
        chapterItems.forEach(item => {
            item.offsetHeight;
        });
    });
});


// Função para alternar a ordem de classificação
let ascending = true;

function toggleSortOrder() {
    const chapterContainer = document.querySelector('.all_chapter');
    const chapters = Array.from(chapterContainer.querySelectorAll('.chapter-item'));
    
    chapters.reverse();
    
    chapterContainer.innerHTML = '';
    
    chapters.forEach(chapter => {
        chapterContainer.appendChild(chapter);
    });
    
    ascending = !ascending;
}

// Função para mostrar/ocultar mais capítulos
function changeReadMore() {
    const hiddenChapters = document.querySelectorAll('.hidden-chapter');
    const myButton = document.getElementById('show-more-button');
    const chapterPosition = document.querySelector('.chapter-position');
    const chaptersContainer = document.getElementById('chapters-container');
    
    hiddenChapters.forEach(function(chapter) {
        if (chapter.classList.contains('show')) {
            chapter.style.display = 'none';
            chapter.classList.remove('show');
            chapter.classList.add('hide');
        } else {
            chapter.style.display = 'block';
            chapter.classList.remove('hide');
            chapter.classList.add('show');
        }
    });
    
    if (myButton.textContent === 'Mostrar mais') {
        myButton.textContent = 'Mostrar menos';
        chapterPosition.classList.add('hide-gradient');
    } else {
        myButton.textContent = 'Mostrar mais';
        chapterPosition.classList.remove('hide-gradient');
        chaptersContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search-chapter-input');
    const chapterItems = document.querySelectorAll('.chapter-item');
    
    searchInput.addEventListener('input', function() {
        const searchValue = searchInput.value.toLowerCase();
        
        chapterItems.forEach(item => {
            const chapterText = item.textContent.toLowerCase();
            
            if (searchValue === '' || chapterText.includes(searchValue)) {
                item.style.display = 'block';
                item.classList.add('highlight');
            } else {
                item.style.display = 'none';
                item.classList.remove('highlight');
            }
        });
    });
    
    document.querySelectorAll('.hidden-chapter').forEach(chapter => {
        chapter.classList.add('hide');
    });
});

//

const ratingElements = document.querySelectorAll('.rating');

ratingElements.forEach((rating) => {
    rating.addEventListener('mouseenter', function () {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = this.getAttribute('data-tooltip');
        this.appendChild(tooltip);
    });

    rating.addEventListener('mouseleave', function () {
        const tooltip = this.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});

document.querySelectorAll('.avise').forEach((avise) => {
    avise.addEventListener('mouseenter', function () {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = this.getAttribute('data-tooltip');
        this.appendChild(tooltip);
    });

    avise.addEventListener('mouseleave', function () {
        const tooltip = this.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});
