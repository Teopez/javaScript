const team = {
  _players: [
    { firstName: 'Lionel', lastName: 'Messi', age: 33 },
    { firstName: 'Cristiano', lastName: 'Ronaldo', age: 30 },
    { firstName: 'James', lastName: 'Rodriguez', age: 28 }
  ],
  
  _games: [
    { opponent: 'Real Madrid', teamPoints: 5, opponentPoints: 2 },
    { opponent: 'Barcelona', teamPoints: 2, opponentPoints: 1 },
    { opponent: 'Ecuador', teamPoints: 3, opponentPoints: 1 }
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    const newPlayer = { firstName: newFirstName, lastName: newLastName, age: newAge };
    this._players.push(newPlayer);
  },

  addGame (newOpponent, newTeamPoints, newOpponentPoints) {
    const newGame = {
      opponent:newOpponent,
      teamPoints:newTeamPoints,
      opponentPoints:newOpponentPoints};
      this._games.push(newGame)
  }
};
team.addGame('Titans',100,98);

// Agregando nuevos jugadores
team.addPlayer("Neymar", "Jr", 31);

console.log(team.players);
console.log(team.games);
