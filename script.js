document.addEventListener('DOMContentLoaded', function () {
    // Get the survey form element
    const form = document.getElementById('surveyForm');

    // Listen for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent the default form submission behavior

        // Collect data from the form
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const satisfaction = document.querySelector('input[name="q1"]:checked') ? document.querySelector('input[name="q1"]:checked').value : "Not Answered";
        const improvement = document.getElementById('q3').value;

        // Prepare the email data for EmailJS
        const emailData = {
            service_id: 'service_lrlanqn', // Replace with your EmailJS service ID
            template_id: 'template_d2tugoi', // Replace with your EmailJS template ID
            user_id: 'qXxU3s6g3wE7uLHV9', // Replace with your EmailJS user ID
            template_params: {
                name: name,
                age: age,
                satisfaction: satisfaction,
                improvement: improvement
            }
        };

        // Use fetch API to send the email via EmailJS
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 200) {
                console.log('Success!', data);
                alert('Thank you for your feedback!');
                form.reset();
            } else {
                console.log('Error sending email:', data);
                alert('There was an error submitting your form. Please try again later.');
            }
        })
        .catch(error => {
            console.log('Error:', error);
            alert('There was an error submitting your form. Please try again later.');
        });
    });
});


