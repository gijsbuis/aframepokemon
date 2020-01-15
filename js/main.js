window.onload = () => {
  const camera = document.getElementById('js--camera');

  const starterPokemons = document.getElementsByClassName('js--pokemon');
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
  const attack1Plane = document.getElementById('js--attack1-plane');
  const attack2Plane = document.getElementById('js--attack2-plane');
  const attack3Plane = document.getElementById('js--attack3-plane');
  const attack4Plane = document.getElementById('js--attack4-plane');
  const attackOptions = document.getElementsByClassName('js--attack-option');

  let starterPokemon = null;
  let starterPokemonlowercase = null;
  var starterPokemonsArrayIndex = null;
  var speed = null;
  var speedStarter = null;
  var speedRandomOne = null;
  var speedRandomTwo = null;
  var speedRandomThree = null;
  var speedRandomFour = null;
  var nameOfRandom = null;
  var nameRandomOne = null;
  var nameRandomTwo = null;
  var nameRandomThree = null;
  var nameRandomFour = null;
  var attackRandomOne = null;
  var attackRandomTwo = null;
  var attackRandomThree = null;
  var attackRandomFour = null;
  var randomPokemonArrayIndex = null;
  var chosenAttack = null;
  var attackRandom = null;

  function addListeners() {
    for (var i = 0; i < starterPokemons.length; i++) {
      starterPokemons[i].addEventListener('click', function(event) {
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
      starterPokemonsArrayIndex = 0;
      charmander.setAttribute('visible', 'false');
      squirtle.setAttribute('visible', 'false');
      bulbasaur.setAttribute('animation', 'property: position; from: -1 0 0; to: 0 0 0; dur: 1000');
    } else if (starterPokemon == "Charmander") {
      starterPokemonsArrayIndex = 1;
      bulbasaur.setAttribute('visible', 'false');
      squirtle.setAttribute('visible', 'false');
    } else if (starterPokemon == "Squirtle") {
      starterPokemonsArrayIndex = 2;
      bulbasaur.setAttribute('visible', 'false');
      charmander.setAttribute('visible', 'false');
      squirtle.setAttribute('animation', 'property: position; from: 1 0 0; to: 0 0 0; dur: 1000');
    }
    moveLocation();
  }

  function moveLocation() {
    setTimeout(function () {
      let att = document.createAttribute('animation');
      att.value = 'property: position; easing: linear; dur: 3000; to: 0 3 -29';
      camera.setAttribute('animation', att.value);
    }, 2000);

    setTimeout(function () {
      beginText.setAttribute('visible', 'false');
      bulbasaur.setAttribute('visible', 'false');
      charmander.setAttribute('visible', 'false');
      squirtle.setAttribute('visible', 'false');
      starterPokemons[starterPokemonsArrayIndex].setAttribute('visible', 'true');
      starterPokemons[starterPokemonsArrayIndex].setAttribute('animation', 'property: position; from: 0 0 0; to: -3 -0.25 -29; dur: 2000');
      starterPokemons[starterPokemonsArrayIndex].setAttribute('alpha-test', '0.1');
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
      speedRandomOne = response.stats[0].base_stat;
      nameRandomOne = response.forms[0].name;
      attackRandomOne = response.moves[12].move.name;
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
      speedRandomTwo = response.stats[0].base_stat;
      nameRandomTwo = response.forms[0].name;
      attackRandomTwo = response.moves[12].move.name;
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
      speedRandomThree = response.stats[0].base_stat;
      nameRandomThree = response.forms[0].name;
      attackRandomThree = response.moves[12].move.name;
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
      speedRandomFour = response.stats[0].base_stat;
      nameRandomFour = response.forms[0].name;
      attackRandomFour = response.moves[12].move.name;
    });
  }

  function startBattle() {
    for (var i = 0; i < wildPokemons.length; i++) {
      wildPokemons[i].addEventListener('click', function(event) {
        console.log(this.id);
        if (this.id == "js--pokemon-picture-one") {
          pokemonPictureOne.setAttribute('animation', 'property: position; from: -3 0 0; to: 0 0.5 0; dur: 1000');
          pokemonTextOne.setAttribute('visible', 'false');
          pokemonPictureTwo.setAttribute('visible', 'false');
          pokemonTextTwo.setAttribute('visible', 'false');
          pokemonPictureTwo.setAttribute('position', '0 0 50');
          pokemonPictureThree.setAttribute('visible', 'false');
          pokemonTextThree.setAttribute('visible', 'false');
          pokemonPictureThree.setAttribute('position', '0 0 50');
          pokemonPictureFour.setAttribute('visible', 'false');
          pokemonTextFour.setAttribute('visible', 'false');
          pokemonPictureFour.setAttribute('position', '0 0 50');
          speed = speedRandomOne;
          nameOfRandom = nameRandomOne;
          randomPokemonArrayIndex = 0;
          attackRandom = 1;
        } else if (this.id == "js--pokemon-picture-two") {
          pokemonPictureTwo.setAttribute('animation', 'property: position; from: -1 0 0; to: 0 0.5 0; dur: 1000');
          pokemonTextTwo.setAttribute('visible', 'false');
          pokemonPictureOne.setAttribute('visible', 'false');
          pokemonTextOne.setAttribute('visible', 'false');
          pokemonPictureOne.setAttribute('position', '0 0 50');
          pokemonPictureThree.setAttribute('visible', 'false');
          pokemonTextThree.setAttribute('visible', 'false');
          pokemonPictureThree.setAttribute('position', '0 0 50');
          pokemonPictureFour.setAttribute('visible', 'false');
          pokemonTextFour.setAttribute('visible', 'false');
          pokemonPictureFour.setAttribute('position', '0 0 50');
          speed = speedRandomTwo;
          nameOfRandom = nameRandomTwo;
          randomPokemonArrayIndex = 1;
          attackRandom = 2;
        } else if (this.id == "js--pokemon-picture-three") {
          pokemonPictureThree.setAttribute('animation', 'property: position; from: 1 0 0; to: 0 0.5 0; dur: 1000');
          pokemonTextThree.setAttribute('visible', 'false');
          pokemonPictureOne.setAttribute('visible', 'false');
          pokemonTextOne.setAttribute('visible', 'false');
          pokemonPictureOne.setAttribute('position', '0 0 50');
          pokemonPictureTwo.setAttribute('visible', 'false');
          pokemonTextTwo.setAttribute('visible', 'false');
          pokemonPictureTwo.setAttribute('position', '0 0 50');
          pokemonPictureFour.setAttribute('visible', 'false');
          pokemonTextFour.setAttribute('visible', 'false');
          pokemonPictureFour.setAttribute('position', '0 0 50');
          speed = speedRandomThree;
          nameOfRandom = nameRandomThree;
          randomPokemonArrayIndex = 2;
          attackRandom = 3;
        } else if (this.id == "js--pokemon-picture-four") {
          pokemonPictureFour.setAttribute('animation', 'property: position; from: 3 0 0; to: 0 0.5 0; dur: 1000');
          pokemonTextFour.setAttribute('visible', 'false');
          pokemonPictureOne.setAttribute('visible', 'false');
          pokemonTextOne.setAttribute('visible', 'false');
          pokemonPictureOne.setAttribute('position', '0 0 50');
          pokemonPictureTwo.setAttribute('visible', 'false');
          pokemonTextTwo.setAttribute('visible', 'false');
          pokemonPictureTwo.setAttribute('position', '0 0 50');
          pokemonPictureThree.setAttribute('visible', 'false');
          pokemonTextThree.setAttribute('visible', 'false');
          pokemonPictureThree.setAttribute('position', '0 0 50');
          speed = speedRandomFour;
          nameOfRandom = nameRandomFour;
          randomPokemonArrayIndex = 3;
          attackRandom = 4;
        }
        fightText.setAttribute('value', 'Fight!');
        getAttackMoves();
      })
    }
  }

  function getAttackMoves() {
    let attackMove;
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    fetch(BASE_URL + starterPokemonlowercase)
    .then( (data) => {
      return data.json();
    })
    .then( (response) => {
      attackMoveOne = response.moves[5].move.name;
      attackMoveTwo = response.moves[10].move.name;
      attackMoveThree = response.moves[15].move.name;
      attackMoveFour = response.moves[20].move.name;
      // adding a bit of speed for the starter because it's hard to beat other Pokemon otherwise
      speedStarter = response.stats[0].base_stat + 10;

      console.log(speedStarter);
      console.log(speed);

      attack1.setAttribute('visible', 'true');
      attack1.setAttribute('value', attackMoveOne);
      attack1Plane.setAttribute('visible', 'true');

      attack2.setAttribute('visible', 'true');
      attack2.setAttribute('value', attackMoveTwo);
      attack2Plane.setAttribute('visible', 'true');

      attack3.setAttribute('visible', 'true');
      attack3.setAttribute('value', attackMoveThree);
      attack3Plane.setAttribute('visible', 'true');

      attack4.setAttribute('visible', 'true');
      attack4.setAttribute('value', attackMoveFour);
      attack4Plane.setAttribute('visible', 'true');

      beginFight();
    });
  }

  function beginFight() {
    console.log("Fight has begun!");

    setTimeout(function () {
      console.log("Your Pokemon's speed is " + speedStarter);
      console.log("Random Pokemon's speed is " + speed);

      if (speedStarter >= speed) {
        let fightTextBegin = starterPokemon + ' can attack first because their speed is higher!';
        fightText.setAttribute('value', fightTextBegin);
      } else {
        let fightTextBegin = nameOfRandom + ' can attack first because their speed is higher!';
        fightText.setAttribute('value', fightTextBegin);
      }
    }, 2000);
    attack1Plane.addEventListener('click', function(event) {
      chosenAttack = 1;
      if (speedStarter >= speed) {
        starterPokemonAttack(1);
      } else {
        randomPokemonAttack(1);
      }
    });
    attack2Plane.addEventListener('click', function(event) {
      chosenAttack = 2;
      if (speedStarter >= speed) {
        starterPokemonAttack(2);
      } else {
        randomPokemonAttack(2);
      }
    });
    attack3Plane.addEventListener('click', function(event) {
      chosenAttack = 3;
      if (speedStarter >= speed) {
        starterPokemonAttack(3);
      } else {
        randomPokemonAttack(3);
      }
    });
    attack4Plane.addEventListener('click', function(event) {
      chosenAttack = 4;
      if (speedStarter >= speed) {
        starterPokemonAttack(4);
      } else {
        randomPokemonAttack(4);
      }
    });
  }

  function starterPokemonAttack(attackNumber) {
    if (attackNumber == 1) {
      let fightTextInput = starterPokemon + ' used ' + attack1.getAttribute('value');
      fightText.setAttribute('value', fightTextInput);
      shakeRandom();
    } else if (attackNumber == 2) {
      let fightTextInput = starterPokemon + ' used ' + attack2.getAttribute('value');
      fightText.setAttribute('value', fightTextInput);
      shakeRandom();
    } else if (attackNumber == 3) {
      let fightTextInput = starterPokemon + ' used ' + attack3.getAttribute('value');
      fightText.setAttribute('value', fightTextInput);
      shakeRandom();
    } else if (attackNumber == 4) {
      let fightTextInput = starterPokemon + ' used ' + attack4.getAttribute('value');
      fightText.setAttribute('value', fightTextInput);
      shakeRandom();
    }
  }

  function randomPokemonAttack(attackNumber) {
    if (attackNumber == 1) {
      let fightTextInput = nameOfRandom + ' used ' + attackRandomOne;
      fightText.setAttribute('value', fightTextInput);
      shakeStarter();
    } else if (attackNumber == 2) {
      let fightTextInput = nameOfRandom + ' used ' + attackRandomTwo;
      fightText.setAttribute('value', fightTextInput);
      shakeStarter();
    } else if (attackNumber == 3) {
      let fightTextInput = nameOfRandom + ' used ' + attackRandomThree;
      fightText.setAttribute('value', fightTextInput);
      shakeStarter();
    } else if (attackNumber == 4) {
      let fightTextInput = nameOfRandom + ' used ' + attackRandomFour;
      fightText.setAttribute('value', fightTextInput);
      shakeStarter();
    }
  }

  function shakeRandom() {
    wildPokemons[randomPokemonArrayIndex].setAttribute('animation', 'property: position; from: 0 0.5 0; to: 0.1 0.5 0; dur: 100; dir: alternate; loop: 16;');
    setTimeout(function () {
      wildPokemons[randomPokemonArrayIndex].setAttribute('animation', 'property: position; from: 0 0.5 0; to: 0.1 -3 0; dir: normal; loop: false; dur: 1000');
    }, 3000);
    fightText.setAttribute('value', 'You won!');
    // getPowerStarter(chosenAttack);
    // getPowerRandom(attackRandom);
  }

  function shakeStarter() {
    starterPokemons[starterPokemonsArrayIndex].setAttribute('animation', 'property: position; from: -3 -0.25 -29; to: -3.1 -0.25 -29; dur: 100; dir: alternate; loop: 16;');
    setTimeout(function () {
      starterPokemons[starterPokemonsArrayIndex].setAttribute('animation', 'property: position; from: -3 -0.25 -29; to: -3 -3 -29; dur: 1000; dir: normal; loop: false;');
    }, 3000);
    fightText.setAttribute('value', 'You lost!');
    // getPowerStarter(chosenAttack);
    // getPowerRandom(attackRandom);
  }

  // function getPowerStarter(attack) {
  //   if (attack == 1) {
  //     sub_URL = attackMoveOne;
  //   } else if (attack == 2) {
  //     sub_URL = attackMoveTwo;
  //   } else if (attack == 3) {
  //     console.log(attackMoveThree);
  //     sub_URL = attackMoveThree;
  //   } else if (attack == 4) {
  //     sub_URL = attackMoveFour;
  //   }
  //
  //   const BASE_URL = "https://pokeapi.co/api/v2/move/";
  //   fetch(BASE_URL + sub_URL)
  //   .then( (data) => {
  //     return data.json();
  //   })
  //   .then( (response) => {
  //     console.log(response.name);
  //     console.log(response.power);
  //   });
  // }
  //
  // function getPowerRandom(attack) {
  //   if (attack == 1) {
  //     sub_URL = attackRandomOne;
  //   } else if (attack == 2) {
  //     sub_URL = attackRandomTwo;
  //   } else if (attack == 3) {
  //     sub_URL = attackRandomThree;
  //   } else if (attack == 4) {
  //     sub_URL = attackRandomFour;
  //   }
  //
  //   const BASE_URL = "https://pokeapi.co/api/v2/move/";
  //   fetch(BASE_URL + sub_URL)
  //   .then( (data) => {
  //     return data.json();
  //   })
  //   .then( (response) => {
  //     console.log(response.name);
  //     console.log(response.power);
  //   });
  // }
}
