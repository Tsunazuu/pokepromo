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

let username = loginUsername
console.log(username)


/* Trivia */

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById("loader");
const game = document.getElementById("game");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];

fetchQ1C1()
fetchQ1C2()
fetchQ1C3()
fetchQ1C4()
fetchQ2C1()
fetchQ2C2()
fetchQ2C3()
fetchQ2C4()

function fetchQ1C1() {

    var pokemonNumber = Math.floor((Math.random() * 898) + 1);


      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNumber + "/")
      .then(response => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        console.log(response.json)
        return response.json();
      })
      .then(data => {

        const html = [data]
        .map(pokemon => {
        
        console.log(data)
        questions[0].choice1 = `${pokemon.name}`

        })
          })

      .catch(error => {
        console.log(error);
      })
  };


  function fetchQ1C2() {

    var pokemonNumber = Math.floor((Math.random() * 898) + 1);


      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNumber + "/")

      .then(response => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        console.log(response.json)
        return response.json();
      })
      .then(data => {

        const html = [data]
        .map(pokemon => {
        
        console.log(data)
        questions[0].choice2 = `${pokemon.name}`
        })
          })

      .catch(error => {
        console.log(error);
      })
  };

  function fetchQ1C3() {

    var pokemonNumber = Math.floor((Math.random() * 898) + 1);


      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNumber + "/")

      .then(response => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        console.log(response.json)
        return response.json();
      })
      .then(data => {

        const html = [data]
        .map(pokemon => {
        
        console.log(data)
        questions[0].choice3 = `${pokemon.name}`
        })
          })

      .catch(error => {
        console.log(error);
      })
  };

  function fetchQ1C4() {

    var pokemonNumber = Math.floor((Math.random() * 898) + 1);


      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNumber + "/")

      .then(response => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        console.log(response.json)
        return response.json();
      })
      .then(data => {

        const html = [data]
        .map(pokemon => {
        
        console.log(data)
        questions[0].choice4 = `${pokemon.name}`
        })
          })

      .catch(error => {
        console.log(error);
      })
  };

  function fetchQ2C1() {

    var pokemonNumber = Math.floor((Math.random() * 898) + 1);


      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNumber + "/")

      .then(response => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        console.log(response.json)
        return response.json();
      })
      .then(data => {

        const html = [data]
        .map(pokemon => {

            var pokemonTypes = ""
          for (i = 0; i < pokemon.types.length; i++) {
            if (i > 0) {
              pokemonTypes += ", "
            }
            pokemonTypes += pokemon.types[i].type.name.replace(/^./, str => str.toUpperCase())
          }
        
        console.log(data)
        questions[1].choice1 = `${pokemonTypes}`
        })
          })

      .catch(error => {
        console.log(error);
      })
  };

  function fetchQ2C2() {

    var pokemonNumber = Math.floor((Math.random() * 898) + 1);


      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNumber + "/")

      .then(response => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        console.log(response.json)
        return response.json();
      })
      .then(data => {

        const html = [data]
        .map(pokemon => {

            var pokemonTypes = ""
          for (i = 0; i < pokemon.types.length; i++) {
            if (i > 0) {
              pokemonTypes += ", "
            }
            pokemonTypes += pokemon.types[i].type.name.replace(/^./, str => str.toUpperCase())
          }
        
        console.log(data)
        questions[1].choice2 = `${pokemonTypes}`
        })
          })

      .catch(error => {
        console.log(error);
      })
  };

  function fetchQ2C3() {

    var pokemonNumber = Math.floor((Math.random() * 898) + 1);


      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNumber + "/")

      .then(response => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        console.log(response.json)
        return response.json();
      })
      .then(data => {

        const html = [data]
        .map(pokemon => {

            var pokemonTypes = ""
          for (i = 0; i < pokemon.types.length; i++) {
            if (i > 0) {
              pokemonTypes += ", "
            }
            pokemonTypes += pokemon.types[i].type.name.replace(/^./, str => str.toUpperCase())
          }
        
        console.log(data)
        questions[1].choice3 = `${pokemonTypes}`
        })
          })

      .catch(error => {
        console.log(error);
      })
  };

  function fetchQ2C4() {

    var pokemonNumber = Math.floor((Math.random() * 898) + 1);


      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNumber + "/")

      .then(response => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        console.log(response.json)
        return response.json();
      })
      .then(data => {

        const html = [data]
        .map(pokemon => {

            var pokemonTypes = ""
          for (i = 0; i < pokemon.types.length; i++) {
            if (i > 0) {
              pokemonTypes += ", "
            }
            pokemonTypes += pokemon.types[i].type.name.replace(/^./, str => str.toUpperCase())
          }
        
        console.log(data)
        questions[1].choice4 = `${pokemonTypes}`
        })
          })

      .catch(error => {
        console.log(error);
      })
  };


    fetch("questions.json")

    .then((res) => {
        return res.json();
    })
    .then(loadedquestions => {
        questions = loadedquestions
        setTimeout(startGame, 2000)
    })
    
    .catch((err) => {
        console.error(err);
    });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('triviaend.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};