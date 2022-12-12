const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if(id) {
        // removes active from other buttons and adds active class to button that has been clicked
        btns.forEach(function(btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        // hides other articles and adds active to one that has been clicked
        articles.forEach(function(article) {
            article.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active')
    }
});

