/* Add Money Feature */
const validPin = 1234;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // console.log("Add money button clicked");

    const bank = document.getElementById("add-bank").value;
    const accountNumber = document.getElementById("add-account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin").value);
    // console.log(bank, accountNumber, amount, pin);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    if (accountNumber.length < 11) {
      alert("Please Enter Valid Account Number!");
      return;
    }

    if (pin !== validPin) {
      alert("Please provide valid PIN !");
      return;
    }
    //span ekta html tag tai innertext dibo, but jodi input tag hoto tahole value ditam
    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });

/* Cash Out money feature */

document
  .getElementById("withdraw-button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const wAmount = parseInt(document.getElementById("withdraw-amount").value);
    const availBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const totalNewBalance = availBalance - wAmount;
    document.getElementById("available-balance").innerText = totalNewBalance;
  });

/* Toggling Feature */
document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "block";
  document.getElementById("cash-out-parent").style.display = "none";
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "block";
    document.getElementById("add-money-parent").style.display = "none";
  });

/* Logout related functionality */
document.getElementById("logout-button").addEventListener("click", function () {
  window.location.href = "./index.html";
});
