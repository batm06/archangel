const Discord = require('discord.js');
const { off } = require('process');
let warningNumber = 5 //change to client input
let warningMax;
let filterToggle = false;
let perms = message.member.permissions;
const cont = message.content.toLowerCase();


//filter toggle


if (cont.includes(`!toggle filter` )){ //placeholder
   if (message.author.perms.has("ADMINISTRATOR")){
    if (filterToggle = false){
        message.channel.send('which words would you like to ban? (be sure to evenly space the banned words in one message)').then
        if (cont.includes('')){
            const bannedWords = cont;
            const bannedArray = bannedwords.split(' '); //makes the input message an array which we will use for the filter
        } then
        message.channel.send('how many warnings should the user be given? (type one messasge, only a number)').then
            if (message.content.includes(Number)){
                const warningNumber = message.content.Number()
            }else {
                message.channel.send('Please input a number!')
                return
            }


        filterToggle === true;
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



}else message.channel.send('You do not have the permission to execute this command!')
    };
    };
};



//actual filter code
class messageFilter {
    static async checkForProfanity(client, message) {
        const lowerCase = message.content.toLowerCase();
        // grab all profanity
        const containedProfanity = bannedArray.some(substring => {
            return lowerCase.includes(substring);
    })}    when (filterToggle = true){
        if (containedProfanity) {
            const warnedUser = message.channel.author(user);
            let warningNumber;
            warningNumber++;
            message.channel.send({embed: {
                color: ('#5E81AC'),
                description: `profanity caught :sunglasses: warning ${warningNumber}/${warningMax}`}});
                if (warningNumber => warningMax){
                    warnedUser.ban({reason: 'You were kicked for saying the no no word'})
                        message.channel.send(`Kicked ${warnedUser.tag} :sunglasses:`);
                        
                    
                    }
                }
                }
            };              

        console.log(message.content)
    


module.exports = messageFilter;