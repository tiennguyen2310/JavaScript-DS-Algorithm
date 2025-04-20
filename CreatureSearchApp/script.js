const searchBtn = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

// DOM elements to update
const creatureName = document.getElementById('creature-name');
const creatureId = document.getElementById('creature-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

searchBtn.addEventListener('click', async () => {
  const query = searchInput.value.trim();

  if (!query) return;

  try {
    const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${query}`);
    if (!res.ok) throw new Error('Creature not found');

    const data = await res.json();

    // Update basic info
    creatureName.textContent = data.name.toUpperCase();
    creatureId.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;

    // Update types
    types.innerHTML = ''; // Clear previous
    data.types.forEach((typeObj) => {
      const typeSpan = document.createElement('span');
      typeSpan.textContent = typeObj.name.toUpperCase();
      types.appendChild(typeSpan);
    });

    // Helper to get stat by name
    const getStat = (statName) => data.stats.find((s) => s.name === statName)?.base_stat || 'N/A';

    hp.textContent = getStat('hp');
    attack.textContent = getStat('attack');
    defense.textContent = getStat('defense');
    specialAttack.textContent = getStat('special-attack');
    specialDefense.textContent = getStat('special-defense');
    speed.textContent = getStat('speed');

  } catch (error) {
    alert('Creature not found');
    creatureId.textContent = '';
    weight.textContent = '';
    height.textContent = '';
    types.innerHTML = '';
    hp.textContent = '';
    attack.textContent = '';
    defense.textContent = '';
    specialAttack.textContent = '';
    specialDefense.textContent = '';
    speed.textContent = '';
  }
});
