const sendEmail = async (emailData) => {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            service_id: 'service_lrlanqn', // Your service ID
            template_id: 'template_d2tugoi', // Your template ID
            user_id: 'qXxU3s6g3wE7uLHV9', // Your user ID
            template_params: emailData
        }),
    });
    const result = await response.json();
    if (response.ok) {
        alert('Thank you for your feedback!');
    } else {
        console.error('Email sending failed:', result);
        alert('There was an error sending your feedback. Please try again later.');
    }
};

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const satisfaction = document.querySelector('input[name="q1"]:checked') ? document.querySelector('input[name="q1"]:checked').value : "Not Answered";
    const improvement = document.getElementById('q3').value;

    const emailData = {
        name: name,
        age: age,
        satisfaction: satisfaction,
        improvement: improvement
    };

    // Call the function to send the email
    sendEmail(emailData);
});


