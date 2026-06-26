// ===============================
// ZYLP GROUP CERTIFICATE PORTAL
// script.js
// ===============================

const form = document.getElementById("certificateForm");

const profession = document.getElementById("profession");
const otherBox = document.getElementById("otherProfessionBox");
const otherInput = document.getElementById("otherProfession");

const certificate = document.getElementById("certificate");

profession.addEventListener("change", function(){

    if(this.value === "Other"){
        otherBox.style.display = "block";
    }else{
        otherBox.style.display = "none";
    }

});

function randomID(){

    const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let code = "";

    for(let i=0;i<8;i++){

        code += chars.charAt(
            Math.floor(Math.random()*chars.length)
        );

    }

    return code;

}

function verificationCode(){

    const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let code="";

    for(let i=0;i<10;i++){

        code += chars.charAt(
            Math.floor(Math.random()*chars.length)
        );

    }

    return "VRF-"+code;

}

form.addEventListener("submit",function(e){

    e.preventDefault();

    let fullname =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let prof =
    profession.value;

    if(prof==="Other"){
        prof = otherInput.value;
    }

    let year =
    document.getElementById("year").value;

    document.getElementById("certificateName")
    .innerHTML = fullname;

    document.getElementById("certificateEmail")
    .innerHTML = email;

    document.getElementById("certificateProfession")
    .innerHTML = prof;

    document.getElementById("certificateYear")
    .innerHTML = year;

    const today =
    new Date();

    document.getElementById("issueDate")
    .innerHTML =
    today.toLocaleDateString();

    document.getElementById("certificateID")
    .innerHTML =
    "ZYLP-"+year+"-"+randomID();

    document.getElementById("verificationCode")
    .innerHTML =
    verificationCode();

    certificate.style.display="block";

    certificate.scrollIntoView({

        behavior:"smooth"

    });

});
