document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navContent = document.getElementById('navContent');

    // Toggle Mobile Menu
    menuToggle.addEventListener('click', () => {
        navContent.classList.toggle('active');
        
        // Optional: Animate hamburger to X
        menuToggle.classList.toggle('open');
    });

    // Close menu when clicking a link (on mobile)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navContent.classList.remove('active');
            }
        });
    });

    // Close menu if clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navContent.contains(e.target)) {
            navContent.classList.remove('active');
        }
    });
});
