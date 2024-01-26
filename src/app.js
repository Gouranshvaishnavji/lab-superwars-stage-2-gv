const PLAYERS = [
    "Spiderman", "Captain America", 
              "Wonderwoman", 
    "Popcorn", "Gemwoman",
    "Bolt", "Antwoman",
     "Mask", "Tiger", 
         "Captain",
     "Catwoman", 
    "Fish",
    "Hulk",
     "Ninja", 
    "Black Cat", 
       "Volverine",
    "Thor", "Slayer",
       "Vader", "Slingo"
];

// function to initilize players with imge and strengh
const initPlayers = (players) => {
    let detailedPlayers = [];
    // used for Loop trough all playrs
    for (let i = 0; i < players.length; i++) {
        const type = i % 2 === 0 ? 'villain' : 'hero';
        const value = getRandomStrength();
        const herovillain = {
            name: players[i],
            strength: value,
            image: `./images/super-${i + 1}.png`,
            type: type
        };
        detailedPlayers.push(herovillain);
    }
    return detailedPlayers;
};

// function to get random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    let random = Math.ceil(Math.random() * 100);
    return random;
};
// this was new thing i learnt
const template = (player) => {
    return `<div class="player">
                <img src="${player.image}">
                <div class="title">${player.name}</div>
                <div class="strength">${player.strength}</div>
            </div>`;
};
const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    for (let i = 0; i < players.length; i++) {
        if (players[i].type === type) {
            fragment += template(players[i]);
        }
    }

    // Return the HTML template
    return fragment;
};

// Display players in HTML
const viewPlayers = (players) => {
    const heroesHTML = buildPlayers(players, 'hero');
    const villainsHTML = buildPlayers(players, 'villain');

    document.getElementById('heroes').innerHTML = heroesHTML;
    document.getElementById('villains').innerHTML = villainsHTML;
};

window.onload = () => {
    let displayedPlayers = initPlayers(PLAYERS);
    viewPlayers(displayedPlayers);
};
