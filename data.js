
//stores list of Players and stats
 var totalStats = []

//dummy stats for testing
totalStats.push({
   player: "Mike",
   Runs: 30
})
totalStats.push({
   player: "Ken",
   Runs: 60
})

//triggered by the "Try Me" button
//grabs the text from input box and searches for matching name
function playerSearch() {
   var player_name = document.getElementById("playerName").value.toString()
   document.getElementById("output").innerText = find_player(player_name)
 }

function find_player(user){
  //make this work for more than one result
  var output = ""
  for (var i = 0; i < totalStats.length;i++){
    if (user == totalStats[i]["player"]){
      output = totalStats[i]["player"] + " scored "+ totalStats[i]["Runs"] + " runs!!!"
    }
  }
  return output
 }

//fixing the search using filter method
function find_player2(user){
  var result = totalStats.filter(x => user == x['player'])
  //make this work for more than just the first result
  //look into memoization
  return result[0]["player"] + " scored " + result[0]['Runs'] + " runs!"
}
