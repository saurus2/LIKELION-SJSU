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
        email: document.getElementById("email-field").value,
        aboutme: document.getElementById("aboutme-field").value,
        //experience 
        exp1: document.getElementById("exp1-field").value,
        exp1_desc: document.getElementById("exp1-desc-field").value,
        
        //activities
        act1: document.getElementById("act1-field").value,
        act1_desc: document.getElementById("act1-desc-field").value,


        key: "KEY"
    }

   //Convert back to JS object, reading from LocalStorage
    let totalUsers = JSON.parse(localStorage.getItem("USERS"));

    totalUsers.push(userInfo);
    /*localStorage stores key-value pairs. So to store a entire 
    javascript object we need to serialize it first (with JSON.stringify, for example*/
    
    //store a user object into the local storage 
    localStorage.setItem("USERS", JSON.stringify(totalUsers));

    localStorage.setItem("CURRENTUSER", userInfo.key);

    window.location.href = "result.html";
})




