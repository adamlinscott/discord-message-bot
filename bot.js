var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

//Logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

//init bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('ready', (event) => {
    logger.info('Connected');
    logger.info('Logged in as: ' + bot.username + ' - (' + bot.id + ')');
});

bot.on('message', (user, userID, channelID, message, event) => {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);

        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
})

