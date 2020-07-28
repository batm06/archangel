const messageFilter = require("./eventActions/messageFilter")

let raidToggle = false;
if (cont.includes('!raidtoggle')){
    if (message.auhor.perms.has("ADMINISTRATOR")){
        if (raidToggle === true){
            raidToggle === false
            message.channel.send({embed: {
             color: ('#5E81AC'),
             title: ':triangular_flag_on_post: raidmode toggle :triangular_flag_on_post: ',
             description: "raid protection disabled"}});
        }else if(raidToggle === false){
             raidToggle === true
             message.channel.send({embed: {
                color: ('#5E81AC'),
                title: ':triangular_flag_on_post: raidmode toggle :triangular_flag_on_post: ',
                description: "raid protection enabled!"}});
    }} else {
        message.channel.send("you do not have the permission to execute that command!");
    }
  
}

    while (raidToggle === true){
    
}