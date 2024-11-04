// Smooth scrolling for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
