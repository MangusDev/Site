// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link with only the message
    const mailtoLink = `mailto:dev.mangus@gmail.com?subject=Contato via Portfolio&body=${encodeURIComponent(message)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    this.reset();
    
    // Show success message
    alert('Obrigado! Seu cliente de email será aberto para enviar a mensagem.');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add animation to skills cards
const skillCards = document.querySelectorAll('.skill-card');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
});

// Add typing animation to code snippet
const codeSnippet = document.querySelector('.code-animation pre code');
const text = codeSnippet.textContent;
codeSnippet.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        codeSnippet.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing animation when code section is in view
const codeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeWriter();
            codeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

codeObserver.observe(document.querySelector('.code-animation')); 