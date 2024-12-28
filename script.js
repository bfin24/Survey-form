// Initialize EmailJS with your User ID
emailjs.init('qXxU3s6g3wE7uLHV9');  // Replace with your actual EmailJS User ID

// Get the survey form
const form = document.getElementById('surveyForm');

// Listen for the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    // Collect data from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const satisfaction = document.querySelector('input[name="q1"]:checked') ? document.querySelector('input[name="q1"]:checked').value : "Not Answered"; 
    const improvement = document.getElementById('q3').value;

    // Create the email data to send via EmailJS
    const emailData = {
        name: name,
        age: age,
        satisfaction: satisfaction,
        improvement: improvement
    };

    // Send the data via EmailJS
    emailjs.send('service_lrlanqn', 'template_d2tugoi', emailData)
        .then(function(response) {
            console.log('Success!', response.status, response.text);
            alert('Thank you for your feedback!');  // Show success message to the user
            form.reset();  // Reset form fields after successful submission
        }, function(error) {
            console.log('Failed...', error);
            alert('There was an error submitting your form. Please try again later.');  // Show error message to the user
        });
});

