window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('ResumeForm') as HTMLFormElement;
    const resumeDisplayArea = document.getElementById('resumeDisplayArea') as HTMLDivElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('Phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('Experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;

        // Update the innerHTML of the resume display area
        resumeDisplayArea.innerHTML = `
            <h2>Editable Resume</h2>
            <p><strong>Name:</strong> <span contenteditable="true" id="editableName">${name}</span></p>
            <p><strong>Email:</strong> <span contenteditable="true" id="editableEmail">${email}</span></p>
            <p><strong>Phone:</strong> <span contenteditable="true" id="editablePhone">${phone}</span></p>
            <h3>Education</h3>
            <div contenteditable="true" id="editableEducation">${education}</div>
            <h3>Experience</h3>
            <div contenteditable="true" id="editableExperience">${experience}</div>
            <h3>Skills</h3>
            <div contenteditable="true" id="editableSkills">${skills}</div>
        `;
    });
});
