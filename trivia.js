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

let questions = [{},{},{},{}];//declare proper object inside first

var pokemonNumber = Math.floor((Math.random() * 499) + 1);
var pokemonNumberTwo = Math.floor((Math.random() * 499) + 1);
var pokemonNumberThree = Math.floor((Math.random() * 499) + 1);
var pokemonNumberFour = Math.floor((Math.random() * 499) + 1);
localStorage.setItem("pokemonNumber", pokemonNumber)
localStorage.setItem("pokemonNumberTwo", pokemonNumberTwo)
localStorage.setItem("pokemonNumberThree", pokemonNumberThree)
localStorage.setItem("pokemonNumberFour", pokemonNumberFour)

fetchQ1C1()
fetchQ1C2()
fetchQ1C3()
fetchQ1C4()
fetchQ2C1()
fetchQ2C2()
fetchQ2C3()
fetchQ2C4()


function fetchQ1C1() {
    pokeNum = Number(localStorage.getItem("pokemonNumber"))
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNum + "/")
    .then(response => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
        
      .then(data => {

        const html = [data].map(pokemon => {
          questions[0].choice1 = `${pokemon.name}`;
        })
        .join("");
        return `
          <div class="pokemon-sprite">
          <img style="image-rendering: pixelated;" src="Pokemon/${pokemonNumber}.png" class="card-img" alt="..."></img>
          </div>`;
  })
    .then((data) => {

      console.log(data);
      $("#test").html(data);
    })

};


  function fetchQ1C2() {
    pokeNumTwo = Number(localStorage.getItem("pokemonNumberTwo"))

      fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNumTwo + "/")

      .then(response => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        console.log(response.json)
        return response.json();
      })
      .then(data => {

        const html = [data].map(pokemon => {
          questions[0].choice2 = `${pokemon.name}`;
        })
        .join("");
      })
          

      .catch(error => {
        console.log(error);
      })
  };

  function fetchQ1C3() {
      
    pokeNumThree = Number(localStorage.getItem("pokemonNumberThree"))

      fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNumThree + "/")

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
        .join("");
          })

      .catch(error => {
        console.log(error);
      })
  };

  function fetchQ1C4() {

    pokeNumFour = Number(localStorage.getItem("pokemonNumberFour"))

      fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNumFour + "/")

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
        .join("");
          })

      .catch(error => {
        console.log(error);
      })
  };

  function fetchQ2C1() {

    pokeNumThree = Number(localStorage.getItem("pokemonNumberThree"))

      fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNumThree + "/")

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
        .join("");
          })

      .catch(error => {
        console.log(error);
      })
  };

  function fetchQ2C2() {

    pokeNumTwo = Number(localStorage.getItem("pokemonNumberTwo"))

      fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNumTwo + "/")

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
        .join("");
          })

      .catch(error => {
        console.log(error);
      })
  };

  function fetchQ2C3() {

    pokeNum = Number(localStorage.getItem("pokemonNumber"))

      fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNum + "/")

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
        .join("");
          })

      .catch(error => {
        console.log(error);
      })
  };

  function fetchQ2C4() {

    pokeNumFour = Number(localStorage.getItem("pokemonNumberFour"))

      fetch("https://pokeapi.co/api/v2/pokemon/" + pokeNumFour + "/")
    
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
        .join("");
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
const MAX_QUESTIONS = 4;

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

