module.exports = (member, Discord, client) => {
  console.log();
  client.channels.cache.get("875013057208786984").send(`Member joined with name ${member.displayName}`);
  
  if(member.displayName.includes("RTFKT")) {
    member.ban();
    client.channels.cache.get("875013057208786984").send(`Banned ${member.displayName}`);
  }
}
