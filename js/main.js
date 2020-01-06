window.onload = () => {
  const camera = document.getElementById('js--camera');

  const pokemons = document.getElementsByClassName('js--pokemon');
  const bulbasaur = document.getElementById('js--bulbasaur');
  const charmander = document.getElementById('js--charmander');
  const squirtle = document.getElementById('js--squirtle');

  const pokemonPictureOne = document.getElementById('js--pokemon-picture-one');
  const pokemonTextOne = document.getElementById('js--pokemon-text-one');
  const pokemonPictureTwo = document.getElementById('js--pokemon-picture-two');
  const pokemonTextTwo = document.getElementById('js--pokemon-text-two');
  const pokemonPictureThree = document.getElementById('js--pokemon-picture-three');
  const pokemonTextThree = document.getElementById('js--pokemon-text-three');
  const pokemonPictureFour = document.getElementById('js--pokemon-picture-four');
  const pokemonTextFour = document.getElementById('js--pokemon-text-four');
  const beginText = document.getElementById('js--beginText');
  const wildPokemons = document.getElementsByClassName('js--wildPokemon');

  const attack1 = document.getElementById('js--attack1');
  const attack2 = document.getElementById('js--attack2');
  const attack3 = document.getElementById('js--attack3');
  const attack4 = document.getElementById('js--attack4');

  let starterPokemon = null;
  let starterPokemonlowercase = null;

  function addListeners() {
    for (var i = 0; i < pokemons.length; i++) {
      pokemons[i].addEventListener('click', function(event) {
        if (starterPokemon == null) {
          let thisID = this.id;
          let thisStripped = thisID.split("--");
          let choice = thisStripped[1].charAt(0).toUpperCase() + thisStripped[1].substring(1);
          starterPokemonlowercase = thisStripped[1]
          starterPokemon = choice;
          beginText.setAttribute('value', 'Your starter Pokemon is ' + starterPokemon + '!');
          removeOtherStarters();
        }
      });
    }
  }

  function removeOtherStarters() {
    if (starterPokemon == "Bulbasaur") {
      charmander.setAttribute('visible', 'false');
      squirtle.setAttribute('visible', 'false');
      bulbasaur.setAttribute('position', '0 0 0');
    } else if (starterPokemon == "Charmander") {
      bulbasaur.setAttribute('visible', 'false');
      squirtle.setAttribute('visible', 'false');
    } else if (starterPokemon == "Squirtle") {
      bulbasaur.setAttribute('visible', 'false');
      charmander.setAttribute('visible', 'false');
      squirtle.setAttribute('position', '0 0 0');
    }
    moveLocation();
  }

  function moveLocation() {
    setTimeout(function () {
      let att = document.createAttribute('animation');
      att.value = 'property: position; easing: linear; dur: 3000; to: 0 3 -30';
      camera.setAttribute('animation', att.value);
    }, 2000);

    setTimeout(function () {
      beginText.setAttribute('visible', 'false');
      bulbasaur.setAttribute('visible', 'false');
      charmander.setAttribute('visible', 'false');
      squirtle.setAttribute('visible', 'false');
    }, 3000);

    setTimeout(function () {
      setRandomPokemon();
    }, 2000);
  }

  addListeners();

  // Get the random pokemon from the API

  function setRandomPokemon() {
    let randomPokemonNumber = Math.floor(Math.random() * 151 + 1);
    let randomPokemonNumberTwo = Math.floor(Math.random() * 151 + 1);
    let randomPokemonNumberThree = Math.floor(Math.random() * 151 + 1);
    let randomPokemonNumberFour = Math.floor(Math.random() * 151 + 1);
    getPokemon(randomPokemonNumber);
    getPokemonTwo(randomPokemonNumberTwo);
    getPokemonThree(randomPokemonNumberThree);
    getPokemonFour(randomPokemonNumberFour);
    fightText.setAttribute('visible', 'true');
    startBattle();
  }

  const getPokemon = (numberOfPokemon) => {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    fetch(BASE_URL + numberOfPokemon)
    .then( (data) => {
      return data.json();
    })
    .then( (response) => {
      pokemonPictureOne.setAttribute('src', response.sprites.front_shiny);
      pokemonPictureOne.setAttribute('visible', 'true');
      pokemonTextOne.setAttribute('value', response.name);
    });
  }

  const getPokemonTwo = (numberOfPokemon) => {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    fetch(BASE_URL + numberOfPokemon)
    .then( (data) => {
      return data.json();
    })
    .then( (response) => {
      pokemonPictureTwo.setAttribute('src', response.sprites.front_default);
      pokemonPictureTwo.setAttribute('visible', 'true');
      pokemonTextTwo.setAttribute('value', response.name);
    });
  }

  const getPokemonThree = (numberOfPokemon) => {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    fetch(BASE_URL + numberOfPokemon)
    .then( (data) => {
      return data.json();
    })
    .then( (response) => {
      pokemonPictureThree.setAttribute('src', response.sprites.front_default);
      pokemonPictureThree.setAttribute('visible', 'true');
      pokemonTextThree.setAttribute('value', response.name);
    });
  }

  const getPokemonFour = (numberOfPokemon) => {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    fetch(BASE_URL + numberOfPokemon)
    .then( (data) => {
      return data.json();
    })
    .then( (response) => {
      pokemonPictureFour.setAttribute('src', response.sprites.front_default);
      pokemonPictureFour.setAttribute('visible', 'true');
      pokemonTextFour.setAttribute('value', response.name);
    });
  }

  function startBattle() {
    for (var i = 0; i < wildPokemons.length; i++) {
      wildPokemons[i].addEventListener('click', function(event) {
        console.log(this.id);
        if (this.id == "js--pokemon-picture-one") {
          pokemonPictureOne.setAttribute('position', '0 0 0');
          pokemonTextOne.setAttribute('position', '0 0.5 0')
          pokemonPictureTwo.setAttribute('visible', 'false');
          pokemonTextTwo.setAttribute('visible', 'false');
          pokemonPictureTwo.setAttribute('position', '0 0 50');
          pokemonPictureThree.setAttribute('visible', 'false');
          pokemonTextThree.setAttribute('visible', 'false');
          pokemonPictureThree.setAttribute('position', '0 0 50');
          pokemonPictureFour.setAttribute('visible', 'false');
          pokemonTextFour.setAttribute('visible', 'false');
          pokemonPictureFour.setAttribute('position', '0 0 50');
        } else if (this.id == "js--pokemon-picture-two") {
          pokemonPictureTwo.setAttribute('position', '0 0 0');
          pokemonPictureOne.setAttribute('visible', 'false');
          pokemonTextOne.setAttribute('visible', 'false');
          pokemonPictureOne.setAttribute('position', '0 0 50');
          pokemonPictureThree.setAttribute('visible', 'false');
          pokemonTextThree.setAttribute('visible', 'false');
          pokemonPictureThree.setAttribute('position', '0 0 50');
          pokemonPictureFour.setAttribute('visible', 'false');
          pokemonTextFour.setAttribute('visible', 'false');
          pokemonPictureFour.setAttribute('position', '0 0 50');
        } else if (this.id == "js--pokemon-picture-three") {
          pokemonPictureThree.setAttribute('position', '0 0 0');
          pokemonPictureOne.setAttribute('visible', 'false');
          pokemonTextOne.setAttribute('visible', 'false');
          pokemonPictureOne.setAttribute('position', '0 0 50');
          pokemonPictureTwo.setAttribute('visible', 'false');
          pokemonTextTwo.setAttribute('visible', 'false');
          pokemonPictureTwo.setAttribute('position', '0 0 50');
          pokemonPictureFour.setAttribute('visible', 'false');
          pokemonTextFour.setAttribute('visible', 'false');
          pokemonPictureFour.setAttribute('position', '0 0 50');
        } else if (this.id == "js--pokemon-picture-four") {
          pokemonPictureFour.setAttribute('position', '0 0 0');
          pokemonPictureOne.setAttribute('visible', 'false');
          pokemonTextOne.setAttribute('visible', 'false');
          pokemonPictureOne.setAttribute('position', '0 0 50');
          pokemonPictureTwo.setAttribute('visible', 'false');
          pokemonTextTwo.setAttribute('visible', 'false');
          pokemonPictureTwo.setAttribute('position', '0 0 50');
          pokemonPictureThree.setAttribute('visible', 'false');
          pokemonTextThree.setAttribute('visible', 'false');
          pokemonPictureThree.setAttribute('position', '0 0 50');
        }
        fightText.setAttribute('value', 'Fight!');
        setAttackMoves();
      })
    }
  }

  function setAttackMoves() {
    attack1.setAttribute('value', getAttackOne());
  }

  function getAttackOne() {
    let attackMove = null;
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    fetch(BASE_URL + starterPokemonlowercase)
    .then( (data) => {
      return data.json();
    })
    .then( (response) => {
      attackMove = response.moves[5].move.name;
      console.log(attackMove);
    });
    return attackMove;
  }
}
