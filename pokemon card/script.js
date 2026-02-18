const typeColor = {
  bug: "#26de81",
  dragon: "#D4B96D",
  electric: "#fed330",
  fairy: "#ff0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
  dark: "#000",
  steel: "#6C7A89",
};

const uri = "https://pokeapi.co/api/v2/pokemon/";

const card = document.getElementById("card");
const btn = document.getElementById("btn");

// for appending all types
const appendTypes = (data) => {
  data.forEach((index) => {
    const span = document.createElement("SPAN");
    span.textContent =
      index.type.name[0].toUpperCase() + index.type.name.slice(1);
    document.querySelector(".types").appendChild(span);
  });
};

// for setting theme color
const setThemeColor = (color) => {
  card.style.background = `radial-gradient(circle at 50% 0%,${color} 36%,#ffffff 36%)`;
  document.querySelectorAll(".types span").forEach((span) => {
    if (color) span.style.backgroundColor = color;
    else span.style.backgroundColor = "#bb24eh";
  });
};

// card generating function
const generateCard = (data) => {
  //    get all data for json
  const hp = data.stats[0].base_stat;
  const attack = data.stats[1].base_stat;
  const defense = data.stats[2].base_stat;
  const speed = data.stats[5].base_stat;
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);

  //    pokemon image
  const imgUri = data.sprites.other.dream_world.front_default;

  //    set theme color based on type of pokemon
  const themeColor = typeColor[data.types[0].type.name];

  // setting values in card
  card.innerHTML = `
                  <p class="hp">
                        <span>HP</span>
                        ${hp}
                  </p>
                  <img src=${imgUri} >
                  <h2 class="name">${pokeName}</h2>

                  <!-- for type of pokemon -->
                  <div class="types">
                        
                  </div>

                  <!-- states -->
                   <div class="stats">
                        <div>
                              <h3>${attack}</h3>
                              <p>Attack</p>
                        </div>
                        <div>
                              <h3>${defense}</h3>
                              <p>Defense</p>
                        </div>
                        <div>
                              <h3>${speed}</h3>
                              <p>Speed</p>
                        </div>
                       
                       
                   </div>
`;
  appendTypes(data.types);
  setThemeColor(themeColor);
};

const getPokeData = () => {
  // generating rondom number between 1 and 150
  const id = Math.floor(Math.random() * 500) + 1;

  // combining uri with id
  const fullUri = uri + id;

  // fetching new uri data
  try {
    fetch(fullUri)
      .then((res) => res.json())
      .then((data) => {
        generateCard(data);
      });
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
