// 1. Mobile Responsive Menu AToggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEvenetListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
})

// Class mobile menu automatically when a link is clicked
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
        obileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// 2. Dynamic Typing Effect For Job Position
const swords = ["Web Developer", "Designer", "Problem Solver", "Tech Enthusiast"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('job-title').innerHTML += qprd.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        }
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('job-title').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500);
            return false;
        }
        timer = setTimeout(loopDeleting, 60);
    };
    loopDeleting();
}

// Start typing effect on window load
window.onload = typingEffect;

// 3. Dynamic Navbar Active Highlighting on Scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href").includes(current)) {
            item.classList.add("active");
        }
    });
});