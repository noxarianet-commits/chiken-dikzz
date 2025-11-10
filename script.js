// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Format pesan untuk WhatsApp
        const whatsappMessage = `Halo Chiken Dikzz! Saya ingin mengirim pesan:%0A%0A*Nama:* ${name}%0A*Email:* ${email}%0A*Telepon:* ${phone}%0A*Subjek:* ${subject}%0A*Pesan:* ${message}%0A%0ATerima kasih!`;
        
        // Redirect ke WhatsApp
        window.open(`https://wa.me/qr/5B2BMEUDRNB7K1?text=${whatsappMessage}`, '_blank');
        
        // Reset form
        contactForm.reset();
    });
}

// WhatsApp Order Function for Menu Items
function orderWhatsApp(itemName, price) {
    const message = `Halo Chiken Dikzz! Saya ingin memesan:%0A%0A*Item:* ${itemName}%0A*Harga:* ${price}%0A%0ASaya ingin memesan menu ini. Bagaimana cara pemesanannya?`;
    window.open(`https://wa.me/qr/5B2BMEUDRNB7K1?text=${message}`, '_blank');
}

// Quick Order Function (for buttons without specific item)
function quickOrder() {
    const message = `Halo Chiken Dikzz! Saya ingin memesan ayam goreng. Bisa tolong infokan menu yang tersedia?`;
    window.open(`https://wa.me/qr/5B2BMEUDRNB7K1?text=${message}`, '_blank');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Add active class to current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});