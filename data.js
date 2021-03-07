 //document.write(player_name)
 //document.getElementById("output").innerHTML = player_name
 //console.log(player_name)'

 function playerSearch() {
     var player_name = document.getElementById("playerName").value.toString()

     document.getElementById("output").innerHTML = find_player(player_name)
     //document.getElementById("output").innerText = find_player(player_name)
 }

 var totalStats = []

 totalStats.push({
     Player: "Mike Trout",
     Runs: 30
 })
 totalStats.push({
     Player: "Ken Griffey",
     Runs: 60
 })
 console.log(totalStats)


 function find_player(user_input) {
     for (player in totalStats) {
         if (user_input == player["Player"]) {
             console.log(player)
             return player["Player"]
         }
     }

 }
 //console.log(find_player("Mike Trout"))