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
var jeffcoin = 0

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

var word = "?hello";
var first = word.substring(0,1);
var end = word.substring(1,word.length);

if (first == "?") {
    if (end == "Jeff") {
        message.reply('i am god')
    }
}

//HELP
if (message.content == '?help') {
    message.reply("This is Jeff Bot. Use '?jeff quiz' to get a question about god. To answer use '?(answer here)'. Make sure answer is all lower case. Each right answer is 5 jeffcoin. Use '?jeff' to spend 15 jeffcoin and recieve a jeff image. Make sure to stan Jeffkimo627!")
}

    if (message.content == '?jeff') {
        image()
        message.reply(y);
    }

    if (message.content == '?why aint he talkin') {
        message.reply('https://media.discordapp.net/attachments/669259868628320274/677597045380612096/image0.gif');
    }

    if (message.content == '?my name is') {
        message.reply('Jeff')
    }

    if (message.content == '?jeff quiz') {
        jeffquiz()
        message.reply(question)
    }

    if (message.content == '?0627') {
        if (answer == birthday) {
            message.reply('Youre right! Here are 5 jeffcoins')
            var jeffcoin = jeffcoin + 5
            answer = nothing
        }
        else {
            message.reply('I didnt ask')
        }
    }

    if (message.content == '?21') {
        if (answer == funni) {
            message.reply('Youre right! Here are 5 jeffcoins')
            var jeffcoin = jeffcoin + 5
            answer = nothing
        }
        else {
            message.reply('I didnt ask')
        }
    }

    if (message.content == '?north korea') {
        if (answer == korea) {
            message.reply('Youre right! Here are 5 jeffcoins')
            jeffcoin = jeffcoin + 5
            answer = nothing
        }
        else {
            message.reply('I didnt ask')
        }
    }

});

function jeffquiz() {
    var t = Math.ceil(Math.random() * 3); 
    if (t == 1) {
        question = 'What is gods birthday?'
        answer = birthday
    }
    else if (t == 2) {
        question = 'whats 9 + 10?'
        answer = funni
    }
    else if (t == 3) {
        question = 'where is jeff from?'
        answer = korea
    }
}

function image() {
    if (jeffcoin >= 15) {
  var n = Math.ceil(Math.random() * 6); 
  jeffcoin = jeffcoin - 15
  if (n == 1) {
      y = 'https://media.discordapp.net/attachments/679400883162710037/679400945939120128/image0.png?width=343&height=611'
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
else {
    y = 'insufficent jeff coin'
}
}




// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret