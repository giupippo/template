document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('#sidebar-links a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            const activeLink = document.querySelector('#sidebar-links a.active');
            activeLink.classList.remove('active');

            link.classList.add('active');
        })
    })
})
