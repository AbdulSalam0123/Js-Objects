const pokemon = require('./data.js');
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: true, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }


// Exercise 1
console.dir(pokemon, { maxArrayLength: null });
console.log("Exercise 1: "+pokemon[58].number+ ": "+ pokemon[58].name);

// Exercise 2
//console.log(game);

// // Exercise 3
// game.difficulty = 'medium';
// console.log(game);

// Exercise 4
pokemon.forEach((start)=>
{
    if(start.starter===true)
    {
        game.party.push(start);
    }
})
console.log(game.party);

//Exercise 5
game.party.push(pokemon[41]);
game.party.splice(1, 0, pokemon[112]);
game.party.unshift(pokemon[144]);
console.log(game.party);

//Exercise 6
game.gyms.forEach((diff) =>
{
    if(diff.difficulty<3)
    {
        diff.completed=true;
        
    }
})
console.log(game.gyms);

// Exercise 7
//console.log(game.party);
game.party.forEach((start, index)=>
{
    if(start.starter===true)
    {
        // console.log(start.number);
        //let indexParty=start.number;
        // console.log(indexParty);
        let indexPokemon=start.number;
        game.party.splice(index,1, pokemon[indexPokemon]);
        //console.log(indexParty);
        // console.log(indexPokemon);
        //console.log(indexPokemon)
        //console.log(pokemon[indexPokemon]);
    }

})
//Result 7
console.log(game.party);

//Exercise 8
game.party.forEach((name)=>
{
    console.log(name.name);
})

//Exercise 9
pokemon.forEach((start)=>
{
    if(start.starter===true)
    {
        //Result 9
        console.log(start.name);
    }
})

// //Exercise 10
// game.catchPokemon=function(pokemonObj)
// {
//     game.party.push(pokemonObj);
//     //Result 10
//     console.log(pokemonObj);
// };
// game.catchPokemon(pokemon[9]);

//Exercise 11
game.catchPokemon=function(pokemonObj)
{
    game.party.push(pokemonObj);
    game.items[1].quantity--;
};
game.catchPokemon(pokemon[9]);
console.log(game.items[1].quantity);

//Exercise 12
game.gyms.forEach((diff) =>
{
    if(diff.difficulty<6)
    {
        diff.completed=true;
    }
})
console.log(game.gyms);

// Exercise 13
const gymTally={
    complete:0,
    incomplete:0
}
game.gymStatus=function ()
{
    game.gyms.forEach((gym)=>
    {
        if(gym.completed===true)
        {
            gymTally.complete++;
        }
        else
        {
            gymTally.incomplete++
        }
    })   
    console.log(gymTally);
}
game.gymStatus();


//Exercise 14
game.partyCount=function()
{
    let countPoke=0;
    game.party.forEach(count => 
    {
        countPoke++;
    })
    return countPoke;
}
console.log(game.partyCount());

// Exercise 15
game.gyms.forEach((diff) =>
{
    if(diff.difficulty<8)
    {
        diff.completed=true;
    }
})
console.log(game.gyms);

// Exercise 16
console.log(game);
