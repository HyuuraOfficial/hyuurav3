/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://api.zeeoneofc.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'GDlJ3Y8n',
}

// Other
global.owner = ['6281361281833','0','0']
global.ownername = ['Aldi']
global.pacarowner = ['6281361039406']
global.pacarownername = ['nadia']
global.premium = ['6281361281833']
global.packname = 'Hyuura-Botz'
global.botname = ['hyuuraBotz']
global.author = 'Hyuura|© created by aldi'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '➫'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Nya Goblok!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!,bodoh bet anying!',
    owner: 'Fitur Khusus Creator Gw😎',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '*_BENTAR TOD..._*',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 30
}
global.thumb = fs.readFileSync('./media/hyuura.jpg')
global.visoka = { url: 'https://telegra.ph/file/6ab7d4c84770b16c22789.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
