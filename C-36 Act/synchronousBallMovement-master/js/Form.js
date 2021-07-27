class Form{
    constructor(){

    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);
        var input = createInput("");
        var button = createButton("Play");
        var Greeting = createElement("h3");
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var Name = input.value();
            PlayerCount += 1;
            player.update(Name);
            player.updateCount(PlayerCount);
            Greeting.html("hello " + Name);
            Greeting.position(130,160);
        }); 
    }
}