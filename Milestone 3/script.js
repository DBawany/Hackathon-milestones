window.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('ResumeForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('Phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('Experience').value;
        var skills = document.getElementById('Skills').value;
        var resumeSection = document.createElement('div');
        resumeSection.innerHTML = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        document.body.appendChild(resumeSection);
    });
});
