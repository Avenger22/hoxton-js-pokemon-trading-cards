// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

// console.log(data);

// Take some pokemon data and add a card to the .cards div
function createCardPokemon(title, src, hpParam, attackParam, defenseParam, specialAttParam, specialDefParam, speedParam) {
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
    liInsideEl1.textContent = hpParam

    const liInsideEl2 = document.createElement('li')
    liInsideEl2.textContent = attackParam

    const liInsideEl3 = document.createElement('li')
    liInsideEl3.textContent = defenseParam

    const liInsideEl4 = document.createElement('li')
    liInsideEl4.textContent = specialAttParam

    const liInsideEl5 = document.createElement('li')
    liInsideEl5.textContent = specialDefParam

    const liInsideEl6 = document.createElement('li')
    liInsideEl6.textContent = speedParam

    //append the data to the li parent class
    ulEl.append(liInsideEl1, liInsideEl2, liInsideEl3, liInsideEl4, liInsideEl5, liInsideEl6)
    liEl.append(h2El, imgEl, ulEl)
    
    //append the whole li item to the html ul.cards
    const cardEl = document.querySelector('.cards')
    cardEl.append(liEl)
}
  
  createCardPokemon(
    'bulbasaur',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    'HP: 45' ,
    'Attack: 49' ,
    'Defense: 49' ,
    'HP: 45' ,
    'HP: 45' ,
    'HP: 45'
  )