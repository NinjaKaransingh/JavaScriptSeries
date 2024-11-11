const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// to update the select dropdown values
for (let selects of dropdowns) {
  for (let currCode in countryList) {
    // console.log(currCode, countryList[code]); //example :  AED AE
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (selects.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (selects.name === "to" && currCode === "INR") {
      newOption.selected = "selectsed";
    }
    selects.append(newOption);
  }
  selects.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// to update the flag to respective currency codes
const updateFlag = (element) => {
  //   console.log(element);
  let currCode = element.value; // for example : USD
  let countryCode = countryList[currCode]; // US
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  element.parentElement.querySelector("img").src = newSrc;
};

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  console.log(fromCurr);
  //   const URL = `${BASE_URL}/${fromCurr}/${toCurr}`;
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]; //rate = data.usd['inr'] => 84.18997366
  //   console.log(rate); // for example rate 84.18997366
  let finalAmt = rate * amtVal;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
};

window.addEventListener("load", updateExchangeRate);

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});
