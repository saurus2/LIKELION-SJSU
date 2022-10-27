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
    document.getElementById("email-field").innerHTML = theUser.email;
    document.getElementById("aboutme-field").innerHTML = theUser.aboutme;
    //experience 
    document.getElementById("exp1-field").innerHTML = theUser.exp1;
    document.getElementById("exp1-desc-field").innerHTML = theUser.exp1_desc;
    //activities
    document.getElementById("act1-field").innerHTML = theUser.act1;
    document.getElementById("act1-desc-field").innerHTML = theUser.act1_desc;

});

updateAll();