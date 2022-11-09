console.log("hello");

const WhichVlues = document.getElementById("Which");
const codeValue = document.getElementById("codeValue");
const keyValue = document.getElementById("keyValue");
const whichHeader = document.getElementById("whichHeader");
const headerDiv = document.getElementById("headerDiv");

document.addEventListener("keyup", (e) => {
  keyValue.innerHTML = e.key == " " ? "(blank Space)" : e.key;
  codeValue.innerHTML = e.code;
  WhichVlues.innerHTML = e.which;
  whichHeader.innerHTML = e.which;
  headerDiv.style.border = "2px solid #322b1f";
  headerDiv.style.boxShadow = "10px 10px 5px 0px rgb(75 91 108)";
});
