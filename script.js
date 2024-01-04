
let captchaChecked = false;

function beforesubmit(event) {
    if (captchaChecked) {
        let outputDate = document.querySelector(".outputdate");
        let leadDate = document.getElementById("leadDate");
        console.log("leadDate.value", leadDate.value); //string ---> date ("en_IN")

        //(system.debug(User-Info.getLocale())

        let formattedDate = new Date(leadDate.value).toLocaleDateString("en-IN");
        outputDate.value = formattedDate;
    } else {
        alert("Please check the reCaptcha Boc to submit the lead")
        event.preventDefault();
    }
}

function timestamp() {
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
    }
} setInterval(timestamp, 500);

function captchasuccess() {
    captchaChecked = true;
}