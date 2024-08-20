
    (function() {
        emailjs.init("Z2e3VnfHVBCvBt5C8");
    })();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_g3ikpvd','template_67qk5g8', this)
            .then(function() {
                alert('Message sent successfully!');
            }, function(error) {
                alert('Failed to send message. Please try again.');
            });
    });
        // Check the saved mode in local storage
        function checkMode() {
            if (localStorage.getItem('theme') === 'light') {
                document.body.classList.add('light-mode');
            } else {
                document.body.classList.add('dark-mode');
            }
        }
    
        // Toggle the theme
        function toggleTheme() {
            if (document.body.classList.contains('dark-mode')) {
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                document.body.classList.remove('light-mode');
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            }
        }
    
        // Initialize the theme on page load
        document.addEventListener('DOMContentLoaded', function() {
            checkMode();
    
            // Add event listener to the toggle switch
            document.querySelector('.switch input').addEventListener('change', toggleTheme);
        });
