// Initialize EmailJS with your user ID
(function () {
    emailjs.init("qXxU3s6g3wE7uLHV9");  // Replace with your EmailJS User ID
})();

// Listen for form submission
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Collect the answers for the form fields
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.getElementById('q3').value;

    // Validate that all required fields are filled
    if (!name || !age || !q1 || !q2) {
        alert('Please answer all the questions!');
        return;
    }
    document.getElementById('thankYouMessage').style.display = "block";

    // Prepare the email data to be sent to your email address
    const surveyData = {
        name: name,
        age: age,
        satisfaction: q1.value,
        recommend: q2.value,
        featureImprovement: q3
    };

    // Send the email using EmailJS
    emailjs.send("service_arucd5v", "template_z0i86kb", {
        name: surveyData.name,
        age: surveyData.age,
        satisfaction: surveyData.satisfaction,
        recommend: surveyData.recommend,
        featureImprovement: surveyData.featureImprovement
    })
    .then(function(response) {
        alert("Survey submitted successfully! Check your email.");
        console.log('Success!', response.status, response.text);
    }, function(error) {
        alert("Failed to send survey feedback. Please try again later.");
        console.log('Failed...', error);
    });

    // Optionally, reset the form after submission
    document.getElementById('surveyForm').reset();
});
