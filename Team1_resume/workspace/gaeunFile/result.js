//Find User Key
let userKey = localStorage.getItem("CURRENTUSER");

let allUsers = JSON.parse(localStorage.getItem("USERS"));

let theUser;

for (i = 0; i < allUsers.length; i++) {
    if (allUsers[i].key == userKey) {
        theUser = allUsers[i];
    }
}

var updateAll = (e => {
    document.getElementById("name-field").innerHTML = theUser.name;
    document.getElementById("contact-field").innerHTML = theUser.contact;
    document.getElementById("job-field").innerHTML = theUser.job;
    document.getElementById("education-field").innerHTML = theUser.education;
    document.getElementById("email-field").innerHTML = theUser.email;
    document.getElementById("aboutme-field").innerHTML = theUser.aboutme;
    //experience 
    document.getElementById("exp1-field").innerHTML = theUser.exp1;
    document.getElementById("exp1-desc-field").innerHTML = theUser.exp1_desc;
    document.getElementById("year1-field").innerHTML = theUser.year1;

    document.getElementById("exp2-field").innerHTML = theUser.exp2;
    document.getElementById("exp2-desc-field").innerHTML = theUser.exp2_desc;
    document.getElementById("year2-field").innerHTML = theUser.year2;

    document.getElementById("exp3-field").innerHTML = theUser.exp3;
    document.getElementById("exp3-desc-field").innerHTML = theUser.exp3_desc;
    document.getElementById("year3-field").innerHTML = theUser.year3;
    //activities
    document.getElementById("skill-field").innerHTML = theUser.skill;


});

updateAll();