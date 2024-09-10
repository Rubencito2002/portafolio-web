document.addEventListener('DOMContentLoaded', function () {
    const lightToggler = document.getElementById('lightModeToggler');
    const optionsMenu = document.getElementById('optionsMenu');

    // Check the user's color mode preference on page load:
    function loadTheme() {
        const savedTheme = localStorage.getItem("theme");
        let theme;

        if (savedTheme) {
            theme = savedTheme;
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = "dark";
        } else {
            theme = "light";
        }
        document.documentElement.setAttribute("color-mode", theme);

        if (theme === "dark") {
            lightToggler.classList.remove('bi-moon-fill');
            lightToggler.classList.add('bi-brightness-high-fill');
        } else {
            lightToggler.classList.remove('bi-brightness-high-fill');
            lightToggler.classList.add('bi-moon-fill');
        }
    }

    // Toggle light/dark mode on button click:
    const handleLightToggler = () => {
        const currentTheme = document.documentElement.getAttribute('color-mode');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('color-mode', newTheme);
        localStorage.setItem('theme', newTheme);

        // Change the icon:
        if (newTheme === 'dark') {
            lightToggler.classList.add('bi-brightness-high-fill');
            lightToggler.classList.remove('bi-moon-fill');
        } else {
            lightToggler.classList.add('bi-moon-fill');
            lightToggler.classList.remove('bi-brightness-high-fill');
        }
    }

    lightToggler.addEventListener('click', handleLightToggler);
    loadTheme();

    let lastScrollTop = 0;
    
    // Scroll event for the options menu:
    window.addEventListener('scroll', function () {
        let scrollTop = document.documentElement.scrollTop;

        if (scrollTop > 0) {
            optionsMenu.classList.add('bg-blur');
        } else {
            optionsMenu.classList.remove('bg-blur');
        }

        if (scrollTop > lastScrollTop) {
            // Downwards scroll: hides menu
            optionsMenu.style.top = '-3rem';
        } else {
            // Upwards scroll: shows menu
            optionsMenu.style.top = '1rem';
        }
        lastScrollTop = scrollTop;
    });
});
