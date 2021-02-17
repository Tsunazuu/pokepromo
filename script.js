/* Database */

$(document).ready(function () {
  //what kind of interface we want at the start 
  const APIKEY = "5ffd4a891346a1524ff128cb";
  $("#add-update-msg").hide();

  //[STEP 1]: Create our submit form listener
  $("#login-submit").on("click", function (e) {
    //prevent default action of the button 
    e.preventDefault();

    //[STEP 2]: let's retrieve form data
    //for now we assume all information is valid
    //you are to do your own data validation
    let loginUsername = $("#login-username").val();
    let loginPassword = $("#login-password").val();;
    localStorage.setItem("loginUsername", loginUsername);
    localStorage.setItem("loginPassword", loginPassword);

    //[STEP 3]: get form values when user clicks on send
    //Adapted from restdb api
    let jsondata = {
      "username": loginUsername,
      "password": loginPassword,
    };

    //[STEP 4]: Create our AJAX settings. Take note of API key
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://dubuu-26c6.restdb.io/rest/login-data",
      "method": "POST", //[cher] we will use post to send info
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata),
      "beforeSend": function(){
        //@TODO use loading bar instead
        //disable our button or show loading bar
        $("#contact-submit").prop( "disabled", true);
        //clear our form using the form id and triggering it's reset feature
        $("#add-contact-form").trigger("reset");
      }
    }

    //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
    $.ajax(settings).done(function (response) {
      console.log(response);
      
      $("#contact-submit").prop( "disabled", false);
      
      //@TODO update frontend UI 
      $("#add-update-msg").show().fadeOut(3000);
    });

    
    setTimeout(redirectMain, 1500);
   
  });
})

function redirectMain() {
  window.location.href = "main.html";
}

/* Local storage variables */

/* Currency */

const pokedollars = localStorage.getItem("Pokedollars")


/* Profile picture changer */

function changeImage(imgName) {
  image = document.getElementById('imgDisp');
  image.src = imgName;
}
