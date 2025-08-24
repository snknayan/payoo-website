console.log("Hello Payoo App..!");
// login button functionality

document.getElementById("loginButton").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 12345678910;
  const pinNumber = 1234;
  const mobileNumberValue = parseInt(
    document.getElementById("mobile-number").value
  );
  const pinNumberValue = parseInt(document.getElementById("pin-number").value);
  console.log(mobileNumberValue, pinNumberValue);

  if (mobileNumberValue === mobileNumber && pinNumberValue === pinNumber) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid Credentials!");
  }
});
