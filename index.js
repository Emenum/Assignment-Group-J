const numberInput = document.querySelector('#phoneNumber')
// const code = document.getElementById("countryCode")
let regExp1 = /^(\d{3})$/
//    (234\s?)

validatenetwork();

function validatephonenumber (str){
    const regExp2 = /^(\d{3})(\d{3})?(\d{4})$/;
    return regExp2.test(str);
}

function validatenetwork(){

    numberInput.addEventListener('input',(event)=>{
        const inputvalue = event.target.value
        if(inputvalue.length >= 3){
            const fistThreeDigits = inputvalue.slice(0,3);
            switch(fistThreeDigits){
                case "813":
                case "803":
                case "806":
                case "903":
                case "906":
                case "702":
                case "706":
                case "703":
                case "816":
                 document.querySelector(".mtn").classList.remove("hidden");
                 document.querySelector(".airtel").classList.add("hidden");
                 document.querySelector(".glo").classList.add("hidden");
                 document.querySelector(".etisalat").classList.add("hidden");
            break;
                case "812":
                case "901":
                case "902":
                case "904":
                case "907":
                case "802":
                case "808":
                case "708":
                case "701":
                document.querySelector(".airtel").classList.remove("hidden");
                document.querySelector(".mtn").classList.add("hidden");
                 document.querySelector(".glo").classList.add("hidden");
                 document.querySelector(".etisalat").classList.add("hidden");
            break;
            case "815":
            case "905":
            case "805":
            case "807":
            case "705":
                document.querySelector(".glo").classList.remove("hidden");
                document.querySelector(".airtel").classList.add("hidden");
                 document.querySelector(".mtn").classList.add("hidden");
                 document.querySelector(".etisalat").classList.add("hidden");
            break;
            case "819":
            case "908":
            case "809":
                document.querySelector(".etisalat").classList.remove("hidden");
                document.querySelector(".airtel").classList.add("hidden");
                document.querySelector(".glo").classList.add("hidden");
                document.querySelector(".mtn").classList.add("hidden");
            break;
            default: console.log("other networks");
            }
        } else{
            console.log("other networks")
        }
        console.log(fistThreeDigits)
    })

    
   
}

document.getElementById("my_form").addEventListener("submit", validatephonenumber);






