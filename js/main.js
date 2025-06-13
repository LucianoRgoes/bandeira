document.addEventListener('DOMContentLoaded', function () {
    // Menu de navegação responsivo
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    // Animação de rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação de fade-in para elementos ao rolar a página
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    // Verificar elementos ao carregar a página
    checkFade();

    // Verificar elementos ao rolar a página
    window.addEventListener('scroll', checkFade);

    // Adicionar classe ativa ao menu de navegação com base na seção visível
    const sections = document.querySelectorAll('section');

    function highlightNavigation() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector('nav ul li a[href="#' + sectionId + '"]')?.classList.add('active');
            } else {
                document.querySelector('nav ul li a[href="#' + sectionId + '"]')?.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Botão de voltar ao topo
    const backToTopButton = document.querySelector('.back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});


