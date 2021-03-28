const menuIcon = document.getElementById('menuIcon');
const pageDiv = document.getElementById('pageDiv');
const navLinks = document.getElementById('navLinks');
const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const worksLink = document.getElementById('worksLink');
const contactLink = document.getElementById('contactLink');

// when first loading in, make sure to always load onto home page and add active to home
document.addEventListener('DOMContentLoaded', () => {
    location.href = '#home';
    homeLink.classList.add('active');
});

// hamburger menu: click to toggle nav on/off
menuIcon.addEventListener('click', toggleMenu);
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    if (navbar.className === 'navbar') {
        navbar.className += ' responsive';
    } else {
        navbar.className = 'navbar';
    }
}

// scroll to specific section and add active state to that section
// also works for clicking on a nav link
pageDiv.addEventListener('scroll', activeNav);
function activeNav() {
    const links = navLinks.children;
    for (let i = 0; i < links.length; i++) {
        if (links[i].classList.contains('active')) {
            links[i].classList.remove('active');
        }
    }

    let scrollDistance = pageDiv.scrollTop;
    let windowHeight = window.innerHeight;
    if (scrollDistance < windowHeight) {
        homeLink.classList.add('active');
    } else if (scrollDistance < 2 * windowHeight) {
        aboutLink.classList.add('active');
    } else if (scrollDistance < 3 * windowHeight) {
        worksLink.classList.add('active');
    } else {
        contactLink.classList.add('active');
    }
}

/*
function removeHash(sectionId) {
    // history.pushState('', document.title, window.location.pathname + window.location.search);
    history.replaceState(null, null, ' ');
}
*/

// click on nav link and add active state (dropped)
/*
homeLink.addEventListener('click', () => {
    const links = navLinks.children;
    for (let i = 0; i < links.length; i++) {
        if (links[i].classList.contains('active')) {
            links[i].classList.remove('active');
        }
    }

    homeLink.classList.add('active');
});

aboutLink.addEventListener('click', () => {
    const links = navLinks.children;
    for (let i = 0; i < links.length; i++) {
        if (links[i].classList.contains('active')) {
            links[i].classList.remove('active');
        }
    }

    aboutLink.classList.add('active');
});

worksLink.addEventListener('click', () => {
    const links = navLinks.children;
    for (let i = 0; i < links.length; i++) {
        if (links[i].classList.contains('active')) {
            links[i].classList.remove('active');
        }
    }

    worksLink.classList.add('active');
});

contactLink.addEventListener('click', () => {
    const links = navLinks.children;
    for (let i = 0; i < links.length; i++) {
        if (links[i].classList.contains('active')) {
            links[i].classList.remove('active');
        }
    }

    contactLink.classList.add('active');
});
*/
