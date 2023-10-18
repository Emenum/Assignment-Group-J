document.querySelector("#phoneNumber").addEventListener("input", checkCarrier);

function checkCarrier() {
  const phoneNumber = document.querySelector("#phoneNumber").value;
  const digitOnly = phoneNumber.replace(/\D/g, "");

  // restrict the number of digits to 11 or 13
  if (digitOnly.startsWith("0")) {
    document.querySelector("#phoneNumber").maxLength = 11;
  } else {
    document.querySelector("#phoneNumber").maxLength = 14;
  }

  // clear the network info when the input box is empty
  if (digitOnly === "") {
    document.querySelector("#result").textContent = "";
    document.querySelector("#carrierLogo").src = "";
  }

  // Here, you can add your logic to validate the phone number against a network provider.

  if (digitOnly.startsWith("234")) {
    const first7Digits = digitOnly.slice(0, 6);
    switch (first7Digits) {
      case "234813":
      case "234803":
      case "234806":
      case "234903":
      case "234906":
      case "234702":
      case "234706":
      case "234703":
      case "234816":
        const mtnProvider = "MTN";
        const mtnLogoURL = "./images/mtn.svg";
        displayResult(mtnProvider, mtnLogoURL);
        break;
      case "234812":
      case "234901":
      case "234902":
      case "234904":
      case "234907":
      case "234802":
      case "234808":
      case "234708":
      case "234701":
        const airtelProvider = "AIRTEL";
        const airtelLogoURL = "./images/airtel-nigeria.svg";
        displayResult(airtelProvider, airtelLogoURL);
        break;
      case "234815":
      case "234905":
      case "234805":
      case "234807":
      case "234705":
        const gloProvider = "GLO";
        const gloLogoURL = "./images/globacom-limited.svg";
        displayResult(gloProvider, gloLogoURL);
        break;
      case "234819":
      case "234908":
      case "234809":
        const _9mobileProvider = "9MOBILE";
        const _9mobileLogoURL = "./images/9mobile.svg";
        displayResult(_9mobileProvider, _9mobileLogoURL);
        break;
      default:
        console.log(first7Digits);
        displayResult();
    }
  } else {
    if (digitOnly.length >= 4) {
      const first4Digits = digitOnly.slice(0, 4);
      switch (first4Digits) {
        case "0813":
        case "0803":
        case "0806":
        case "0903":
        case "0906":
        case "0702":
        case "0706":
        case "0703":
        case "0816":
          const mtnProvider = "MTN";
          const mtnLogoURL = "./images/mtn.svg";
          displayResult(mtnProvider, mtnLogoURL);
          break;
        case "0812":
        case "0901":
        case "0902":
        case "0904":
        case "0907":
        case "0802":
        case "0808":
        case "0708":
        case "0701":
          const airtelProvider = "AIRTEL";
          const airtelLogoURL = "./images/airtel-nigeria.svg";
          displayResult(airtelProvider, airtelLogoURL);
          break;
        case "0815":
        case "0905":
        case "0805":
        case "0807":
        case "0705":
          const gloProvider = "GLO";
          const gloLogoURL = "./images/globacom-limited.svg";
          displayResult(gloProvider, gloLogoURL);
          break;
        case "0819":
        case "0908":
        case "0809":
          const _9mobileProvider = "9MOBILE";
          const _9mobileLogoURL = "./images/9mobile.svg";
          displayResult(_9mobileProvider, _9mobileLogoURL);
          break;
        default:
          console.log(first4Digits);
          displayResult();
      }
    }
  }
}

function displayResult(provider, logoURL) {
  const resultDiv = document.querySelector("#result");
  const carrierLogo = document.querySelector("#carrierLogo");

  if (provider) {
    resultDiv.textContent = `Network Provider: ${provider}`;
    carrierLogo.src = logoURL;
    carrierLogo.style.display = "block"; // Show the image
  } else {
    resultDiv.textContent = "Invalid phone number or network not found.";
    carrierLogo.src = ""; // Clear the image if no provider is found.
    carrierLogo.style.display = "none"; // Hide the image
  }
}

