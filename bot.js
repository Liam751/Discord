const Discord = require('discord.js');
//fd

const client = new Discord.Client();
/*
var command = "!boy weakness fire";
var arguments = command.split(' ');
var output="";
if (arguments[0] == "!boy") {
    if (arguments[1]) {
        switch ( arguments [1] ) {
            case "weakness" :
                if (arguments[2]) {
                    switch (arguments[2]){
                        case "fire" :
                            output += "Weakness: Ground, Rock, Water";
                            break;
                        case "water" :
                            output += "Weakness: Electric, Grass";
                            break;
                        case "grass" :
                            output += "Weakness: Bug, Fire, Flying, Ice, Poison";
                            break;
                        case "flying" :
                            output += "Weakness: Electric, Ice, Rock";
                            break;
                        case "ground" :
                            output += "Weakness: Grass, Ice, Water";
                            break;
                        case "fighting" :
                            output += "Weakness: Fairy, Flying, Psychic";
                            break;
                        case "rock" :
                            output += "Weakness: Fighting, Grass, Ground, Steel, Water";
                            break;
                        case "psychic" :
                            output += "Weakness: Bug, Dark, Ghost";
                            break;
                        case "steel" :
                            output += "Weakness: Fighting, Fire, Ground";
                            break;
                        case "ice" :
                            output += "Weakness: Fighting, Fire, Rock, Steel";
                            break;
                        case "poison" :
                            output += "Weakness: Ground, Psychic";
                            break;
                        case "dark" :
                            output += "Weakness: Bug, Fairy, Fighting";
                            break;
                        case "dragon" :
                            output += "Weakness: Dragon, Fairy, Ice";
                            break;
                        case "electric" :
                            output += "Weakness: Ground";
                            break;
                        case "fairy" :
                            output += "Weakness: Poison, Steel";
                            break;
                        case "ghost" :
                            output += "Weakness: Dark, Ghost";
                            break;
                        case "normal" :
                            output += "Weakness: Fighting";
                            break;
                    }
                }
            break;
        }

        message.channel.send(output)

    }

}
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
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret