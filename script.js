$(document).ready(function () {


  localStorage.getItem("fetchName");
  if (localStorage.getItem("fetchName") === "true") {
    var generateQn = Math.floor((Math.random() * 2) + 1);
    if (generateQn === "1") {
      fetchName()
    } else {
      fetchNames()
    }
    localStorage.removeItem("fetchName");
  }


  function fetchName() {

    var pokemonNumber = Math.floor((Math.random() * 898) + 1);

    var triviaNumber = Math.floor((Math.random() * 5) + 1);

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

  function fetchNames() {

    var pokemonNumber = Math.floor((Math.random() * 893) + 1);

    var triviaNumber = Math.floor((Math.random() * 5) + 1);

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