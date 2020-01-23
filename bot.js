const Discord = require('discord.js');

const client = new Discord.Client();

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