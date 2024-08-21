
let linkDesc = document.getElementById('desc');
let linkReviews = document.getElementById('reviews');
let linkWhere = document.getElementById('where');

linkDesc.addEventListener('click', function () {
    window.open('index.html', "_self");
})

linkReviews.addEventListener('click', function () {
    window.open('reviews.html', "_self");
})

linkWhere.addEventListener('click', function () {
    window.open('where.html', "_self");
})