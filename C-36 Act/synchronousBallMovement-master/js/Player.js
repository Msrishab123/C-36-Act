class Player{
    constructor(){

    }

    getCount(){
        var playerCountref = database.ref("PlayerCount");
        playerCountref.on("value", function(data){
            PlayerCount = data.val();
        });
    }

    updateCount(Count){
        database.ref("/").update({
            PlayerCount:Count
        });
    }

    update(Name){
        var playerIndex = "Player" + PlayerCount;
        database.ref(playerIndex).set({
            Name:Name
        });
    }
}