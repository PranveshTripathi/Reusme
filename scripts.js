// Initialize AOS (Animate On Scroll) library
AOS.init();

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Content Loading
document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('contentContainer');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    const contentItems = [
        { title: 'Dynamic Item 1', description: 'Details about dynamic item 1.' },
        { title: 'Dynamic Item 2', description: 'Details about dynamic item 2.' },
        { title: 'Dynamic Item 3', description: 'Details about dynamic item 3.' },
    ];

    let displayedItems = 0;

    const loadContent = () => {
        for (let i = displayedItems; i < displayedItems + 1 && i < contentItems.length; i++) {
            const item = contentItems[i];
            const itemDiv = document.createElement('div');
            itemDiv.className = 'dynamic-item';
            itemDiv.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            contentContainer.appendChild(itemDiv);
        }
        displayedItems += 1;

        if (displayedItems >= contentItems.length) {
            loadMoreBtn.style.display = 'none';
        }
    };

    loadMoreBtn.addEventListener('click', loadContent);

    // Initial load
    loadContent();
});

document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;
    const feedback = document.getElementById('formFeedback');

    // Simulate form submission
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
    })
    .then(response => {
        if (response.ok) {
            feedback.textContent = 'Thank you for your message! We will get back to you soon.';
            form.reset();
        } else {
            feedback.textContent = 'Oops! There was a problem sending your message.';
        }
    })
    .catch(() => {
        feedback.textContent = 'Oops! There was a problem sending your message.';
    });
});


// Sticky header effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Toggle navigation menu for mobile
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('#nav-menu').classList.toggle('active');
});

