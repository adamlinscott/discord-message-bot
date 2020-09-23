import Discord from 'discord.io';
import logger from 'winston';
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
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', (user, userID, channelID, message, event) => {
    
})

