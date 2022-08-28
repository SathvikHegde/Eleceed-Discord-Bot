const fetch = require("node-fetch")

module.exports = {
  name: 'latex',
  alias: ['tex'],
  cooldown: 1,
  description: "Render LaTex to a image!",
  async execute(message, args, cmd, client, Discord){
    let latex = args.join(" ");

    if(!latex) return message.channel.send("Please provide a valid latex!");

    latex = encodeURIComponent(latex);

    const response = await fetch(`https://chart.googleapis.com/chart?cht=tx&chl=${latex}&chs=50&chf=bg,s,101010&chco=FFFFFF`);

    if(response.status != 200) return message.channel.send("ERROR! Something went wrong.");

    const imageBlob = await response.blob();
    const image = Buffer.from(await imageBlob.arrayBuffer());

    const attachment = new Discord.MessageAttachment(image);

    message.channel.send(attachment);
  }
}