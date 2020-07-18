const Discord = require('discord.js');
const { off } = require('process');
let warningNumber = 5 //change to client input
let warningMax;
let filterToggle = false
let perms = message.member.permissions;
let has_Admin = perms.has("ADMINISTRATOR")
const cont = message.content.toLowerCase()
if (cont.includes(`!toggle filter` && (message.author.has_Admin))){ //placeholder
    if (filterToggle = false){
        filterToggle === true 
        message.channel.send({embed: {
            color: ('#5E81AC'),
            title: ":triangular_flag_on_post:  Filter toggle :triangular_flag_on_post: ",
            description: "Profanity filter enabled"}});
    if (filterToggle = true){
        filterToggle === false
        message.channel.send({embed: {
            color: ('#5E81AC'),
            title: ':triangular_flag_on_post: Filter toggle :triangular_flag_on_post: ',
            description: "Profanity filter disabled"}})
    }
    }
}
class messageFilter {
    static async checkForProfanity(client, message) {
        const bannedWords = ["bitch", "cock", "dick", "fag", "fuck", "idiot", "piss", "pussy", "porn", "retard", "shit", "tranny"];
        const lowerCase = message.content.toLowerCase();
        // grab all profanity
        const containedProfanity = bannedWords.some(substring => {
            return lowerCase.includes(substring);
    })

        if (containedProfanity && (filterToggle = true)) {
            const warnedUser = message.guild.member(user);
            warningNumber++;
            // const embedMessage = new Discord.RichEmbed()
            //     .setColor('#ffffff')
            //     .setTitle('Oopsy someone said a fucky wucky word')
            //     .setDescription(`Someone said fuck in ${message.channel}`)
            //     .addField('User', message.author)
            //     .addField('Content', message.content)
            // message.reply(embedMessage);
            message.channel.send({embed: {
                color: ('#5E81AC'),
                description: "profanity caught :sunglasses:"}});
                if (warningNumber => warningMax){
                    warnedUser.ban({reason: 'You were kicked for saying the fucky wucky word'})
                        message.channel.send(`Kicked ${warnedUser.tag} :sunglasses:`);
                        
                    
                    }
        
                }
            }};              
        
        console.log(message.content)
    


module.exports = messageFilter;