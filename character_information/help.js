module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args, Discord){
        message.channel.send('This bot is created by SathvikHegde also known as "PeePeeHadLegs".\nBot Prefix is "-".\nTo see a list of commands type "-commands".\nFor updates on the information of characters or any future ideas for the bot dm  SathvikHegde#3545 😊');
    }
}