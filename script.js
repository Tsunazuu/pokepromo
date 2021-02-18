/* Database */

$(document).ready(function () {
  $("#login-submit").on("click", function (e) {
    e.preventDefault();

    let loginUsername = $("#login-username").val();
    let loginPassword = $("#login-password").val();;
    localStorage.setItem("Username", loginUsername);
    localStorage.setItem("Password", loginPassword);
    
    setTimeout(redirectMain, 1000);
   
  });
})

function redirectMain() {
  window.location.href = "main.html";
}

/* Profile picture changer */

function changeImage(imgName) {
  image = document.getElementById('imgDisp');
  image.src = imgName;
}

function displayUsername() {
  var username = localStorage.getItem("Username");
  document.getElementById("username-display").innerHTML = username;
}
