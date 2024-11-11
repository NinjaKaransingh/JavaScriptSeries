const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const inputVal = document.querySelector(".container input");
const btn = document.querySelector("button");
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");

const generateQrCode = () => {
 debugger;
 if (inputVal.value !== undefined && inputVal.value !== "") {
  qrImage.src = URL + inputVal.value;
  imgBox.classList.add("show-img");
  //  let response = await fetch(qrImage.src);
  //  let data = await response.json();
  //  console.log(data);
 } else {
  inputVal.classList.add("error");
  setTimeout(() => {
   inputVal.classList.remove("error");
  }, 1000);
 }
};

btn.addEventListener("click", generateQrCode);
