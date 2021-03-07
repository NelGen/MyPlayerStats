 //document.write(player_name)
 //document.getElementById("output").innerHTML = player_name
 //console.log(player_name)'
 var totalStats = []

 totalStats.push({
     player: "Mike",
     Runs: 30
 })
 totalStats.push({
     player: "Ken",
     Runs: 60
 })

console.log(totalStats)



 function playerSearch() {

     var player_name = document.getElementById("playerName").value.toString()

     document.getElementById("output").innerHTML = find_player(player_name)
     //document.getElementById("output").innerText = find_player(player_name)

 }

 function find_player(user){
     //var result = totalStats.filter(x => user.toLowerCase() == x["player"].toLowerCase())
    var output = ""
     for (var i = 0; i < totalStats.length;i++){
         if (user == totalStats[i]["player"])
            output = totalStats[i]["player"] + " scored "+ totalStats[i]["Runs"] + " runs!!!"

     }
     return output
 }

 //console.log(find_player("Mike Trout"))