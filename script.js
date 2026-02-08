document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');

    // Smooth scroll and active state logic
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            
            // Log target for debugging
            console.log("Navigating to section:", target);

            // Simple click feedback
            navItems.forEach(nav => nav.style.opacity = '1');
            item.style.opacity = '0.5';

            // Scroll to top as a default action
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Add shadow to sidebar on scroll
    window.addEventListener('scroll', () => {
        const sidebar = document.querySelector('.sidebar');
        if (window.scrollY > 50) {
            sidebar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
        } else {
            sidebar.style.boxShadow = 'none';
        }
    });
});
