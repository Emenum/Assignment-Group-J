const gsm = document.getElementById("phoneNumber")
const code = document.getElementById("countryCode")
let regExp1 = /^(\d{3})$/
//    (234\s?)

function validatephonenumber (str){
    const regExp2 = /^(\d{3})(\d{3})?(\d{4})$/;
    return regExp2.test(str);
}
let phonevalue = gsm.value

function validatephone(e){
    if((!validatephonenumber(phonevalue))){
        console.log("Wrong phone number format")
    } else{
        console.log("correct value")
    }
    e.preventDefault();
}

function validatecountry(){

    let toArray = phonevalue.split("")
    let splicetoArray = toArray.splice(0,3)
    let arraytostring = splicetoArray.join()
    phonevalue.addEventListener("keydown",()=>{
        if(arraytostring === "813"){
        document.querySelector(".telco_logos,.telco1").classList.remove("hidden");
        }else if(arraytostring === "812"){
            document.querySelector(".telco2").classList.remove("hidden");
        }else if(arraytostring === "815"){
            document.querySelector(".telco3").classList.remove("hidden");
        }else if(arraytostring === "819"){
            document.querySelector(".telco4").classList.remove("hidden");
        };
        
    })
}

document.getElementById("my_form").addEventListener("click", validatecountry);

let g = "swing"
let h = g.split("")
console.log(h.splice(0,3))
// code.addEventListener("input",(e)=>{
//     if (gsm.value == regExp2){
//     console.log ("Correct phone format") 
// } else{
//     console.log("Wrong phone format")
// }
// })

console.log(gsm.value)



// function validatephone(str){
//     return regExp2.test(str)
// }
// console.log (validatephone("8130305905"))

// if (regExp.test()=== true){
//     document.getElementsByTagName("input").innerText="Phone number in the wrong format"
//     con
// }