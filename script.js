


function beforesubmit() {
    let outputDate = document.querySelector(".outputdate");
    let leadDate = document.getElementById("leadDate");
    console.log("leadDate.value", leadDate.value); //string ---> date ("en_IN")

    //(system.debug(User-Info.getLocale())

    let formattedDate = new Date(leadDate.value).toLocaleDateString("en-IN");
    outputDate.value = formattedDate;

}