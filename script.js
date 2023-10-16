const networkPrefix = {
    "0701": "airtel",
    "07025": "mtn",
    "07026": "mtn",
    "0703": "mtn",
    "0704": "mtn",
    "0705": "glo",
    "0706": "mtn",
    "0708": "airtel",
    "0802": "airtel",
    "0803": "mtn",
    "0804": "mtel",
    "0805": "glo",
    "0806": "mtn",
    "0807": "glo",
    "0808": "airtel",
    "0809": "9mobile",
    "0810": "mtn",
    "0811": "glo",
    "0812": "airtel",
    "0813": "mtn",
    "0814": "mtn",
    "0815": "glo",
    "0816": "mtn",
    "0817": "9mobile",
    "0818": "9mobile",
    "0909": "9mobile",
    "0908": "9mobile",
    "0901": "airtel",
    "0902": "airtel",
    "0903": "mtn",
    "0904": "airtel",
    "0905": "glo",
    "0906": "mtn",
    "0907": "airtel",
    "0915": "glo",
    "0913": "mtn",
    "0912": "airtel",
    "0916": "mtn",
};//Mockup database for network Prefixes in Nigeria.(Data can be found on wikipedia)


let phoneInput = document.getElementById("phoneNumber");//Variable for phone Input
let telLogo = document.getElementById("tel-logo"); //Variable for network Logo
//console.log(telLogo)
phoneInput.addEventListener("input", handleLogo)//Event Listener for input that activates function to create logo


function handleLogo(f) {
    let fl = f.currentTarget
    telLogo.innerHTML = ""
    
    if (fl.value.length === 11) {
        let logo = document.createElement("img")

        Object.entries(networkPrefix).forEach(([key, value]) => {
            if (fl.value.startsWith(key)) {
                logo.setAttribute("src", `./images/logos/${value}.png`)
                return
            }
        })
        telLogo.innerHTML = ""  // clears previous image before adding new one
        telLogo.appendChild(logo)
    }

}