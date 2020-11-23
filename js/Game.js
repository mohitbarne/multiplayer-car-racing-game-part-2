class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var ref = await database.ref('playerCount').once("value")
      if(ref.exists()){
        playerCount = ref.val()
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }
play(){
   form.hide()
   textSize(35)
   text("Get Set Go",120,100)
   Player.playerInfo()
   if(allPlayers!==undefined){
  var pos = 130
  for(var p in allPlayers){
    if(p == "player"+player.index){
      fill("blue")
    }
    else{
      fill("red")
    }
    pos +=20
    textSize(20)
    text(allPlayers[p].name+" = "+allPlayers[p].distance,120,pos)
  }
  
  
  
  }
  if(keyIsDown(UP_ARROW)&&player.index!==null){
player.distance+=50
player.update()
  }















}

}
