// Header Slider
document.addEventListener('DOMContentLoaded', function() {
    // Image slider functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Change slide every 5 seconds
    if (slides.length > 0) {
        setInterval(nextSlide, 2000);
    }
    
    // Project form submission
    const projectForm = document.getElementById('projectForm');
    if (projectForm) {
        projectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Create WhatsApp message
            const whatsappMessage = `New Project Inquiry:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Subject: ${subject}\nMessage: ${message}`;
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Open WhatsApp with the message
            window.open(`https://wa.me/2348032518012?text=${encodedMessage}`, '_blank');
            
            // Reset form
            projectForm.reset();
            
            // Show success message
            alert('Thank you for your submission! We will contact you shortly.');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // Toggle between hamburger and close icon
            const icon = hamburger.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close menu when clicking on a link (for mobile)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) { // Only for mobile
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Close menu when clicking outside (for mobile)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
            if (!e.target.closest('.nav-menu') && !e.target.closest('.hamburger')) {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Video Controls
const videos = document.querySelectorAll('video');

videos.forEach(video => {
    // Add play/pause button functionality
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// Video Expansion Functions
function expandVideo(button) {
    const videoItem = button.closest('.video-item');
    const video = videoItem.querySelector('video');
    const videoSrc = video.querySelector('source').src;
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    // Set the video source
    modalVideo.src = videoSrc;
    
    // Show the modal
    modal.style.display = 'block';
    
    // Play the video
    modalVideo.play();
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    // Hide the modal
    modal.style.display = 'none';
    
    // Pause the video
    modalVideo.pause();
    modalVideo.src = '';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the video
document.addEventListener('click', function(event) {
    const modal = document.getElementById('videoModal');
    const modalContent = document.querySelector('.video-modal-content');
    
    if (event.target === modal) {
        closeVideo();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeVideo();
    }
});


    // Project gallery item click effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // You can add a lightbox functionality here if needed
            // For now, just toggle the info display on mobile
            if (window.innerWidth <= 768) {
                const info = this.querySelector('.project-info');
                info.style.transform = info.style.transform === 'translateY(0%)' ? 
                    'translateY(100%)' : 'translateY(0%)';
            }
        });
    });
});
