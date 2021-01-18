module.exports = {
    name: 'subin',
    description: "this is a subin command!",
    execute(message, args, Discord){
        const subinembed = new Discord.MessageEmbed()
        .setColor('#0062ff')
        .setTitle('Subin Lee')
        .addFields(
            {name:'**About**', value:'She is the granddaughter of the Awakened Union leader. She is on par with Jisuk in terms of power, making her quite strong. She is friends with Jisuk, Jiwoo, and Wooin. Her ability is cryokinesis. She is currently attending the Awakened Academy.'},
            {name:'**Personality**', value:'She has a short temper, but doesnt lay her hands on people for no reason. However, she is quick to brawl with Jisuk and the smallest things tick her off. She is also a very confident individual due to her high combat ability. She is also very proud to be in the Awakened Union as shown when she had a duel with Wooin just because he did not immediately accept Parks invitation to join the Union. She is also very suspicious of others. When Jiwoo was kind to her, she was very confused and wondered why a complete stranger would say hi to her. However she is also protective of her friends and enjoys spending time with them. When Jiwoo invited her to his house the day before they went to the academy, she agreed even though she didnt have to and didnt know him that well.'},
            {name:'**Abilities and Fighting Prowess**', value:'**Cryokinesis:** Subin has the ability to manipulate ice. She can generate ice shards and shoot them at the opponent. She can also immediately generate ice walls to defend herself, and a pair of ice knives for close combat.'}

        )
        .setImage('https://static.wikia.nocookie.net/eleceed/images/3/37/Lee_subin.jpg/revision/latest/scale-to-width-down/619?cb=20200520210050')
        message.channel.send(subinembed);
    }
}