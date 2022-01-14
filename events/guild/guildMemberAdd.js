module.exports = (member, Discord, client) => {
  console.log(`Member joined with name ${member.displayName}`);
  
  if(member.displayName.includes("RTFKT")) {
    member.ban();
    console.log(`Banned ${member.displayName}`);
  }
}
