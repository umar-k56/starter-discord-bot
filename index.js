require('dotenv').config()
//const Buffer = require('buffer')
// const crypto = require('crypto')
// md5sum = crypto.createHash('md5')
// md5sum.update(new Buffer("1155360182478577694", 'utf8'));
// md5val = md5sum.digest('hex');
//console.log(md5val)
const Discord = require('discord.js')
const config = process.env
var pc = 0
var hello = 2000
var canSpam = true;
var catcherOn = true;
var pokedex = ["bulbasaur","ivysaur","venusaur","charmander","caterpie","metapod","weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","spearow","fearow","nidorina","nidorino","charmeleon","ninetales","oddish","gloom","vileplume","squirtle","wartortle","blastoise","butterfree","rattata","raticate","ekans","arbok","pikachu","raichu","sandshrew","sandslash","nidoran-f","nidoran-m","vulpix","zubat","golbat","charizard","paras","nidoqueen","nidoking","clefairy","clefable","jigglypuff","wigglytuff","parasect","venonat","venomoth","arcanine","bellsprout","weepinbell","victreebel","ponyta","magnemite","doduo","dodrio","dewgong","magikarp","ditto","diglett","dugtrio","persian","growlithe","poliwag","poliwhirl","poliwrath","abra","kadabra","machop","machoke","machamp","tentacool","tentacruel","geodude","graveler","golem","rapidash","magneton","farfetchd","cloyster","floragato","pawmo","tinkaton","unown","wobbuffet","seel","meowth","psyduck","golduck","mankey","primeape","alakazam","grimer","slowpoke","slowbro","muk","shellder","smeargle","crocalor","skeledirge","finizen","wurmple","silcoon","cascoon","wynaut","beldum","kricketot","burmy","combee","gastly","haunter","swadloon","voltorb","electrode","exeggutor","tynamo","horsea","seadra","seaking","onix","scatterbug","spewpa","flabébé","floette","florges","furfrou","honedge","doublade","aegislash-shield","eevee","goomy","sliggoo","rowlet","dartrix","litten","torracat","incineroar","popplio","brionne","primarina","pikipek","trumbeak","toucannon","yungoos","gumshoos","grubbin","charjabug","vikavolt","crabrawler","crabominable","oricorio-baile","cutiefly","ribombee","rockruff","lycanroc-midday","wishiwashi-solo","mareanie","toxapex","mudbray","mudsdale","dewpider","araquanid","fomantis","lurantis","morelull","shiinotic","salandit","stufful","bewear","bounsweet","steenee","tsareena","comfey","wimpod","golisopod","sandygast","palossand","pyukumuku","type-null","silvally","minior-red-meteor","komala","turtonator","togedemaru","bruxish","drampa","dhelmise","jangmo-o","hakamo-o","tapu-koko","tapu-lele","tapu-bulu","tapu-fini","cosmog","cosmoem","solgaleo","lunala","nihilego","buzzwole","pheromosa","xurkitree","celesteela","kartana","guzzlord","necrozma","marshadow","poipole","naganadel","stakataka","blacephalon","zeraora","meltan","melmetal","grookey","thwackey","rillaboom","scorbunny","raboot","cinderace","sobble","drizzile","inteleon","skwovet","greedent","rookidee","corvisquire","corviknight","blipbug","dottler","orbeetle","nickit","thievul","gossifleur","eldegoss","wooloo","dubwool","chewtle","drednaw","yamper","boltund","rolycoly","carkol","coalossal","applin","flapple","appletun","silicobra","sandaconda","cramorant","arrokuda","barraskewda","toxel","toxtricity-amped","sizzlipede","centiskorch","clobbopus","grapploct","sinistea","polteageist","hatenna","hattrem","hatterene","impidimp","morgrem","grimmsnarl","obstagoon","perrserker","cursola","sirfetchd","mr-rime","runerigus","milcery","alcremie","falinks","pincurchin","snom","frosmoth","stonjourner","eiscue-ice","indeedee-male","morpeko-full-belly","cufant","copperajah","dracozolt","arctozolt","dracovish","arctovish","duraludon","dreepy","drakloak","dragapult","zacian","zamazenta","eternatus","kubfu","urshifu-single-strike","zarude","regieleki","regidrago","glastrier","spectrier","calyrex","wyrdeer","kleavor","ursaluna","krabby","kingler","basculegion-male","sneasler","overqwil","glimmora","glimmet","orthworm","chikorita","bayleef","meganium","cyndaquil","quilava","croconaw","noctowl","ledyba","ledian","spinarak","ariados","crobat","chinchou","lanturn","pichu","feebas","mareep","flaaffy","bellossom","clamperl","politoed","hoppip","skiploom","turtwig","jumpluff","grotle","piplup","prinplup","starly","sunkern","sunflora","staravia","staraptor","kricketune","luxio","yanma","budew","roserade","bastiodon","wormadam-plant","mothim","cherubi","cherrim","shellos","honchkrow","purugly","chingling","pineco","shuckle","chatot","hippopotas","carnivine","lumineon","mantyke","yanmega","rotom","phione","manaphy","shaymin-land","victini","snivy","servine","serperior","tepig","pignite","emboar","oshawott","dewott","samurott","patrat","watchog","lillipup","herdier","stoutland","purrloin","liepard","pansage","simisage","pansear","simisear","panpour","simipour","munna","musharna","pidove","tranquill","unfezant","blitzle","zebstrika","roggenrola","boldore","gigalith","woobat","swoobat","drilbur","excadrill","timburr","gurdurr","conkeldurr","tympole","palpitoad","seismitoad","throh","sawk","sewaddle","leavanny","venipede","whirlipede","scolipede","cottonee","whimsicott","petilil","lilligant","basculin-red-striped","sandile","krokorok","darumaka","darmanitan-standard","maractus","dwebble","crustle","scraggy","scrafty","sigilyph","yamask","cofagrigus","tirtouga","carracosta","archen","archeops","trubbish","garbodor","zorua","minccino","cinccino","gothorita","solosis","duosion","reuniclus","ducklett","swanna","vanillite","vanillish","vanilluxe","deerling","sawsbuck","exeggcute","emolga","karrablast","escavalier","foongus","amoonguss","frillish","jellicent","alomomola","cubone","marowak","joltik","galvantula","ferroseed","ferrothorn","klink","klang","klinklang","eelektrik","eelektross","hitmonlee","elgyem","beheeyem","litwick","hitmonchan","lampent","chandelure","axew","fraxure","haxorus","cubchoo","koffing","cryogonal","shelmet","accelgor","stunfisk","mienfoo","mienshao","weezing","golett","golurk","pawniard","bouffalant","rufflet","braviary","vullaby","mandibuzz","heatmor","durant","deino","zweilous","larvesta","tangela","volcarona","cobalion","terrakion","virizion","tornadus-incarnate","thundurus-incarnate","reshiram","zekrom","landorus-incarnate","kyurem","keldeo-ordinary","genesect","goldeen","chespin","quilladin","staryu","chesnaught","fennekin","gengar","starmie","braixen","delphox","drowzee","scyther","froakie","frogadier","greninja","bunnelby","diggersby","electabuzz","fletchling","fletchinder","talonflame","magmar","vivillon","litleo","pyroar","skiddo","gogoat","pancham","pangoro","espurr","pinsir","tauros","meowstic-male","spritzee","aromatisse","swirlix","enamorus-incarnate","slurpuff","inkay","malamar","gyarados","binacle","barbaracle","skrelp","lapras","dragalge","clauncher","clawitzer","helioptile","vaporeon","heliolisk","tyrunt","jolteon","tyrantrum","amaura","aurorus","sylveon","hawlucha","dedenne","flareon","porygon","carbink","goodra","klefki","omanyte","omastar","phantump","trevenant","pumpkaboo-average","gourgeist-average","bergmite","avalugg","noibat","noivern","xerneas","yveltal","zygarde-50","kabuto","kabutops","diancie","aerodactyl","hoopa","volcanion","articuno","decidueye","zapdos","moltres","dratini","dragonair","salazzle","oranguru","passimian","mimikyu-disguised","kommo-o","magearna","hypno","slugma","magcargo","piloswine","delibird","kingdra","phanpy","donphan","tyrogue","hitmontop","magby","raikou","entei","grovyle","torchic","combusken","mudkip","marshtomp","poochyena","mightyena","typhlosion","totodile","feraligatr","sentret","furret","hoothoot","beautifly","dustox","lotad","lombre","ludicolo","seedot","nuzleaf","shiftry","taillow","swellow","wingull","pelipper","surskit","masquerain","shroomish","cleffa","nincada","ninjask","shedinja","whismur","loudred","azurill","nosepass","delcatty","aron","lairon","electrike","manectric","plusle","minun","volbeat","illumise","roselia","igglybuff","gulpin","swalot","carvanha","wailmer","wailord","numel","camerupt","trapinch","vibrava","swablu","barboach","whiscash","baltoy","togepi","lileep","cradily","anorith","armaldo","milotic","castform","togetic","natu","xatu","duskull","chimecho","ampharos","snorunt","glalie","spheal","sealeo","walrein","huntail","gorebyss","luvdisc","bagon","shelgon","marill","azumarill","metang","regirock","regice","registeel","sudowoodo","kyogre","torterra","chimchar","monferno","infernape","aipom","empoleon","bidoof","bibarel","shinx","luxray","wooper","cranidos","rampardos","shieldon","quagsire","espeon","umbreon","vespiquen","murkrow","pachirisu","buizel","floatzel","gastrodon","ambipom","drifloon","misdreavus","drifblim","buneary","lopunny","mismagius","glameow","girafarig","stunky","forretress","gligar","steelix","snubbull","granbull","qwilfish","scizor","heracross","skuntank","bronzor","bronzong","bonsly","mime-jr","happiny","spiritomb","gible","gabite","garchomp","munchlax","riolu","lucario","hippowdon","skorupi","drapion","toxicroak","finneon","snover","abomasnow","weavile","magnezone","lickilicky","rhyperior","tangrowth","electivire","magmortar","togekiss","leafeon","glaceon","gliscor","mamoswine","porygon-z","probopass","dusknoir","froslass","uxie","mesprit","azelf","dialga","palkia","heatran","regigigas","giratina-altered","cresselia","darkrai","audino","krookodile","zoroark","gothita","gothitelle","lickitung","beartic","druddigon","rhyhorn","rhydon","bisharp","hydreigon","kangaskhan","meloetta-aria","mr-mime","jynx","snorlax","teddiursa","ursaring","swinub","corsola","remoraid","octillery","mantine","skarmory","houndour","houndoom","porygon2","stantler","smoochum","elekid","miltank","suicune","larvitar","pupitar","lugia","ho-oh","celebi","treecko","sceptile","blaziken","swampert","zigzagoon","linoone","ralts","kirlia","gardevoir","breloom","slakoth","vigoroth","slaking","exploud","makuhita","hariyama","skitty","mawile","meditite","medicham","sharpedo","torkoal","spoink","grumpig","spinda","flygon","cacnea","cacturne","altaria","zangoose","seviper","lunatone","solrock","corphish","crawdaunt","claydol","kecleon","shuppet","banette","dusclops","tropius","relicanth","salamence","metagross","latias","latios","groudon","rayquaza","jirachi","deoxys-normal","slowking","dunsparce","sneasel","croagunk","gallade","arceus","chansey","dragonite","blissey","tyranitar","mewtwo","sableye","aggron","absol","annihilape","cyclizar","mabosstiff","houndstone","flamigo","cetoddle","mew","farigiraf","maschiff","clodsire","kilowattrel","wattrel","gholdengo","tatsugiri","bellibolt","gimmighoul","tadbulb","baxcalibur","ceruledge","arctibax","cetitan","frigibax","dondozo","wo-chien","chien-pao","ting-lu","armarouge","veluza","iron-thorns","charcadet","iron-moth","naclstack","iron-jugulis","greavard","iron-hands","nacli","iron-bundle","squawkabilly","arboliva","dolliv","sandy-shocks","smoliv","slither-wing","revavroom","dachsbun","flutter-mane","varoom","fidough","brute-bonnet","palafin","tinkatink","scream-tail","maushold","espathra","tandemaus","great-tusk","bombirdier","flittle","pawmot","kingambit","wugtrio","garganacl","rabsca","pawmi","dudunsparce","wiglett","rellor","lokix","scovillain","iron-treads","nymble","tinkatuff","capsakid","spidops","sprigatito","klawf","tarountula","toedscruel","oinkologne","toedscool","brambleghast","lechonk","iron-leaves","bramblin","quaquaval","walking-wake","fuecoco","grafaiai","quaxwell","miraidon","shroodle","chi-yu","quaxly","iron-valiant","roaring-moon","koraidon","meowscarada"]
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.on('messageCreate', function(message){
  if(message.author.id == "716390085896962058" && message.embeds.length > 0 && catcherOn){
    if(message.embeds[0].title.includes("wild")){
      console.log(message.embeds[0].image.url, message.embeds[0].image.proxyURL)
      const CATCHERTOKEN = config.AUTOCATCHER_TOKEN
      setTimeout(function(){
          sendMessage("<@716390085896962058> h", CATCHERTOKEN)
      }, hello)
    }
  }else if(message.author.id == "716390085896962058" && message.content.includes("The pokémon is")){
    const hint = message.content.replace("The pokémon is", "").replace(".", "").replaceAll("\\", "").replace("spa", "").trim().toLowerCase()
    //console.log(hint)
    setTimeout(function(){

    
    for(var i = 0; i < pokedex.length; i++){
      var chosenPoke = pokedex[i];
      if(checkGuesswithHint(hint.toLowerCase().trim(), chosenPoke.trim())){
     
        sendMessage("<@716390085896962058> c " + chosenPoke.replace("-", " "), config.AUTOCATCHER_TOKEN, true);
        console.log(chosenPoke.replace("-", " "))
        fetch("https://discord.com/api/v9/channels/1155278090734411846/messages", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,fr-CA;q=0.8,fr;q=0.7,hy;q=0.6",
    "authorization": "MTAwNjM3NTM1ODkwOTY1NzEyOA.GzHCBA.o9lrqfqeIKAbud1JWb9tJ1BrirMcOiIwbaRM9M",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Chrome OS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-debug-options": "bugReporterEnabled",
    "x-discord-locale": "en-US",
    "x-discord-timezone": "America/Toronto",
    "x-super-properties": "eyJvcyI6IiIsImJyb3dzZXIiOiJDaHJvbWUiLCJkZXZpY2UiOiIiLCJzeXN0ZW1fbG9jYWxlIjoiZW4tVVMiLCJicm93c2VyX3VzZXJfYWdlbnQiOiJNb3ppbGxhLzUuMCAoWDExOyBDck9TIHg4Nl82NCAxNDU0MS4wLjApIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTYuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6IjExNi4wLjAuMCIsIm9zX3ZlcnNpb24iOiIiLCJyZWZlcnJlciI6Imh0dHBzOi8vZGlzY29yZC5jb20vIiwicmVmZXJyaW5nX2RvbWFpbiI6ImRpc2NvcmQuY29tIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjIzMDY1NiwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0="
  },
  "referrer": "https://discord.com/channels/947988772665049139/1155278090734411846",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"mobile_network_type\":\"wifi\",\"content\":\"Pokémon Log: Caught "+chosenPoke.replace("-", "").charAt(0).toUpperCase() + chosenPoke.replace("-", "").slice(1)+"\",\"tts\":false,\"flags\":0}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
setTimeout(function(){
fetch("https://discord.com/api/v9/channels/1155278090734411846/messages", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,fr-CA;q=0.8,fr;q=0.7,hy;q=0.6",
    "authorization": "MTAwNjM3NTM1ODkwOTY1NzEyOA.GzHCBA.o9lrqfqeIKAbud1JWb9tJ1BrirMcOiIwbaRM9M",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Chrome OS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-debug-options": "bugReporterEnabled",
    "x-discord-locale": "en-US",
    "x-discord-timezone": "America/Toronto",
    "x-super-properties": "eyJvcyI6IiIsImJyb3dzZXIiOiJDaHJvbWUiLCJkZXZpY2UiOiIiLCJzeXN0ZW1fbG9jYWxlIjoiZW4tVVMiLCJicm93c2VyX3VzZXJfYWdlbnQiOiJNb3ppbGxhLzUuMCAoWDExOyBDck9TIHg4Nl82NCAxNDU0MS4wLjApIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTYuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6IjExNi4wLjAuMCIsIm9zX3ZlcnNpb24iOiIiLCJyZWZlcnJlciI6Imh0dHBzOi8vZGlzY29yZC5jb20vIiwicmVmZXJyaW5nX2RvbWFpbiI6ImRpc2NvcmQuY29tIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjIzMDY1NiwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0="
  },
  "referrer": "https://discord.com/channels/947988772665049139/1155278090734411846",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"mobile_network_type\":\"wifi\",\"content\":\"<@716390085896962058> i l\",\"tts\":false,\"flags\":0}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});}, 1000)
      }
  }
  }, hello)
  }else if(message.author.id == "946947201291132958" && message.content == "!givepc"){
    setTimeout(function(){
      sendMessage("<@716390085896962058> bal", config.AUTOCATCHER_TOKEN)
    }, 2000)

  }else if(message.author.id == "946947201291132958" && message.content == "!spam"){
    if(canSpam == true){
      canSpam = false;
      sendMessage("Disabled Spamming.", config.AUTOCATCHER_TOKEN)
    }else{
      canSpam = true;
      sendMessage("Enabled Spamming.", config.AUTOCATCHER_TOKEN)
    }
  }else if(message.author.id == "946947201291132958" && message.content == "!catcher"){
    if(catcherOn == true){
      catcherOn = false;
      sendMessage("Disabled Autocatching.", config.AUTOCATCHER_TOKEN)
    }else{
      catcherOn = true;
      sendMessage("Enabled Autocatching.", config.AUTOCATCHER_TOKEN)
    }
  }
  if(message.author.id == "716390085896962058" && message.embeds.length > 0 && message.embeds[0].title.includes("balance")){
    pc = message.embeds[0].fields[0].value
    //console.log(message)
    pc = pc.replaceAll(",", "")
    setTimeout(function(){
      sendMessage("<@716390085896962058> trade <@946947201291132958>", config.AUTOCATCHER_TOKEN)
    }, 2000)
    
    //console.log(pc)
  }
  
  else if(message.author.id == "946947201291132958" && message.content == "!give"){
    sendMessage("<@716390085896962058> trade <@946947201291132958>", config.AUTOCATCHER_TOKEN)
    
  }else if(message.author.id == "716390085896962058" && message.content.includes("Requesting a trade")){
    setTimeout(function(){
    fetch("https://discord.com/api/v9/channels/947988772665049142/messages/"+message.id+"/reactions/%E2%9C%85/%40me?location=Message&type=0", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,fr-CA;q=0.8,fr;q=0.7,hy;q=0.6",
    "authorization": config.MY_TOKEN,
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Chrome OS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-debug-options": "bugReporterEnabled",
    "x-discord-locale": "en-US",
    "x-discord-timezone": "America/Toronto",
    "x-super-properties": "eyJvcyI6IiIsImJyb3dzZXIiOiJDaHJvbWUiLCJkZXZpY2UiOiIiLCJzeXN0ZW1fbG9jYWxlIjoiZW4tVVMiLCJicm93c2VyX3VzZXJfYWdlbnQiOiJNb3ppbGxhLzUuMCAoWDExOyBDck9TIHg4Nl82NCAxNDU0MS4wLjApIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTYuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6IjExNi4wLjAuMCIsIm9zX3ZlcnNpb24iOiIiLCJyZWZlcnJlciI6Imh0dHBzOi8vZGlzY29yZC5jb20vIiwicmVmZXJyaW5nX2RvbWFpbiI6ImRpc2NvcmQuY29tIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjIzMDY1NiwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0="
  },
  "referrer": "https://discord.com/channels/947988772665049139/947988772665049142",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "PUT",
  "mode": "cors",
  "credentials": "include"
});
  setTimeout(function(){
    if(pc != 0){
      sendMessage("<@716390085896962058> t add pc " + pc, config.AUTOCATCHER_TOKEN)
      pc = 0;
    }else{
    sendMessage("<@716390085896962058> t addall", config.AUTOCATCHER_TOKEN)
    }
  }, 2000)
}, 2000)
  }else if(message.author.id == "716390085896962058" && message.content.includes("Are you sure")){
    console.log(message.components[0].components[0].customId)
    setTimeout(function(){
      fetch("https://discord.com/api/v9/interactions", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,fr-CA;q=0.8,fr;q=0.7,hy;q=0.6",
    "authorization": config.AUTOCATCHER_TOKEN,
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Chrome OS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-debug-options": "bugReporterEnabled",
    "x-discord-locale": "en-US",
    "x-discord-timezone": "America/Toronto",
    "x-super-properties": "eyJvcyI6IiIsImJyb3dzZXIiOiJDaHJvbWUiLCJkZXZpY2UiOiIiLCJzeXN0ZW1fbG9jYWxlIjoiZW4tVVMiLCJicm93c2VyX3VzZXJfYWdlbnQiOiJNb3ppbGxhLzUuMCAoWDExOyBDck9TIHg4Nl82NCAxNDU0MS4wLjApIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTYuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6IjExNi4wLjAuMCIsIm9zX3ZlcnNpb24iOiIiLCJyZWZlcnJlciI6Imh0dHBzOi8vZGlzY29yZC5jb20vIiwicmVmZXJyaW5nX2RvbWFpbiI6ImRpc2NvcmQuY29tIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjIzMDY1NiwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0="
  },
  "referrer": "https://discord.com/channels/947988772665049139/947988772665049142",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"type\":3,\"guild_id\":\"947988772665049139\",\"channel_id\":\"947988772665049142\",\"message_flags\":0,\"message_id\":\""+message.id+"\",\"application_id\":\"716390085896962058\",\"session_id\":\"9ff7749c741b8e5ab5450ea56c5c8941\",\"data\":{\"component_type\":2,\"custom_id\":\""+message.components[0].components[0].customId+"\"}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
setTimeout(function(){
  sendMessage("<@716390085896962058> t c", config.AUTOCATCHER_TOKEN)
  setTimeout(function(){
    sendMessage("<@716390085896962058> t c", config.MY_TOKEN)
    
  }, 2000)
}, 4000)
    }, 2000)
  }
})
client.login(config.BOT_TOKEN);

function sendMessage(message, token, pokemon){
  fetch("https://discord.com/api/v9/channels/947988772665049142/messages", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,fr-CA;q=0.8,fr;q=0.7,hy;q=0.6",
    "authorization": token,
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Chrome OS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-debug-options": "bugReporterEnabled",
    "x-discord-locale": "en-US",
    "x-discord-timezone": "America/Toronto",
    "x-super-properties": "eyJvcyI6IiIsImJyb3dzZXIiOiJDaHJvbWUiLCJkZXZpY2UiOiIiLCJzeXN0ZW1fbG9jYWxlIjoiZW4tVVMiLCJicm93c2VyX3VzZXJfYWdlbnQiOiJNb3ppbGxhLzUuMCAoWDExOyBDck9TIHg4Nl82NCAxNDU0MS4wLjApIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTYuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6IjExNi4wLjAuMCIsIm9zX3ZlcnNpb24iOiIiLCJyZWZlcnJlciI6Imh0dHBzOi8vZGlzY29yZC5jb20vIiwicmVmZXJyaW5nX2RvbWFpbiI6ImRpc2NvcmQuY29tIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjIzMDY1NiwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0="
  },
  "referrer": "https://discord.com/channels/947988772665049139/947988772665049142",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"mobile_network_type\":\"wifi\",\"content\":\""+message+"\",\"tts\":false,\"flags\":0}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
if(pokemon){
  setTimeout(function(){
    fetch("https://discord.com/api/v9/channels/1155261250150862889/messages", {
"headers": {
"accept": "*/*",
"accept-language": "en-US,en;q=0.9,fr-CA;q=0.8,fr;q=0.7,hy;q=0.6",
"authorization": config.AUTOCATCHER_TOKEN,
"content-type": "application/json",
"sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
"sec-ch-ua-mobile": "?0",
"sec-ch-ua-platform": "\"Chrome OS\"",
"sec-fetch-dest": "empty",
"sec-fetch-mode": "cors",
"sec-fetch-site": "same-origin",
"x-debug-options": "bugReporterEnabled",
"x-discord-locale": "en-US",
"x-discord-timezone": "America/Toronto",
"x-super-properties": "eyJvcyI6IiIsImJyb3dzZXIiOiJDaHJvbWUiLCJkZXZpY2UiOiIiLCJzeXN0ZW1fbG9jYWxlIjoiZW4tVVMiLCJicm93c2VyX3VzZXJfYWdlbnQiOiJNb3ppbGxhLzUuMCAoWDExOyBDck9TIHg4Nl82NCAxNDU0MS4wLjApIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTYuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6IjExNi4wLjAuMCIsIm9zX3ZlcnNpb24iOiIiLCJyZWZlcnJlciI6Imh0dHBzOi8vZGlzY29yZC5jb20vIiwicmVmZXJyaW5nX2RvbWFpbiI6ImRpc2NvcmQuY29tIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjIzMDY1NiwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0="
},
"referrer": "https://discord.com/channels/947988772665049139/1155261250150862889",
"referrerPolicy": "strict-origin-when-cross-origin",
"body": "{\"mobile_network_type\":\"wifi\",\"content\":\"Pokémon Log: Caught "+message.replace("-", " ").split('').map((char, index) =>
index === 0 ? char.toUpperCase() : char).join('')+"\",\"tts\":false,\"flags\":0}",
"method": "POST",
"mode": "cors",
"credentials": "include"
});
}, 3000)
}
}

function checkGuesswithHint(hint, guess){
  if(guess.length == hint.length){
      for(var i = 0; i < guess.length; i++){
          if(guess[i] == hint[i] || hint[i] == "_"){
              
          }else{
              return false;
          }
      }
  }else{
      return false;
  }
  return true;
}

setInterval(function(){
  if(canSpam){
  sendMessage("Spawn!", config.SPAMMER_TOKEN)
  }
}, 5000)
