// aqui tenemos las solicitudes para acceder a los episodios y los personajes
fetch('https://rickandmortyapi.com/api/character', {
  method: 'GET',
  headers: {
    "Content-Type": "application/json"
  }
}).then(res => res.json()).then(data => console.log(data.results))

fetch('https://rickandmortyapi.com/api/episode/1', {
  method: 'GET',
  headers: {
    "Content-Type": "application/json"
  }
}).then(res => res.json()).then(data => console.log(data))

// aqio tenemos el codigo para que nos los muestre

const characters = [
    {
      name: 'Arthricia',
      status: 'Alive',
      species: 'Alien',
      lastKnownLocation: 'Purge Planet',
      firstSeenIn: 'Look Who\'s Purging Now'
    },
    {
      name: 'Gibble Snake',
      status: 'Dead',
      species: 'Alien',
      lastKnownLocation: 'Resort Planet',
      firstSeenIn: 'The Whirly Dirly Conspiracy'
    },
    {
      name: 'Trandor',
      status: 'Alive',
      species: 'Alien',
      lastKnownLocation: 'Earth (Replacement Dimension)',
      firstSeenIn: '3375'
    },
    {
      name: 'Eric Stoltz Mask Morty',
      status: 'Unknown',
      species: 'Human',
      lastKnownLocation: 'Earth (Replacement Dimension)',
      firstSeenIn: 'Close Rick-counters of the Rick Kind'
    },
    {
      name: 'Photography Cyborg',
      status: 'Unknown',
      species: 'Robot',
      lastKnownLocation: 'Planet Squanch',
      firstSeenIn: 'The Wedding Squanchers'
    },
    {
      name: 'Stan Lee Rick',
      status: 'Unknown',
      species: 'Human',
      lastKnownLocation: 'Citadel of Ricks',
      firstSeenIn: 'Arthricia'
    }
  ];
  
  const characterList = document.getElementById('character-list');
  
  characters.forEach((character) => {
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('character');
  
    const name = document.createElement('h2');
    name.textContent = character.name;
    characterDiv.appendChild(name);
  
    const status = document.createElement('p');
    status.textContent = `Status: ${character.status}`;
    characterDiv.appendChild(status);
  
    const species = document.createElement('p');
    species.textContent = `Species: ${character.species}`;
    characterDiv.appendChild(species);
  
    const lastKnownLocation = document.createElement('p');
    lastKnownLocation.textContent = `Last Known Location: ${character.lastKnownLocation}`;
    characterDiv.appendChild(lastKnownLocation);
  
    const firstSeenIn = document.createElement('p');
    firstSeenIn.textContent = `First Seen In: ${character.firstSeenIn}`;
    characterDiv.appendChild(firstSeenIn);
  
    characterList.appendChild(characterDiv);
  });