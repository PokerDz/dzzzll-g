const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
client.user.setGame(By Poker,"http://twitch.tv/S-F%22)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log([Start] ${new Date()});
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(Logged in as * [ " ${client.user.username} " ]);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(servers! [ " ${client.guilds.size} " ]);
  console.log(Users! [ " ${client.users.size} " ]);
  console.log(channels! [ " ${client.channels.size} " ]);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});



client.on('ready', () => {

    client.user.setActivity("By Poker | Beta V.0.0.2",{type: 'Streaming'})

});

client.login(process.env.BOT_TOKEN);
