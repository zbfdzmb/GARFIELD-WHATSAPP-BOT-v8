// 👈 You Can change this your choice 
// 👈 You Can change this your choice  
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}


//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🐼'] // 👈 Enter your Emoji 
global.symb = '█' // 👈  Enter Any ▁ ▂ █ ░ ▘ □ ▣
global.symb2 = '▎ █' // 👈 Enter Any ▬▓▌▎■
global.symb3 = '▬' // 👈 Enter Any ▅ ▂ ▁ ▊
global.emoji02 = ['🦋'] //👈 Enter your Emoji
global.notice = ` *مرحبا 🥰 شينيه*
*ITACHI Ξ*
* انا صاحب الكثير من البوتات*
*بوتاتي كلها مجانية🇰*
*تواصل معي بعد ماتقول اوني تشان*
*Not more..*
*Also I am Student*
*Follow My Facebook - https://www.facebook.com/zenoixnoize*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+966568319347'] //👈  Enter Your number
global.premium =  ['+966568319347'] //👈  Enter Your number
global.ownernomer = '+966568319347' //👈  Enter Your number
global.ownername = 'ZENOI' //👈 Enter Your name
global.botname = 'ITACHI ＢＯＴ' //👈 Enter Your Bot name
global.footer = '© مطور بوساطة ايتاتشي ساما' //👈 Enter Your Name
global.ig = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8' // 👈 You Can change this your choice
global.region = 'India, South India, Kerala' // 👈 You Can change this your choice
global.sc = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8'
global.fbt = 'Follw Us ℹ️' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'https://www.facebook.com/garfieldbots/'// 👈 Enter your Social media link to follow now button
global.welcome = '*Welcome To The Group 🦋*' // 👈 You Can change this your choice
global.bye = '*Bye bye Mother fucker 🐼*' // 👈 You Can change this your choice
global.packname = 'GARFIELD-BOTv8'  // 👈 You Can change this your choice 
global.author = 'NOIZE DEVELOPMENT' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' 
global.spoty = 'https://i.postimg.cc/HW2YbN1b/Pics-Art-22-08-09-16-12-14-489.png'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'Done 🦋', // 👈 You Can change this your choice
    admin: 'This Feature Is Only For Admin!', // 👈 You Can change this your choice
    botAdmin: 'Bot Must Be Admin First!', // 👈 You Can change this your choice
    owner: 'This Feature Is Only For Owner!', // 👈 You Can change this your choice
    group: 'Feature Used Only For Groups!', // 👈 You Can change this your choice
    private: 'Features Used Only For Private Chat!', // 👈 You Can change this your choice
    bot: 'This Feature Is Only For Bot', // 👈 You Can change this your choice
    wait: '```Please Wait...```', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
/// Do Not Change 👇 
global.limitAwal = "99999999999999999"
global.lolkey = "835641f3d2d1b6971e1fd132"
global.xteam = "apivproject"
global.xcodeapi = "5S3epf7hC2"
global.dapaapi = "piceg"
global.sankey = "sanuwa"
global.xteamkey = "nandowangy"
global.carkey = "cakrayp24Q6"
global.violkey = "beta"
global.HunterApi = "FuckBitch"
global.neokey = "V8qnSaTq"
global.riy = "RiyGanz"

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})



// Update Logs
// New Menu Ui
/*
▬
▎ موشي موش 👋 
▎ ITACHI ＢＯＴ
▎ █ السرعة : 0.00119 miliseconds
▎ █ وقت التشغيل : 9 hours, 58 minutes, 23 seconds
▎ █ اسم البوت : ITACHI ＢＯＴ 
▎ █ اسم المالك: ايتاتشي ساما
▎ █ رقم المالك : +966568319347
▎ █ الهوست : 1001
▎ █ نظام التشغيل : linux
▎ █ مجموع المستخدمين : 11
   قائمة الأوامر🌀
   ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 
   *▓  كل القائمة* 
   *▓  قائمةالتحميل*
   *▓  قائمةالبحث*
   *▓  قائمةالمعلومات*
   *▓  قائمة التحويلات*
   *▓  قائمة المرح*
   *▓  قاعدة البيانات*
   *▓  ثائمة الألعاب*
   
▎▎ ️ITACHI ＢＯＴ  Created by ITACHI SAMA  🪁
▎ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ITACHI TEAM
▎ ITACHI ΛＩ v1.00             
⭕►▁▁▁▁▁▁▁▁▁▁▁▁▁▁
   ▎ ITACHI ＢＯＴ
   ▁▁▁▁▁▁▁▁▁▁▁▁▁▁
 ▁▁▁▁▁▁▁▁▁▁▁▁▁▁
▎ 
   █▄▄ █▀█ ▀█▀
   █▄█ █▄█ ░█░
⭕▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
*/
// Fix Audio And Video Bug
