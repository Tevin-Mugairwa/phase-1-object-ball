function gameObject (){
    
    const obj = {
        home : {
            teamName : "Brooklyn Nets",
            colour : ['Black', 'White'],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assits: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assits: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assits: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assits: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assits: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assits: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assits: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assits: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assits: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assits: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
    return obj;
  }
  console.log(gameObject());

  const game = gameObject();

  function playersObject() {
    return { ...game.home.players, ...game.away.players }; // we are using spread oparetor to copy our gameobject  
  }
  console.log(playersObject())

  const players = playersObject();
  function numPointsScored(playerName){    //this funtion is for getting each player points
    return players[playerName].points
  }
  console.log('jeff adriens points',numPointsScored('Brendan Hayword'))

  function shoeSize(playerName){
    return players[playerName].shoe       // here the fuction is to get the shoe size of each player
  }
  console.log('alan andersons shoesize' ,shoeSize('Alan Anderson'))

  const teams = Object.values(game);
  function findByTeamName(teamName) {
    return teams.find((teamNameObject) => teamNameObject.teamName == teamName); //here we are finding the eam by the tam names
  }
  console.log('finding the teams by team name',findByTeamName('Brooklyn Nets'))

  function teamColors(teamName) {
    return findByTeamName(teamName).colors;  // here we getting the team color using the name of the team
  }
  console.log('finding the team colour by team name',teamColors('Charlotte Hornets')) 

  function teamNames() {
    return teams.map((teamN) => teamN.teamName);
  }
  console.log('the team name of both home and away is',teamNames())

  function playerNumbers(targetTeamName) {
    for (const jersey of teams) {
      if (jersey.teamName == targetTeamName) {
        let player = Object.values(jersey.players);
        return player.map((stat) => stat.number);
      }
    }
  }
  console.log('each teams numbers by teamName',playerNumbers('Brooklyn Nets'))

  
function playerStats(playerName) {
    return players[playerName];
  }
  console.log('each players object by passing the player name',playerStats('Reggie Evens'))

  function bigShoeRebounds() {
    const biggest = Object.values(players).sort((a, b) => {
        if (a.shoe > b.shoe) return -1; 
        if (a.shoe < b.shoe) return 1;
        if (a.shoe == b.shoe) return 0;
    })[0];
    return biggest.rebounds;
  }
  console.log(bigShoeRebounds())

  function mostPointsScored() {
    const sorted = Object.entries(players).sort((a, b) => {
        if (a[1].points > b[1].points) return -1;
        if (a[1].points < b[1].points) return 1;
        if (a[1].points == b[1].points) return 0;
      });
      return sorted[0][0];
  }
  console.log(mostPointsScored())

  function winningTeam() {
    const homeStats = Object.values(game.home.players); 
    const awayStats = Object.values(game.away.players); 
    const homeScore = homeStats.reduce((total, stat) => total + stat.points, 0);
    const awayScore = awayStats.reduce((total, stat) => total + stat.points, 0);
    debugger;
    if (homeScore > awayScore) {
      return game.home.teamName;
    } else if (awayScore > homeScore) {
      return game.away.teamName;
    } else {
      return ;
    }
  }
  console.log(winningTeam())

  function playerWithLongestName() {
    return Object.keys(players).sort((a, b) => {
      if (a.length > b.length) return -1;
      if (a.length < b.length) return 1;
      if (a.length == b.length) return 0;
    })[0];
    }
    
    console.log('this returns the player with the longest name',playerWithLongestName())
    
    function doesLongNameStealATon() {
        const allStats = Object.values(players);
        const maxSteals = Math.max(allStats.map((s) => s.steals));
        const longNameSteals = playerStats(playerWithLongestName()).steals;
        return longNameSteals === maxSteals;
        }
        
        console.log(doesLongNameStealATon())









