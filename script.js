// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS with your user ID (replace YOUR_USER_ID with your actual EmailJS user ID)
    emailjs.init('qXxU3s6g3wE7uLHV9');  // Make sure you have the correct user ID here

    // Get the survey form element
    const form = document.getElementById('surveyForm');

    // Listen for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission behavior

        // Collect data from the form
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const satisfaction = document.querySelector('input[name="q1"]:checked') ? document.querySelector('input[name="q1"]:checked').value : "Not Answered";
        const improvement = document.getElementById('q3').value;

        // Prepare the data to be sent
        const emailData = {
            name: name,
            age: age,
            satisfaction: satisfaction,
            improvement: improvement
        };

        // Send the data to EmailJS using the updated method
        emailjs.send('service_lrlanqn', 'template_d2tugoi', emailData)
            .then(function(response) {
                console.log('Success!', response.status, response.text);
                alert('Thank you for your feedback!');
                form.reset();  // Reset the form after submission
            }, function(error) {
                console.log('Failed...', error);
                alert('There was an error submitting your form. Please try again later.');
            });
    });
});  // Remove this extra closing brace



