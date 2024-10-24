gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//
//                                                                      
//                                                                      
//  /$$$$$$$  /$$$$$$  /$$ /$$   /$$ /$$   /$$ /$$   /$$ /$$   /$$      
//  /$$_____/ /$$__  $$|__/| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
// |  $$$$$$ | $$  \ $$ /$$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//\____  $$| $$  | $$| $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//  /$$$$$$$/|  $$$$$$/| $$|  $$$$$$/|  $$$$$$/|  $$$$$$/|  $$$$$$/      
// |_______/  \______/ | $$ \______/  \______/  \______/  \______/       
//                /$$  | $$                                              
//               |  $$$$$$/                                              
//                \______/                                               
//
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#64ffda'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#64ffda',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

//
//                                                                      
//                                                                      
//  /$$$$$$$  /$$$$$$  /$$ /$$   /$$ /$$   /$$ /$$   /$$ /$$   /$$      
//  /$$_____/ /$$__  $$|__/| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
// |  $$$$$$ | $$  \ $$ /$$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//\____  $$| $$  | $$| $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//  /$$$$$$$/|  $$$$$$/| $$|  $$$$$$/|  $$$$$$/|  $$$$$$/|  $$$$$$/      
// |_______/  \______/ | $$ \______/  \______/  \______/  \______/       
//                /$$  | $$                                              
//               |  $$$$$$/                                              
//                \______/                                               
//
gsap.from('.hero-content', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.5
});

//
//                                                                      
//                                                                      
//  /$$$$$$$  /$$$$$$  /$$ /$$   /$$ /$$   /$$ /$$   /$$ /$$   /$$      
//  /$$_____/ /$$__  $$|__/| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
// |  $$$$$$ | $$  \ $$ /$$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//\____  $$| $$  | $$| $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//  /$$$$$$$/|  $$$$$$/| $$|  $$$$$$/|  $$$$$$/|  $$$$$$/|  $$$$$$/      
// |_______/  \______/ | $$ \______/  \______/  \______/  \______/       
//                /$$  | $$                                              
//               |  $$$$$$/                                              
//                \______/                                               
//
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1
    });
});

//
//                                                                      
//                                                                      
//  /$$$$$$$  /$$$$$$  /$$ /$$   /$$ /$$   /$$ /$$   /$$ /$$   /$$      
//  /$$_____/ /$$__  $$|__/| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
// |  $$$$$$ | $$  \ $$ /$$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//\____  $$| $$  | $$| $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//  /$$$$$$$/|  $$$$$$/| $$|  $$$$$$/|  $$$$$$/|  $$$$$$/|  $$$$$$/      
// |_______/  \______/ | $$ \______/  \______/  \______/  \______/       
//                /$$  | $$                                              
//               |  $$$$$$/                                              
//                \______/                                               
//
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

//
//                                                                      
//                                                                      
//  /$$$$$$$  /$$$$$$  /$$ /$$   /$$ /$$   /$$ /$$   /$$ /$$   /$$      
//  /$$_____/ /$$__  $$|__/| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
// |  $$$$$$ | $$  \ $$ /$$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//\____  $$| $$  | $$| $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//  /$$$$$$$/|  $$$$$$/| $$|  $$$$$$/|  $$$$$$/|  $$$$$$/|  $$$$$$/      
// |_______/  \______/ | $$ \______/  \______/  \______/  \______/       
//                /$$  | $$                                              
//               |  $$$$$$/                                              
//                \______/                                               
//
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.3,
            y: -10,
            scale: 1.02,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.3,
            y: 0,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

//
//                                                                      
//                                                                      
//  /$$$$$$$  /$$$$$$  /$$ /$$   /$$ /$$   /$$ /$$   /$$ /$$   /$$      
//  /$$_____/ /$$__  $$|__/| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
// |  $$$$$$ | $$  \ $$ /$$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//\____  $$| $$  | $$| $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//  /$$$$$$$/|  $$$$$$/| $$|  $$$$$$/|  $$$$$$/|  $$$$$$/|  $$$$$$/      
// |_______/  \______/ | $$ \______/  \______/  \______/  \______/       
//                /$$  | $$                                              
//               |  $$$$$$/                                              
//                \______/                                               
//
const glitchText = document.querySelector('.text-glitch');
let glitchInterval;

function startGlitch() {
    const originalText = glitchText.textContent;
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';

    let iterations = 0;
    clearInterval(glitchInterval);

    glitchInterval = setInterval(() => {
        glitchText.textContent = originalText
            .split('')
            .map((char, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];        
            })
            .join('');

        if (iterations >= originalText.length) {
            clearInterval(glitchInterval);
        }

        iterations += 1 / 3;
    }, 30);
}

glitchText.addEventListener('mouseenter', startGlitch);

//
//                                                                      
//                                                                      
//  /$$$$$$$  /$$$$$$  /$$ /$$   /$$ /$$   /$$ /$$   /$$ /$$   /$$      
//  /$$_____/ /$$__  $$|__/| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
// |  $$$$$$ | $$  \ $$ /$$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//\____  $$| $$  | $$| $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//  /$$$$$$$/|  $$$$$$/| $$|  $$$$$$/|  $$$$$$/|  $$$$$$/|  $$$$$$/      
// |_______/  \______/ | $$ \______/  \______/  \______/  \______/       
//                /$$  | $$                                              
//               |  $$$$$$/                                              
//                \______/                                               
//
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

//
//                                                                      
//                                                                      
//  /$$$$$$$  /$$$$$$  /$$ /$$   /$$ /$$   /$$ /$$   /$$ /$$   /$$      
//  /$$_____/ /$$__  $$|__/| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
// |  $$$$$$ | $$  \ $$ /$$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//\____  $$| $$  | $$| $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//  /$$$$$$$/|  $$$$$$/| $$|  $$$$$$/|  $$$$$$/|  $$$$$$/|  $$$$$$/      
// |_______/  \______/ | $$ \______/  \______/  \______/  \______/       
//                /$$  | $$                                              
//               |  $$$$$$/                                              
//                \______/                                               
//
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

//
//                                                                      
//                                                                      
//  /$$$$$$$  /$$$$$$  /$$ /$$   /$$ /$$   /$$ /$$   /$$ /$$   /$$      
//  /$$_____/ /$$__  $$|__/| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
// |  $$$$$$ | $$  \ $$ /$$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//\____  $$| $$  | $$| $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//  /$$$$$$$/|  $$$$$$/| $$|  $$$$$$/|  $$$$$$/|  $$$$$$/|  $$$$$$/      
// |_______/  \______/ | $$ \______/  \______/  \______/  \______/       
//                /$$  | $$                                              
//               |  $$$$$$/                                              
//                \______/                                               
//
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 70
                },
                ease: 'power2.inOut'
            });
            navLinks.classList.remove('active');
        }
    });
});

//
//                                                                      
//                                                                      
//  /$$$$$$$  /$$$$$$  /$$ /$$   /$$ /$$   /$$ /$$   /$$ /$$   /$$      
//  /$$_____/ /$$__  $$|__/| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
// |  $$$$$$ | $$  \ $$ /$$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//\____  $$| $$  | $$| $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//  /$$$$$$$/|  $$$$$$/| $$|  $$$$$$/|  $$$$$$/|  $$$$$$/|  $$$$$$/      
// |_______/  \______/ | $$ \______/  \______/  \______/  \______/       
//                /$$  | $$                                              
//               |  $$$$$$/                                              
//                \______/                                               
//
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

//
//                                                                      
//                                                                      
//  /$$$$$$$  /$$$$$$  /$$ /$$   /$$ /$$   /$$ /$$   /$$ /$$   /$$      
//  /$$_____/ /$$__  $$|__/| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
// |  $$$$$$ | $$  \ $$ /$$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//\____  $$| $$  | $$| $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$      
//  /$$$$$$$/|  $$$$$$/| $$|  $$$$$$/|  $$$$$$/|  $$$$$$/|  $$$$$$/      
// |_______/  \______/ | $$ \______/  \______/  \______/  \______/       
//                /$$  | $$                                              
//               |  $$$$$$/                                              
//                \______/                                               
//
gsap.from('.skill-item', {
    scrollTrigger: {
        trigger: '.skills-list',
        start: 'top center+=100',
    },
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1
});