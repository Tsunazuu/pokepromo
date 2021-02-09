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