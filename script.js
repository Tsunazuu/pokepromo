$(document).ready(function () {


  localStorage.getItem("fetchName");
  if (localStorage.getItem("fetchName") === "true") {
    var generateQn = Math.floor((Math.random() * 2) + 1);
    var triviaNumber = Math.floor((Math.random() * 2) + 1);
    if (generateQn == "1" && triviaNumber == "1") {
      fetchNameN()
    }
    if (generateQn == "1" && triviaNumber == "2") {
      fetchNameS()
    }
    if (generateQn == "2" && triviaNumber == "1") {
      fetchShinyN()
    }
    if (generateQn == "2" && triviaNumber == "2") {
      fetchShinyS()
    }

    localStorage.removeItem("fetchName");
  }



  function fetchNameN() {

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
        console.log(data)
        const html = [data]
          .map(pokemon => {
            return `
            <div class="pokemon">
    
            <img style ='image-rendering: pixelated;' src="pokemon/${pokemon.id}.png" class="card-img" alt="...">
            <h1> Which Pokemon is This? </h1>
            <form>
            <div class="submitAnswer">
              <div class="answerBar">
               <input type="search" class="answer" id="answerBox" placeholder="Enter Answer">
              </div>
              <div class="answerBtn">
                <button type="button" class="btn" id="answerButton"
                onclick="script(getElementById('answerBox').value)">Enter</button>
              </div>
            </div>

          </div>

          `;
          })
          .join("");
        console.log(html)
        document.querySelector("#app").insertAdjacentHTML("beforebegin", html);
      })
      .catch(error => {
        console.log(error);
      })
  };

  function fetchNameS() {

    var pokemonNumber = Math.floor((Math.random() * 893) + 1);

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNumber + "/")
      .then(response => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        console.log(response.json)
        return response.json();
      })
      .then(data => {
        console.log(data)
        const html = [data]
          .map(pokemon => {
            return `
              <div class="pokemon">
    
                <img style ='image-rendering: pixelated;' src="pokemon/shiny/${pokemon.id}.png" class="card-img" alt="...">
                <h1> Which Pokemon is This? </h1>
                <form>
                <div class="submitAnswer">
                  <div class="answerBar">
                   <input type="search" class="answer" id="answerBox" placeholder="Enter Answer">
                  </div>
                  <div class="answerBtn">
                    <button type="button" class="btn" id="answerButton"
                    onclick="script(getElementById('answerBox').value)">Enter</button>
                  </div>
                </div>
    
              </div>
    
              `;
          })
          .join("");
        console.log(html)
        document.querySelector("#app").insertAdjacentHTML("beforebegin", html);
      })
      .catch(error => {
        console.log(error);
      })
  };


  function fetchShinyN() {

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
        console.log(data)
        const html = [data]
          .map(pokemon => {
            return `
            <div class="pokemon">
    
            <img style ='image-rendering: pixelated;' src="pokemon/${pokemon.id}.png" class="card-img" alt="...">
            <h1> Is This Pokemon Shiny? </h1>
            <form>
            <div class="submitAnswer">
              <div class="answerBar">
               <input type="search" class="answer" id="answerBox" placeholder="Enter Answer">
              </div>
              <div class="answerBtn">
                <button type="button" class="btn" id="answerButton"
                onclick="script(getElementById('answerBox').value)">Enter</button>
              </div>
            </div>

          </div>

          `;
          })
          .join("");
        console.log(html)
        document.querySelector("#app").insertAdjacentHTML("beforebegin", html);
      })
      .catch(error => {
        console.log(error);
      })
  };



  function fetchShinyS() {

    var pokemonNumber = Math.floor((Math.random() * 893) + 1);

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNumber + "/")
      .then(response => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        console.log(response.json)
        return response.json();
      })
      .then(data => {
        console.log(data)
        const html = [data]
          .map(pokemon => {
            return `
              <div class="pokemon">
    
                <img style ='image-rendering: pixelated;' src="pokemon/shiny/${pokemon.id}.png" class="card-img" alt="...">
                <h1> Is This Pokemon Shiny? </h1>
                <form>
                <div class="submitAnswer">
                  <div class="answerBar">
                   <input type="search" class="answer" id="answerBox" placeholder="Enter Answer">
                  </div>
                  <div class="answerBtn">
                    <button type="button" class="btn" id="answerButton"
                    onclick="script(getElementById('answerBox').value)">Enter</button>
                  </div>
                </div>
    
              </div>
    
              `;
          })
          .join("");
        console.log(html)
        document.querySelector("#app").insertAdjacentHTML("beforebegin", html);
      })
      .catch(error => {
        console.log(error);
      })
  };

  $("#fetchName").on("click", function (e) {
    e.preventDefault();
    console.log('name clicked');
    localStorage.setItem("fetchName", "true")
    window.location.href = "trivia.html"

  })


})