window.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('ResumeForm');
    var resumeDisplayArea = document.getElementById('resumeDisplayArea');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('Phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('Experience').value;
        var skills = document.getElementById('Skills').value;
        // Update the innerHTML of the resume display area
        resumeDisplayArea.innerHTML = "\n            <h2>Editable Resume</h2>\n            <p><strong>Name:</strong> <span contenteditable=\"true\" id=\"editableName\">".concat(name, "</span></p>\n            <p><strong>Email:</strong> <span contenteditable=\"true\" id=\"editableEmail\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span contenteditable=\"true\" id=\"editablePhone\">").concat(phone, "</span></p>\n            <h3>Education</h3>\n            <div contenteditable=\"true\" id=\"editableEducation\">").concat(education, "</div>\n            <h3>Experience</h3>\n            <div contenteditable=\"true\" id=\"editableExperience\">").concat(experience, "</div>\n            <h3>Skills</h3>\n            <div contenteditable=\"true\" id=\"editableSkills\">").concat(skills, "</div>\n        ");
    });
});
