// Smooth scrolling for Table of Contents
document.querySelectorAll('#table-of-contents a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Background parallax effect
window.addEventListener('scroll', function() {
    if (window.innerWidth > 768) { // Only apply on larger screens
        document.body.style.backgroundPositionY = -window.scrollY / 5 + "px";
    } else {
        document.body.style.backgroundPositionY = 'initial';
    }
});
