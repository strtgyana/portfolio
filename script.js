let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

const toggleThemeBtn = document.getElementById('toggleTheme');

function updateThemeIcon() {
    if (document.body.classList.contains('light-mode')) {
        toggleThemeBtn.textContent = '🌙';
    } else {
        toggleThemeBtn.textContent = '☀️';
    }
}

// atualizar para o tema escuro toda vez que netra na página
updateThemeIcon();

toggleThemeBtn.onclick = function() {
    document.body.classList.toggle('light-mode');
    updateThemeIcon();
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const cookiesMsg = document.getElementById("cookiesMsg");

    // ve se o usuário já aceitou os cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        cookiesMsg.classList.add("mostrar");
    }

    // funcao que aceita os cookies
    window.aceitarCookies = function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookiesMsg.classList.remove("mostrar");
    };
});

window.addEventListener('scroll', function() {
    const skillsSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.bar .progress-line');

    if (!skillsSection) return;

    const sectionTop = skillsSection.getBoundingClientRect().top;
    const sectionBottom = skillsSection.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // rola a seção de habilidades para verificar se está na tela visivel
    if (sectionBottom > 0 && sectionTop < windowHeight) {
        skillBars.forEach(bar => {
            bar.classList.add('animate');
        });
    } else {
        skillBars.forEach(bar => {
            bar.classList.remove('animate');
        });
    }
});

