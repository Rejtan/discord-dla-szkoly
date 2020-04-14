const Discord = require('discord.js');
const bot = new Discord.Client();





bot.on('presenceUpdate', (presenceUpdate) => {

  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var day = date.getDate();
  var month = date.getMonth()+1;


  var fs = require('fs');
  var util = require('util');
  var logFile = fs.createWriteStream("M"+month+"-"+"D"+day+"-"+'log.txt', { flags: 'a' });
    // Or 'w' to truncate the file every time the process starts.
  var logStdout = process.stdout;

  console.log = function () {
    logFile.write(util.format.apply(null, arguments) + '\n');
    logStdout.write(util.format.apply(null, arguments) + '\n');
  }
  console.error = console.log;



try {
let modRole = presenceUpdate.guild.roles.cache.find(role => role.name == "Nauczyciel");


if (presenceUpdate.member.roles.cache.has(modRole.id))  {


  const user = presenceUpdate.member.user;
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var day = date.getDate();
  var month = date.getMonth()+1;
  
if (day<10){
    day="0"+day;}
if (month<10){
    month="0"+month;}
if (hour<10){
    hour="0"+hour;}
if (minute<10){
    minute="0"+minute;}
if (second<10){
    second="0"+second;}


if ((user.presence.status == "online") || (user.presence.status == "offline")){
console.log(presenceUpdate.member.user.tag+'    '+month+'/'+day+'  '+hour+':'+minute+':'+second+'    '+user.presence.status)
}


}


else{};

}
catch(err) {}
}

);


bot.login('Tutaj wpisz token swojego bota');
