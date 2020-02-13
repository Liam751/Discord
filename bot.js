const Discord = require('discord.js');

const client = new Discord.Client();
/*
var command = "!boy fire";
var arguments = command.split(' ');
var output = "";
if (arguments[0] == "!boy") {
    if (arguments[1]) {
        switch (arguments[1]) {
            case "fire":
                output = "Weakness: Ground, Rock, Water";
            case "water":
                output = "Weakness: Electric, Grass";
            case "grass":
                output = "Weakness: Bug, Fire, Flying, Ice, Poison";
                
            case "flying":
                output = "Weakness: Electric, Ice, Rock";
                
            case "ground":
                output = "Weakness: Grass, Ice, Water";
                
            case "fighting":
                output = "Weakness: Fairy, Flying, Psychic";
                
            case "rock":
                output = "Weakness: Fighting, Grass, Ground, Steel, Water";
                
            case "psychic":
                output = "Weakness: Bug, Dark, Ghost";
                
            case "steel":
                output = "Weakness: Fighting, Fire, Ground";
                
            case "ice":
                output = "Weakness: Fighting, Fire, Rock, Steel";
                
            case "poison":
                output = "Weakness: Ground, Psychic";
                
            case "dark":
                output = "Weakness: Bug, Fairy, Fighting";
                
            case "dragon":
                output = "Weakness: Dragon, Fairy, Ice";
                
            case "electric":
                output = "Weakness: Ground";
                
            case "fairy":
                output = "Weakness: Poison, Steel";
                
            case "ghost":
                output = "Weakness: Dark, Ghost";
                
            case "normal":
                output = "Weakness: Fighting";
                
        }
    }

}
message.channel.send(output)
*/





client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {
    if (message.content == '!boy weakness fire') {
        message.reply('Weakness: Ground, Rock, Water');
    }

    if (message.content == '!boy weakness water') {
        message.reply('Weakness: Electric, Grass');
    }

    if (message.content == '!boy weakness grass') {
        message.reply('Weakness: Bug, Fire, Flying, Ice, Poison');
    }

    if (message.content == '!boy weakness flying') {
        message.reply('Weakness: Electric, Ice, Rock');
    }

    if (message.content == '!boy weakness ground') {
        message.reply('Weakness: Grass, Ice, Water');
    }

    if (message.content == '!boy weakness fighting') {
        message.reply('Weakness: Fairy, Flying, Psychic');
    }

    if (message.content == '!boy weakness rock') {
        message.reply('Weakness: Fighting, Grass, Ground, Steel, Water');
    }

    if (message.content == '!boy weakness psychic') {
        message.reply('Weakness: Bug, Dark, Ghost');
    }

    if (message.content == '!boy weakness steel') {
        message.reply('Weakness: Fighting, Fire, Ground');
    }

    if (message.content == '!boy weakness ice') {
        message.reply('Weakness: Fighting, Fire, Rock, Steel');
    }

    if (message.content == '!boy weakness poison') {
        message.reply('Weakness: Ground, Psychic');
    }

    if (message.content == '!boy weakness dark') {
        message.reply('Weakness: Bug, Fairy, Fighting');
    }

    if (message.content == '!boy weakness dragon') {
        message.reply('Weakness: Dragon, Fairy, Ice');
    }

    if (message.content == '!boy weakness electric') {
        message.reply('Weakness: Ground');
    }

    if (message.content == '!boy weakness fairy') {
        message.reply('Weakness: Poison, Steel');
    }

    if (message.content == '!boy weakness ghost') {
        message.reply('Weakness: Dark, Ghost');
    }

    if (message.content == '!boy weakness normal') {
        message.reply('Weakness: Fighting');
    }

//new thing bruh

    if (message.content == '!boy speak') {
        speak()
        message.reply(y);
    }

    if (message.content == '!boy why aint he talkin') {
        message.reply('https://media.discordapp.net/attachments/669259868628320274/677597045380612096/image0.gif');
    }

    if (message.content == '!boy my name is') {
        message.reply('Jeff')
    }

});

function speak() {
  var n = Math.ceil(Math.random() * 6); 
  if (n == 1) {
      y = 'There are consequences to killing a God!'
  }
  else if (n == 2) {
      y = 'ÓÐR BRÓÐIR BLINDR!'
  }
  else if (n == 3) {
    y = 'In the direction of deer...'
   }
  else if (n == 4) {
    y = 'VALHALLA!'
   }
   else if (n == 5) {
       y = 'UNWORTHY U N W O R T H Y'
   }
   else if (n == 6) {
       y = ''
   }
}




// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret