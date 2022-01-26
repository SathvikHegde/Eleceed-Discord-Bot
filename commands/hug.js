module.exports = {
  name: 'hug',
  alias: [],
  cooldown: 1,
  description: "Hug somebody! or yourself?",
  execute(message, args, cmd, client, Discord){
    const huggifs = [
      "https://c.tenor.com/UhcyGsGpLNIAAAAC/hug-anime.gif",
      "https://c.tenor.com/SPs0Rpt7HAcAAAAM/chiya-urara.gif",
      "https://c.tenor.com/qF7mO4nnL0sAAAAM/abra%C3%A7o-hug.gif",
      "https://c.tenor.com/z2QaiBZCLCQAAAAM/hug-anime.gif",
      "https://c.tenor.com/nHkiUCkS04gAAAAM/anime-hug-hearts.gif",
      "https://c.tenor.com/DxMIq9-tS5YAAAAM/milk-and-mocha-bear-couple.gif",
      "https://c.tenor.com/OXCV_qL-V60AAAAM/mochi-peachcat-mochi.gif",
      "https://c.tenor.com/9gsqEGVuaI4AAAAC/a-lovely-tuji-hug.gif",
      "https://c.tenor.com/wqCAHtQuTnkAAAAM/milk-and-mocha-hug.gif"
    ];

    let gif = huggifs[Math.floor((Math.random() * huggifs.length))];

    let hugger = message.author;
    let target = message.mentions.users.first() || message.author;

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<@${hugger.id}> hugged <@${target.id}>`)
    .setImage(gif);

    message.channel.send(embed);
  }
}