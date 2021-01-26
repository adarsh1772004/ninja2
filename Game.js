class Game
{
    constructor()
    {
        
    }
    readGameState()
    {
        var gameState=database.ref("gameState")
        gameState.on("value",function(data){
          State=data.val()  
        })
    }
    writeGameState(A){
        database.ref("/")
        .update({
            "gameState":A
            
        }) 
    }
    startTheGame()
    {
        if(State==0){
            player=new Player()
            player.readPlayerCount()
            form=new Form()
            form.display()
        }
        Ninja1=createSprite(200, 100, 100, 100)
        Ninja1.addAnimation("rinning",ninja_running)
        Ninja1.scale=0.25
      
      
        Ninja2=createSprite(300, 100, 100, 100)
        Ninja2.addAnimation("rinning",ninja_running)
        Ninja2.scale=0.25
       
        Ninjas.push(Ninja1)
        Ninjas.push(Ninja2)
       

    }
    playGame()
    {
        console.log("hello")
        form.hide()
      
        var y=100
        var x=200
        var i=0
       player.readAllPlayers()
       if(backSprite.y>800)
       {
         backSprite.y=400
       }
       for(var p in Allplayers) 
       {
        x=x+250
           y=displayHeight-Allplayers[p].distance
           Ninjas[i].x=x
           Ninjas[i].y=y
           if(i+1==player.position){
               camera.position.x=displayWidth/2
               camera.position.y=Ninjas[i].y
           }
           i=i+1
           
       }
       drawSprites()
       
       
       if(keyIsDown(UP_ARROW))
       {
           player.distance=player.distance+10
           player.updateName()
       }
       /* if(player.distance>4150)
       {
         player.rank=carAtTheEnd+1
         player.updateName()
         Player.writeCarsAtEnd(player.rank)  
         State=2
       } */
    }
    endGame(){
        console.log(player.rank)
    }
}