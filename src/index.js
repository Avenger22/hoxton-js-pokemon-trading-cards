// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default
// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

// import { data } from './data'
console.log("Data :", window.data);

// Take some pokemon data and add a card to the .cards div
function createCardPokemon(title, src, hpParam, attackParam, defenseParam, specialAttParam, specialDefParam, speedParam, gameParam1, gameParam2) {
    // create a list item inside UL
    const liEl = document.createElement('li')
    liEl.setAttribute('class', 'card')
  
    // create an h2
    const h2El = document.createElement('h2')
    h2El.setAttribute('class', 'card--title')
    h2El.textContent = title
  
    // create an image
    const imgEl = document.createElement('img')
    imgEl.setAttribute('class', 'card--img')
    imgEl.setAttribute('width', '256')
    imgEl.setAttribute('src', src)
  
    //create an ul wich is in the card nested
    const ulEl = document.createElement('ul')
    ulEl.setAttribute('class', 'card--text')

    //create for each li an sub list and fetch data from object with param
    const liInsideEl1 = document.createElement('li')
    liInsideEl1.textContent = `HP: ${hpParam}`

    const liInsideEl2 = document.createElement('li')
    liInsideEl2.textContent = `ATTACK: ${attackParam}`

    const liInsideEl3 = document.createElement('li')
    liInsideEl3.textContent = `DEFENSE: ${defenseParam}`

    const liInsideEl4 = document.createElement('li')
    liInsideEl4.textContent = `SPECIAL-ATTACK: ${specialAttParam}`

    const liInsideEl5 = document.createElement('li')
    liInsideEl5.textContent = `SPECIAL-DEFENSE: ${specialDefParam}`

    const liInsideEl6 = document.createElement('li')
    liInsideEl6.textContent = `SPEED: ${speedParam}`

    //create a new section game appeared
    const spanEl = document.createElement('span')
    spanEl.setAttribute('class', 'span-game')
    spanEl.textContent = `Game Appeared: ${gameParam1} and in : ${gameParam2}`

    //append the data to the li parent class
    ulEl.append(liInsideEl1, liInsideEl2, liInsideEl3, liInsideEl4, liInsideEl5, liInsideEl6)
    liEl.append(h2El, imgEl, ulEl, spanEl)
    
    //append the whole li item to the html ul.cards
    const cardEl = document.querySelector('.cards')
    cardEl.append(liEl)
}

//Here we loop to get data from array and parse it 
function loopingArrayPokemon() {
    for (const element of data) {
        createCardPokemon(
            element.name,
            element.sprites.other["official-artwork"].front_default, 
            element.stats[0].base_stat, 
            element.stats[1].base_stat, 
            element.stats[2].base_stat, 
            element.stats[3].base_stat, 
            element.stats[4].base_stat, 
            element.stats[5].base_stat,
            element.game_indices[0].game_index,
            element.game_indices[3].game_index
        )

        console.log(`Name of the Pokemon : ${element.name}
        and the source of img is : ${element.sprites.other["official-artwork"].front_default}
        and the HP: ${element.stats[0].base_stat}
        and the Attack: ${element.stats[1].base_stat}
        and the Defense: ${element.stats[2].base_stat}
        and the Special Attack: ${element.stats[3].base_stat}
        and the Special Defense: ${element.stats[4].base_stat}
        and the Speed: ${element.stats[5].base_stat}`)
    }
}

//function to evauleate som fun data from input
function loopingArrayPokemonInput(userInputParam) {
    for (const element of data) {
        if (element.name === userInputParam) {
            alert(`Name of the Pokemon : ${element.name}
            and the source of img is : ${element.sprites.other["official-artwork"].front_default}
            and the HP: ${element.stats[0].base_stat}
            and the Attack: ${element.stats[1].base_stat}
            and the Defense: ${element.stats[2].base_stat}
            and the Special Attack: ${element.stats[3].base_stat}
            and the Special Defense: ${element.stats[4].base_stat}
            and the Speed: ${element.stats[5].base_stat}`)
        }
    }
}

function findMaximumAttackPokemon() {
    const attackFirstPokemon = data[0].stats[1].base_stat
    let attackArray = []
    for (let index = 1; index < data.length; index++) {
        if (data[index].stats[1].base_stat > attackFirstPokemon) {
            attackArray[0] = data[index].stats[1].base_stat
            attackArray[1]= data[index].name
        }
    }
    return attackArray
}

function findMaximumHpPokemon() {
    const hpFirstPokemon = data[0].stats[0].base_stat
    let hpArray = []
    for (let index = 1; index < data.length; index++) {
        if (data[index].stats[0].base_stat > hpFirstPokemon) {
            hpArray[0] = data[index].stats[0].base_stat
            hpArray[1]= data[index].name
        }
    }
    return hpArray
}

function findMaximumDefensePokemon() {
    const defenseFirstPokemon = data[0].stats[2].base_stat
    let defenseArray = []
    for (let index = 1; index < data.length; index++) {
        if (data[index].stats[2].base_stat > defenseFirstPokemon) {
            defenseArray[0] = data[index].stats[2].base_stat
            defenseArray[1]= data[index].name
        }
    }
    return defenseArray
}

function findMaximumSpecialAttackPokemon() {
    const specialAttackFirstPokemon = data[0].stats[3].base_stat
    let specialAttackArray = []
    for (let index = 1; index < data.length; index++) {
        if (data[index].stats[3].base_stat > specialAttackFirstPokemon) {
            specialAttackArray[0] = data[index].stats[3].base_stat
            specialAttackArray[1]= data[index].name
        }
    }
    return specialAttackArray
}

function findMaximumSpecialDefensePokemon() {
    const specialDefenseFirstPokemon = data[0].stats[4].base_stat
    let specialDefenseArray = []
    for (let index = 1; index < data.length; index++) {
        if (data[index].stats[4].base_stat > specialDefenseFirstPokemon) {
            specialDefenseArray[0] = data[index].stats[4].base_stat
            specialDefenseArray[1]= data[index].name
        }
    }
    return specialDefenseArray
}

function findMaximumSpeedPokemon() {
    const speedFirstPokemon = data[0].stats[5].base_stat
    let speedArray = []
    for (let index = 1; index < data.length; index++) {
        if (data[index].stats[1].base_stat > speedFirstPokemon) {
            speedArray[0] = data[index].stats[5].base_stat
            speedArray[1]= data[index].name
        }
    }
    return speedArray
}

//function to evauleate som fun data from input
function checkingUserInputPokemon(userInputPokemonParam) {
    if (Number(userInputPokemonParam)) {
        alert("Dont troll or we will ban from the server, enter a NAME not number !!!")
        userInputPokemon = prompt("Enter a pokemon exmaple raticate")
        if (Number(userInputPokemon)) {
            throw new Error("Ban Him, enters numbers, not string")
        }
    }
}

//call the function and get pokemons in page
loopingArrayPokemon()

let userInputPokemon = prompt("Enter wich name of pokemon you would like to be displayed in console for example 'raticate' :")
alert("Now we will evaluate data in the console.")

checkingUserInputPokemon(userInputPokemon)
loopingArrayPokemonInput(userInputPokemon)

//Here is bonus just to get all max in all 6 stats and see who is this pokemon
const finalResultAttack = findMaximumAttackPokemon()
alert(`Pokemon with highest attack has : ${finalResultAttack[0]} 
and name : ${finalResultAttack[1]}`)
console.log(`Pokemon with highest attack has : ${finalResultAttack[0]} 
and name : ${finalResultAttack[1]}`)

const finalResultHp = findMaximumHpPokemon()
alert(`Pokemon with highest hp has : ${finalResultHp[0]} 
and name : ${finalResultHp[1]}`)
console.log(`Pokemon with highest hp has : ${finalResultHp[0]} 
and name : ${finalResultHp[1]}`)

const finalResultDefense = findMaximumDefensePokemon()
alert(`Pokemon with highest defense has : ${finalResultDefense[0]} 
and name : ${finalResultHp[1]}`)
console.log(`Pokemon with highest defense has : ${finalResultDefense[0]} 
and name : ${finalResultHp[1]}`)

const finalResultSpecialAttack = findMaximumSpecialAttackPokemon()
alert(`Pokemon with highest special attack has : ${finalResultSpecialAttack[0]} 
and name : ${finalResultSpecialAttack[1]}`)
console.log(`Pokemon with highest special attack has : ${finalResultSpecialAttack[0]} 
and name : ${finalResultSpecialAttack[1]}`)

const finalResultSpecialDefense = findMaximumSpecialDefensePokemon()
alert(`Pokemon with highest special defense has : ${finalResultSpecialDefense[0]} 
and name : ${finalResultSpecialDefense[1]}`)
console.log(`Pokemon with highest special defense has : ${finalResultSpecialDefense[0]} 
and name : ${finalResultSpecialDefense[1]}`)

const finalResultSpeed = findMaximumSpeedPokemon()
alert(`Pokemon with highest speed has : ${finalResultSpeed[0]} 
and name : ${finalResultSpeed[1]}`)
console.log(`Pokemon with highest speed has : ${finalResultSpeed[0]} 
and name : ${finalResultSpeed[1]}`)