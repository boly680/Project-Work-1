window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // change 50 to adjust when it appears
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

function filterMovies(genre) {
  const movies = document.querySelectorAll('.card');
  movies.forEach(movie => {
    if (genre === 'all' || movie.dataset.genre === genre) {
      movie.style.display = 'block';
    } else {
      movie.style.display = 'none';
    }
  });
}