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

// ===========================
// PDF Download
// ===========================

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", function () {

    const element = document.querySelector(".certificate-border");

    const opt = {
        margin: 0.3,
        filename: "ZYLP-Verified-Certificate.pdf",
        image: {
            type: "jpeg",
            quality: 1
        },
        html2canvas: {
            scale: 3,
            useCORS: true
        },
        jsPDF: {
            unit: "in",
            format: "a4",
            orientation: "landscape"
        }
    };

    html2pdf().set(opt).from(element).save();

});


// ===========================
// Save Data (Local Storage)
// ===========================

function saveCertificate(data){

    let certificates =
    JSON.parse(localStorage.getItem("zylpCertificates")) || [];

    certificates.push(data);

    localStorage.setItem(
        "zylpCertificates",
        JSON.stringify(certificates)
    );

}


// ===========================
// Success Animation
// ===========================

function showSuccess(){

    const btn =
    document.querySelector(".generateBtn");

    btn.innerHTML="✔ Certificate Generated";

    btn.style.background="#1abc9c";

    setTimeout(function(){

        btn.innerHTML="Generate Certificate";

        btn.style.background="#ffd24d";

    },2500);

}


// ===========================
// Reset Form
// ===========================

function resetForm(){

    form.reset();

    otherBox.style.display="none";

}


// ===========================
// Update Submit Event
// নিচের অংশটি তোমার আগের
// submit event-এর শেষে যোগ করবে
// ===========================

saveCertificate({

    name: fullname,

    email: email,

    profession: prof,

    year: year,

    issueDate: today.toLocaleDateString(),

    certificateID:
    document.getElementById("certificateID").innerHTML,

    verificationCode:
    document.getElementById("verificationCode").innerHTML

});

showSuccess();

setTimeout(function(){

    resetForm();

},1200);

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
// ===============================
// Show Certificate Animation
// ===============================

certificate.style.opacity = "0";
certificate.style.transform = "translateY(40px)";

setTimeout(() => {

    certificate.style.transition = "all .7s ease";

    certificate.style.opacity = "1";

    certificate.style.transform = "translateY(0px)";

},100);


// ===============================
// Add Watermark
// ===============================

const border =
document.querySelector(".certificate-border");

border.style.backgroundImage =
"url('logo.png')";

border.style.backgroundRepeat =
"no-repeat";

border.style.backgroundPosition =
"center";

border.style.backgroundSize =
"260px";


// ===============================
// Certificate Number Generator
// ===============================

function generateCertificateNumber(){

    const year = new Date().getFullYear();

    const time = Date.now().toString().slice(-6);

    const random =
    Math.floor(Math.random()*9999);

    return `ZYLP-${year}-${time}-${random}`;

}


// ===============================
// Generate Official Seal
// ===============================

const seal =
document.createElement("div");

seal.className = "officialSeal";

seal.innerHTML = `
<div class="sealCircle">
ZYLP GROUP
<br>
VERIFIED
</div>
`;

border.appendChild(seal);


// ===============================
// Auto Scroll
// ===============================

window.scroll({

    top:
    certificate.offsetTop,

    behavior:"smooth"

});


// ===============================
// Disable Submit Button
// ===============================

const btn =
document.querySelector(".generateBtn");

btn.disabled=true;

btn.innerHTML="Generating...";

setTimeout(()=>{

btn.disabled=false;

btn.innerHTML="Generate Certificate";

},1800);


// ===============================
// Console Message
// ===============================

console.log(

"%cZYLP GROUP VERIFIED CERTIFICATE PORTAL",

"color:#0b5ed7;font-size:18px;font-weight:bold;"

);
