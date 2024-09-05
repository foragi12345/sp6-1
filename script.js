// JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('companyLogo');

    logo.addEventListener('mouseover', () => {
        logo.style.filter = 'brightness(1.5)';
    });

    logo.addEventListener('mouseout', () => {
        logo.style.filter = 'brightness(1)';
    });
});
