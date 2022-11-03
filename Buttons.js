//Coded by Tharindu Liyanage 2022
// Edit This File 
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons 
// 👈 You Can change this your choice
global.list = ('القوائم 🧬')
global.allmenu = ('كل القائمة 🎉')
global.script = ('السكربت 🌈')
global.owner = ('المالك 🦋')
global.deploy = ('المطور 🐥')
global.project = ('المشروع 🦋')
global.donate = ('التبرع 🚀')
global.stop = ('إيقاف 🛑')
global.skip = ('تخطي ⏩')
global.thanks = ('*أهلا وسهلا بك 💙*')
// 👈 You Can change this your choice
global.nextimg = ('الصورة التالية ➡️')
global.audio = ('🎶 صوت')
global.video = ('فيديو 📽')
global.yts = ('بحث اليوتيوب 🌐')
global.play = ('ابدأ 🍿')
// 👈 You Can change this your choice

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
