module.exports = {
  name: 'pat',
  alias: [],
  cooldown: 1,
  description: "Pat somebody! or yourself?",
  execute(message, args, cmd, client, Discord){
    const patgifs = [
      "https://c.tenor.com/JsjHFFy5O40AAAAC/kitten-pat.gif",
      "https://c.tenor.com/BMejCjtrWs0AAAAC/pat-good-boy.gif",
      "https://c.tenor.com/5MGEjar4AHcAAAAC/seal-hibo.gif",
      "https://c.tenor.com/1I1pGUd3xWkAAAAC/mala-mishra-jha-pat-head.gif",
      "https://c.tenor.com/aMSNSA75ybgAAAAC/big-hero6-baymax.gif",
      "https://c.tenor.com/GiI1f_yr4CcAAAAC/mialek-stray-souls.gif",
      "https://c.tenor.com/7lSNoSmQV-UAAAAM/funny-dog.gif",
      "https://c.tenor.com/YroVxwiL2dcAAAAM/ao-haru-ride-anime-boy.gif",
      "https://c.tenor.com/E6fMkQRZBdIAAAAC/kanna-kamui-pat.gif",
      "https://c.tenor.com/Y7B6npa9mXcAAAAM/rikka-head-pat-pat-on-head.gif"
    ];

    let gif = patgifs[Math.floor((Math.random() * patgifs.length))];

    let patter = message.author;
    let target = message.mentions.users.first() || message.author;

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<@${patter.id}> patted <@${target.id}>`)
    .setImage(gif);

    message.channel.send(embed);
  }
}