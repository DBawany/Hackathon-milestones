/////////////////////////////////////////////////
// Add+ More Input for Languages
/////////////////////////////////////////////////
var langDiv = document.querySelector("#lang-Div");
var delLangBtn = document.querySelector("#del-Lang-Btn");
var delAddBtnLang = 1;
function addLanguageBtn() {
    // Creating HTML Element
    var addLanBtn = document.createElement("input");
    // New Attributes for Created Element
    addLanBtn.setAttribute("type", "text");
    addLanBtn.setAttribute("id", "language-Input".concat(delAddBtnLang));
    addLanBtn.classList.add("form-input");
    addLanBtn.setAttribute("placeholder", "Enter Here");
    addLanBtn.setAttribute("value", "");
    addLanBtn.setAttribute("required", "");
    // Inserting Input
    langDiv.append(addLanBtn);
    // Increment for Managing Delete Button
    delAddBtnLang++;
    // Show Delete Button
    if (delAddBtnLang == 2) {
        delLangBtn.style.display = "inline-block";
    }
}
// Deleting inputs if user created more then requirement
function delLanguageBtn() {
    // Removing last Element
    langDiv.removeChild(langDiv.children["".concat(delAddBtnLang - 1)]);
    delAddBtnLang--;
    // Hide Delete Button
    if (delAddBtnLang <= 1) {
        delLangBtn.style.display = "none";
    }
}
/////////////////////////////////////////////////
// Add+ More Input for Expertise
/////////////////////////////////////////////////
var expertDiv = document.querySelector("#expertise-Div");
var delExpertBtn = document.querySelector("#del-Expert-Btn");
var delAddBtnExpert = 1;
function addExpertBtn() {
    // Creating HTML Element
    var addExpeBtn = document.createElement("input");
    // New Attributes for Created Element
    addExpeBtn.setAttribute("type", "text");
    addExpeBtn.setAttribute("id", "expertise-Input".concat(delAddBtnExpert));
    addExpeBtn.classList.add("form-input");
    addExpeBtn.setAttribute("required", "");
    addExpeBtn.setAttribute("placeholder", "Enter Here");
    addExpeBtn.setAttribute("value", "");
    // Inserting Input
    expertDiv.append(addExpeBtn);
    // Increment for Managing Delete Button
    delAddBtnExpert++;
    // Show Delete Button
    if (delAddBtnExpert == 2) {
        delExpertBtn.style.display = "inline-block";
    }
}
// Deleting inputs if user created more then requirement
function delExpertiseBtn() {
    // Removing last Element
    expertDiv.removeChild(expertDiv.children["".concat(delAddBtnExpert - 1)]);
    delAddBtnExpert--;
    // Hide Delete Button
    if (delAddBtnExpert <= 1) {
        delExpertBtn.style.display = "none";
    }
}
/////////////////////////////////////////////////
// Add+ More Input for Experience
/////////////////////////////////////////////////
var addExperiBtn = document.querySelector("#add-Experi-Btn");
var delExperiBtn = document.querySelector("#del-Experi-Btn");
var idExperiSec = document.querySelector("#id-Experi-Sec");
var delAddBtnExperi = 1;
function addExperienceBtn() {
    // Creating New Div
    var divExperi = document.createElement("div");
    divExperi.setAttribute("id", "experience-Sec");
    // Creating HTML Element 01
    var addExperiElem = document.createElement("input");
    // New Attributes for Created Element
    addExperiElem.setAttribute("type", "text");
    addExperiElem.setAttribute("id", "experiencePosition-Input".concat(delAddBtnExperi));
    addExperiElem.classList.add("form-input");
    addExperiElem.setAttribute("placeholder", "Enter your position title here");
    addExperiElem.setAttribute("value", "");
    addExperiElem.setAttribute("required", "");
    // Creating HTML Element 02
    var addExperiElem2 = document.createElement("input");
    // New Attributes for Created Element
    addExperiElem2.setAttribute("type", "text");
    addExperiElem2.setAttribute("id", "experienceCompYear-Input".concat(delAddBtnExperi));
    addExperiElem2.classList.add("form-input");
    addExperiElem2.setAttribute("placeholder", "Company Name / Jan 2020 - Dec 2021");
    addExperiElem2.setAttribute("value", "");
    addExperiElem2.setAttribute("required", "");
    // Creating HTML Element 03
    var addExperiElem3 = document.createElement("textarea");
    // New Attributes for Created Element
    addExperiElem3.setAttribute("id", "experiencePara-Input".concat(delAddBtnExperi));
    addExperiElem3.setAttribute("rows", "3");
    addExperiElem3.classList.add("form-input");
    addExperiElem3.setAttribute("placeholder", "Enter here");
    addExperiElem3.setAttribute("required", "");
    // Inserting Above Created Elements Inside Div
    divExperi.appendChild(addExperiElem);
    divExperi.appendChild(addExperiElem2);
    divExperi.appendChild(addExperiElem3);
    // Given Position where to be Appear
    addExperiBtn.before(divExperi);
    // Increment for Managing Delete Button
    delAddBtnExperi++;
    // Show Delete Button
    if (delAddBtnExperi == 2) {
        delExperiBtn.style.display = "inline-block";
    }
}
// Deleting inputs if user created more then requirement
function delExperienceBtn() {
    // Removing Element
    idExperiSec.removeChild(idExperiSec.children["".concat(delAddBtnExperi--)]);
    // Hide Delete Button
    if (delAddBtnExperi <= 1) {
        delExperiBtn.style.display = "none";
    }
}
/////////////////////////////////////////////////
// Add+ More Input for Education
/////////////////////////////////////////////////
var addEducButton = document.querySelector("#add-Education-Btn");
var delEducButton = document.querySelector("#del-Education-Btn");
var idEduSec = document.querySelector("#id-Edu-Sec");
var delAddBtnEducation = 1;
function addEducationBtn() {
    // Creating New Div
    var div = document.createElement("div");
    div.setAttribute("id", "education-Sec");
    // Creating HTML Element 01
    var addEducElement = document.createElement("input");
    // New Attributes for Created Element
    addEducElement.setAttribute("type", "text");
    addEducElement.setAttribute("id", "educationInstitute-Input".concat(delAddBtnEducation));
    addEducElement.classList.add("form-input");
    addEducElement.setAttribute("placeholder", "Name of Institute");
    addEducElement.setAttribute("value", "");
    addEducElement.setAttribute("required", "");
    // Creating HTML Element 02
    var addEducElement2 = document.createElement("input");
    // New Attributes for Created Element
    addEducElement2.setAttribute("type", "text");
    addEducElement2.setAttribute("id", "educationDegree-Input".concat(delAddBtnEducation));
    addEducElement2.classList.add("form-input");
    addEducElement2.setAttribute("placeholder", "Enter Degree");
    addEducElement2.setAttribute("value", "");
    addEducElement2.setAttribute("required", "");
    // Creating HTML Element 03
    var addEducElement3 = document.createElement("input");
    // New Attributes for Created Element
    addEducElement3.setAttribute("type", "text");
    addEducElement3.setAttribute("id", "educationYear-Input".concat(delAddBtnEducation));
    addEducElement3.classList.add("form-input");
    addEducElement3.setAttribute("placeholder", "Jan 2020 - Dec 2021");
    addEducElement3.setAttribute("value", "");
    addEducElement3.setAttribute("required", "");
    // Inserting Above Created Elements Inside Div
    div.appendChild(addEducElement);
    div.appendChild(addEducElement2);
    div.appendChild(addEducElement3);
    // Given Position where to be Appear
    addEducButton.before(div);
    // Increment for Managing Delete Button
    delAddBtnEducation++;
    // Show Delete Button
    if (delAddBtnEducation == 2) {
        delEducButton.style.display = "inline-block";
    }
}
// Deleting inputs if user created more then requirement
function delEducationBtn() {
    // Removing Element
    idEduSec.removeChild(idEduSec.children["".concat(delAddBtnEducation--)]);
    // Hide Delete Button
    if (delAddBtnEducation <= 1) {
        delEducButton.style.display = "none";
    }
}
/////////////////////////////////////////////////
// Add+ More Input for Skills
/////////////////////////////////////////////////
var skillDiv = document.querySelector("#skill-div");
var delSkillButton = document.querySelector("#del-Skill-Btn");
var delAddBtnSkill = 1;
function addSkillsBtn() {
    // Creating HTML Element
    var addSkillButton = document.createElement("input");
    // New Attributes for Created Element
    addSkillButton.setAttribute("type", "text");
    addSkillButton.setAttribute("id", "skills-Input".concat(delAddBtnSkill));
    addSkillButton.classList.add("form-input");
    addSkillButton.setAttribute("required", "");
    addSkillButton.setAttribute("placeholder", "Enter Here");
    addSkillButton.setAttribute("value", "");
    // Inserting Input
    skillDiv.append(addSkillButton);
    // Increment for Managing Delete Button
    delAddBtnSkill++;
    // Show Delete Button
    if (delAddBtnSkill == 2) {
        delSkillButton.style.display = "inline-block";
    }
}
// Deleting inputs if user created more then requirement
function delSkillBtn() {
    // Removing last Element
    skillDiv.removeChild(skillDiv.children["".concat(delAddBtnSkill - 1)]);
    delAddBtnSkill--;
    // Hide Delete Button
    if (delAddBtnSkill <= 1) {
        delSkillButton.style.display = "none";
    }
}
/////////////////////////////////////////////////
// Generating CV - Collecting Data from Input form
/////////////////////////////////////////////////
var langList = document.querySelector(".languages-List");
var expertiseList = document.querySelector(".expertise-list");
var skillGenResume = document.querySelector("#skillGenResume");
var sectionEducation = document.querySelector("#eduGenResume");
var skillsListSec = document.querySelector(".skills-List-Sec");
var btnGenerateResume = document.querySelector("#Generate-Resume");
// General Function for Data Collecting
function dataTransfer(collect, provide) {
    var dataCollector = document.querySelector("".concat(collect));
    var dataProvider = document.querySelector("".concat(provide));
    dataCollector.innerText = dataProvider.value;
}
function generateResume() {
    /////////////////////////////////////////////////
    // Single Input Data Collecting
    /////////////////////////////////////////////////
    dataTransfer(".name", "#fullName-Input");
    dataTransfer(".designation", "#designation-Input");
    dataTransfer(".para-AboutMe", "#aboutMe-Input");
    dataTransfer(".phone", "#phone-Input");
    dataTransfer(".envelope", "#email-Input");
    dataTransfer(".location", "#address-Input");
    /////////////////////////////////////////////////
    // Image Updating
    /////////////////////////////////////////////////
    var imageFile = document.getElementById("profileImage-Input").files[0];
    var reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = function () {
        var imgOutput = document.getElementById("imgOutput");
        imgOutput === null || imgOutput === void 0 ? void 0 : imgOutput.setAttribute("src", "".concat(reader.result));
    };
    // Multiple Data Collecting
    /////////////////////////////////////////////////
    // Languages Section Data Collecting
    /////////////////////////////////////////////////
    dataTransfer("#lang-p", "#language-Input");
    delAddBtnLang--;
    // For Loop if More Inputs are created by User
    for (var lang = 1; lang <= delAddBtnLang; lang++) {
        // Creating Main Div
        var divAddLang = document.createElement("div");
        divAddLang.classList.add("list");
        // Set Attributes
        divAddLang.setAttribute("id", "lang-List");
        // Creating Mini Div
        var divMini = document.createElement("div");
        // Adding Class for Apply CSS Style
        divMini.classList.add("dot");
        // Creating HTML Data 02
        var langPara = document.createElement("p");
        // Adding Class for Apply CSS Style
        langPara.setAttribute("id", "lang-p".concat(lang));
        langPara.setAttribute("contenteditable", "true");
        langPara.setAttribute("class", "none");
        // Inserting Above Created Elements Inside Div
        divAddLang.appendChild(divMini);
        divAddLang.appendChild(langPara);
        // Given Position where to be Appear
        langList.appendChild(divAddLang);
        // Transferring Data if Created More
        dataTransfer("#lang-p".concat(lang), "#language-Input".concat(lang));
    }
    /////////////////////////////////////////////////
    // Expertise Section Data Collecting
    /////////////////////////////////////////////////
    dataTransfer("#expertise-p", "#expertise-Input");
    delAddBtnExpert--;
    // For Loop if More Inputs are created by User
    for (var expertise = 1; expertise <= delAddBtnExpert; expertise++) {
        // Creating Main Div
        var divAddExpert = document.createElement("div");
        divAddExpert.classList.add("list");
        // Set Attributes
        divAddExpert.setAttribute("id", "expertise-List");
        // Creating Mini Div
        var divMini = document.createElement("div");
        // Adding Class for Apply CSS Style
        divMini.classList.add("dot");
        // Creating HTML Data 02
        var expertPara = document.createElement("p");
        // Adding Class for Apply CSS Style
        expertPara.setAttribute("id", "expertise-p".concat(expertise));
        expertPara.setAttribute("contenteditable", "true");
        expertPara.setAttribute("class", "none");
        // Inserting Above Created Elements Inside Div
        divAddExpert.appendChild(divMini);
        divAddExpert.appendChild(expertPara);
        // Given Position where to be Appear
        expertiseList.appendChild(divAddExpert);
        // Transferring Data if Created More
        dataTransfer("#expertise-p".concat(expertise), "#expertise-Input".concat(expertise));
    }
    /////////////////////////////////////////////////
    // Experience Section Data Collecting
    /////////////////////////////////////////////////
    dataTransfer(".title-Experience", "#experiencePosition-Input");
    dataTransfer(".comp-Experience", "#experienceCompYear-Input");
    dataTransfer(".para-Experience", "#experiencePara-Input");
    // For Loop if More Inputs are created by User
    for (var exp = 1; exp < delAddBtnExperi; exp++) {
        // Creating Main Div
        var divAddExp = document.createElement("div");
        divAddExp.classList.add("add-Sec-Experience");
        // Creating HTML Data 01
        var addDataExp = document.createElement("h5");
        // Adding Class for Apply CSS Style
        addDataExp.classList.add("title-Experience");
        addDataExp.setAttribute("id", "title-Experience".concat(exp));
        addDataExp.setAttribute("contenteditable", "true");
        // Creating HTML Data 02
        var addDataExp2 = document.createElement("p");
        // Adding Class for Apply CSS Style
        addDataExp2.classList.add("comp-Experience");
        addDataExp2.setAttribute("id", "comp-Experience".concat(exp));
        addDataExp2.setAttribute("contenteditable", "true");
        // Creating HTML Data 03
        var addDataExp3 = document.createElement("p");
        // Adding Class for Apply CSS Style
        addDataExp3.classList.add("para-Experience");
        addDataExp3.setAttribute("id", "para-Experience".concat(exp));
        addDataExp3.setAttribute("contenteditable", "true");
        // Inserting Above Created Elements Inside Div
        divAddExp.appendChild(addDataExp);
        divAddExp.appendChild(addDataExp2);
        divAddExp.appendChild(addDataExp3);
        // Given Position where to be Appear
        sectionEducation.before(divAddExp);
        // Transferring Data if Created More
        dataTransfer("#title-Experience".concat(exp), "#experiencePosition-Input".concat(exp));
        dataTransfer("#comp-Experience".concat(exp), "#experienceCompYear-Input".concat(exp));
        dataTransfer("#para-Experience".concat(exp), "#experiencePara-Input".concat(exp));
    }
    /////////////////////////////////////////////////
    // Education Section Data Collecting
    /////////////////////////////////////////////////
    dataTransfer(".institute-Education", "#educationInstitute-Input");
    dataTransfer(".degree-Education", "#educationDegree-Input");
    dataTransfer(".year-Education", "#educationYear-Input");
    // For Loop if More Inputs are created by User
    for (var edu = 1; edu < delAddBtnEducation; edu++) {
        // Creating Main Div
        var divAddEdu = document.createElement("div");
        divAddEdu.classList.add("add-Sec-Education");
        // Creating HTML Data 01
        var addDataEdu = document.createElement("h5");
        // Adding Class for Apply CSS Style
        addDataEdu.classList.add("institute-Education");
        addDataEdu.setAttribute("id", "institute-Education".concat(edu));
        addDataEdu.setAttribute("contenteditable", "true");
        // Creating HTML Data 02
        var addDataEdu2 = document.createElement("p");
        // Adding Class for Apply CSS Style
        addDataEdu2.classList.add("degree-Education");
        addDataEdu2.setAttribute("id", "degree-Education".concat(edu));
        addDataEdu2.setAttribute("contenteditable", "true");
        // Creating HTML Data 03
        var addDataEdu3 = document.createElement("p");
        // Adding Class for Apply CSS Style
        addDataEdu3.classList.add("year-Education");
        addDataEdu3.setAttribute("id", "year-Education".concat(edu));
        addDataEdu3.setAttribute("contenteditable", "true");
        // Inserting Above Created Elements Inside Div
        divAddEdu.appendChild(addDataEdu);
        divAddEdu.appendChild(addDataEdu2);
        divAddEdu.appendChild(addDataEdu3);
        // Given Position where to be Appear
        skillGenResume.before(divAddEdu);
        // Transferring Data if Created More
        dataTransfer("#institute-Education".concat(edu), "#educationInstitute-Input".concat(edu));
        dataTransfer("#degree-Education".concat(edu), "#educationDegree-Input".concat(edu));
        dataTransfer("#year-Education".concat(edu), "#educationYear-Input".concat(edu));
    }
    /////////////////////////////////////////////////
    // Skills Section Data Collecting
    /////////////////////////////////////////////////
    dataTransfer("#skill-p", "#skills-Input");
    delAddBtnSkill--;
    // For Loop if More Inputs are created by User
    for (var skill = 1; skill <= delAddBtnSkill; skill++) {
        // Creating Main Div
        var divAddSkill = document.createElement("div");
        // Set Attributes
        divAddSkill.setAttribute("id", "skill-List");
        // Creating Mini Div
        var divMini = document.createElement("div");
        // Adding Class for Apply CSS Style
        divMini.classList.add("dot-Skill");
        // Creating HTML Data 02
        var skillPara = document.createElement("p");
        // Adding Class for Apply CSS Style
        skillPara.setAttribute("id", "skill-p".concat(skill));
        skillPara.setAttribute("contenteditable", "true");
        skillPara.setAttribute("class", "none");
        // Inserting Above Created Elements Inside Div
        divAddSkill.appendChild(divMini);
        divAddSkill.appendChild(skillPara);
        // Given Position where to be Appear
        skillsListSec.appendChild(divAddSkill);
        // Transferring Data if Created More
        dataTransfer("#skill-p".concat(skill), "#skills-Input".concat(skill));
    }
    var resume2 = document.querySelector(".container");
    resume2.style.display = "block";
    buttonsColor.style.display = "flex";
    btnGenerateResume.style.display = "none";
}
/////////////////////////////////////////////////
// DownLoad PDF
/////////////////////////////////////////////////
var buttonsColor = document.querySelector(".buttons-Color");
// Image for Setting Bug
var imgOutput = document.getElementById("imgOutput");
// Select elements
var resume = document.querySelector(".generate-Resume");
var downloadPDF = document.querySelector("#Download-PDF");
if (downloadPDF) {
    downloadPDF.addEventListener("click", function () {
        var opt = {
            margin: [0, 0, 0, 0],
            filename: "resume.pdf",
            image: { type: "jpeg", quality: 1 },
            pagebreak: { avoid: "tr", mode: "css", before: "#nextpage1" },
            html2canvas: { scale: 4, useCORS: true, dpi: 192, letterRendering: true },
            jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        };
        // Check if resume is properly selected
        if (resume) {
            imgOutput.style.zIndex = "99999";
            html2pdf()
                .from(resume)
                .set(opt)
                .save()
                .catch(function (error) {
                console.error("Error generating PDF:", error);
            });
        }
        else {
            console.error("Resume element not found");
        }
    });
}
/////////////////////////////////////////////////
// Color Changing
/////////////////////////////////////////////////
// Color Picker
var colorPick01 = document.querySelector("#Color-01");
var colorPick02 = document.querySelector("#Color-02");
// Color 01 - All Elements Need to be changed
var secName = document.querySelector(".section-Name");
var secName2 = document.querySelector(".section-NameMQ ");
var imageBorder = document.querySelector("img");
var icn1 = document.querySelector("#icn1");
var icn2 = document.querySelector("#icn2");
var icn3 = document.querySelector("#icn3");
var langSec = document.querySelector(".languages-Sec");
var expertSec = document.querySelector(".expertise-Sec");
var secExperi = document.querySelector(".section-Experience");
var secEduc = document.querySelector(".section-Education");
var secSkills = document.querySelector(".section-Skills");
// Color 02 - All Elements Need to be changed
var leftPortion = document.querySelector(".left-Portion");
colorPick01.addEventListener("input", function () {
    secName.style.backgroundColor = colorPick01.value;
    secName2.style.backgroundColor = colorPick01.value;
    imageBorder.style.borderColor = colorPick01.value;
    icn1.style.backgroundColor = colorPick01.value;
    icn2.style.backgroundColor = colorPick01.value;
    icn3.style.backgroundColor = colorPick01.value;
    langSec.style.color = colorPick01.value;
    expertSec.style.color = colorPick01.value;
    secExperi.style.backgroundColor = colorPick01.value;
    secEduc.style.backgroundColor = colorPick01.value;
    secSkills.style.backgroundColor = colorPick01.value;
});
colorPick02.addEventListener("input", function () {
    leftPortion.style.backgroundColor = colorPick02.value;
});
/////////////////////////////////////////////////
// Fill Dummy Data
/////////////////////////////////////////////////
function dummyInfo() {
    document.getElementById("fullName-Input").value =
        "Zubair Ahmed";
    document.getElementById("designation-Input").value =
        "Web & Graphics Designer";
    document.getElementById("profileImage-Input").src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOlwb6YnVU55H4BNqtLm7T8b7thI-HiQBrg&s";
    document.getElementById("aboutMe-Input").value =
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aexercitationem, autem adnesciunt rem, sed necessitatibus beatae soluta nobis veritatis.Voluptas repudiandae harum repellendus!";
    document.getElementById("phone-Input").value =
        "+92 333 123 4567";
    document.getElementById("email-Input").value =
        "yourmail123@gmail.com";
    document.getElementById("address-Input").value =
        "Karachi, Sindh - Pakistan";
    addLanguageBtn();
    addLanguageBtn();
    addLanguageBtn();
    addLanguageBtn();
    document.getElementById("language-Input").value =
        "English";
    document.getElementById("language-Input1").value =
        "Urdu";
    document.getElementById("language-Input2").value =
        "Arabic";
    document.getElementById("language-Input3").value =
        "Spanish";
    document.getElementById("language-Input4").value =
        "Persian";
    addExpertBtn();
    addExpertBtn();
    addExpertBtn();
    addExpertBtn();
    document.getElementById("expertise-Input").value =
        "Management Skills";
    document.getElementById("expertise-Input1").value =
        "Creativity";
    document.getElementById("expertise-Input2").value =
        "Digital Marketing";
    document.getElementById("expertise-Input3").value =
        "Leadership";
    document.getElementById("expertise-Input4").value =
        "Team Work";
    addExperienceBtn();
    document.getElementById("experiencePosition-Input").value = "Enter your position title here";
    document.getElementById("experienceCompYear-Input").value = "Company Name / Jan 2020 - Present";
    document.getElementById("experiencePara-Input").value =
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aexercitationem, ipsam sit, illo aliquam officia earum autem adnesciunt rem, sed necessitatibus beatae soluta nobis veritatis.Voluptas repudiandae harum repellendus!";
    document.getElementById("experiencePosition-Input1").value = "Enter your position title here";
    document.getElementById("experienceCompYear-Input1").value = "Company Name / Jan 2020 - Present";
    document.getElementById("experiencePara-Input1").value =
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aexercitationem, ipsam sit, illo aliquam officia earum autem adnesciunt rem, sed necessitatibus beatae soluta nobis veritatis.Voluptas repudiandae harum repellendus!";
    addEducationBtn();
    document.getElementById("educationInstitute-Input").value = "University of Karachi";
    document.getElementById("educationDegree-Input").value =
        "Master of Business Management";
    document.getElementById("educationYear-Input").value =
        "Jan 2020 - Dec 2023";
    document.getElementById("educationInstitute-Input1").value = "Karachi Public School";
    document.getElementById("educationDegree-Input1").value = "Intermediate & SSC";
    document.getElementById("educationYear-Input1").value =
        "Jan 2020 - Dec 2023";
    addSkillsBtn();
    addSkillsBtn();
    addSkillsBtn();
    addSkillsBtn();
    addSkillsBtn();
    addSkillsBtn();
    document.getElementById("skills-Input").value =
        "Javascript-Typescript";
    document.getElementById("skills-Input1").value =
        "Next js-React";
    document.getElementById("skills-Input2").value =
        "HTML-CSS";
    document.getElementById("skills-Input3").value =
        "Adobe Photoshop";
    document.getElementById("skills-Input4").value =
        "Adobe Illustrator";
    document.getElementById("skills-Input5").value =
        "Adobe AfterEffect";
    document.getElementById("skills-Input6").value =
        "Cinema 4D";
    var str = ["Please upload Image, Rest Data is Filled"];
    alert(str);
}
