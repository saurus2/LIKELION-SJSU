
const personalForm = document.getElementById("personal-form");
const personalButton = document.getElementById("personal-form-submit");

personalButton.addEventListener("click", (e) => {
    e.preventDefault();

    let userInfo = {
        //personal info
        name: document.getElementById("name-field").value,
       // image: document.getElementById("ouput").value,

        contact: document.getElementById("contact-field").value,
        job: document.getElementById("job-field").value,
        education: document.getElementById("education-field").value,
        email: document.getElementById("email-field").value,
        aboutme: document.getElementById("aboutme-field").value,
        //experience 
        exp1: document.getElementById("exp1-field").value,
        exp1_desc: document.getElementById("exp1-desc-field").value,
        year1: document.getElementById("year1-field").value,

        exp2: document.getElementById("exp2-field").value,
        exp2_desc: document.getElementById("exp2-desc-field").value,
        year2: document.getElementById("year2-field").value,

        exp3: document.getElementById("exp3-field").value,
        exp3_desc: document.getElementById("exp3-desc-field").value,
        year3: document.getElementById("year3-field").value,

        //activities
        skill: document.getElementById("skill-field").value,

        key: "KEY"
    }

   //Convert back to JS object, reading from LocalStorage
    let totalUsers = JSON.parse(localStorage.getItem("USERS"));

    if (totalUsers == null || totalUsers == undefined) {
        totalUsers = [];
    }  

    totalUsers.push(userInfo);
    /*localStorage stores key-value pairs. So to store a entire 
    javascript object we need to serialize it first (with JSON.stringify, for example*/
    
    //store a user object into the local storage 
    localStorage.setItem("USERS", JSON.stringify(totalUsers));

    localStorage.setItem("CURRENTUSER", userInfo.key);

    window.location.href = "result.html";
})




