const Discord = require('discord.js');
let warningNumber = 5 //change to client input
let warningMax;
   if (message.author = client.user){
            return
   }

if (cont.includes(bannedWords)){
    let warnedUser = message.guild.member(user);
    warningNumber++
    if (warningNumber => warningMax){
     warnedUser.ban({
         reason: 'Warning limit reached.',
     })
    }
}
    
class messageFilter {
    static async checkForProfanity(client, message) {
        const bannedWords = ["bitch", "cock", "dick", "fag", "fuck", "idiot", "piss", "pussy", "porn", "retard", "shit", "tranny"];
        let lowerCase = message.toLowerCase();
        // grab all profanity
        const containedProfanity = profanityList.some(substring => {
            return lowerCase.includes(substring);
        })

        if (containedProfanity) {
            warningNumber++;
            const embedMessage = new Discord.RichEmbed()
                .setColor('#ffffff')
                .setTitle('Oopsy someone said a fucky wucky word')
                .setDescription(`Someone said fuck in ${message.channel}`)
                .addField('User', message.author)
                .addField('Content', message.content)
        }
    }
}