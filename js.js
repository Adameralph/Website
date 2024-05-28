document.addEventListener("DOMContentLoaded", function(event) { 
    // Get all container elements
    const containers = document.querySelectorAll('.container');

    // Function to show selected container
    function showContainer(containerId) {
        // Hide all containers
        containers.forEach(container => {
            container.style.display = 'none';
        });

        // Show selected container
        const selectedContainer = document.getElementById(containerId);
        selectedContainer.style.display = 'block';
    }

    // Add event listeners to navigation links
    document.getElementById('homeLink').addEventListener('click', function(event) {
        event.preventDefault();
        showContainer('home');
    });

    document.getElementById('aboutLink').addEventListener('click', function(event) {
        event.preventDefault();
        showContainer('about');
    });

    document.getElementById('animalsLink').addEventListener('click', function(event) {
        event.preventDefault();
        showContainer('animals');
    });

    document.getElementById('contactLink').addEventListener('click', function(event) {
        event.preventDefault();
        showContainer('contact');
    });

    // Initially show the home container
    showContainer('home');
});
