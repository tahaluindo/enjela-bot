let fs = require('fs')
global.DeveloperMode = 'false' //true Or false
global.owner = JSON.parse(fs.readFileSync('./data/owner.json')) // Letakan nomor kamu di file /data/owner.json
global.mods = JSON.parse(fs.readFileSync('./data/moderator.json')) // Moderator?
global.prems = JSON.parse(fs.readFileSync('./data/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  lol: 'https://lolhuman.herokuapp.com',
  tobz: 'http://tobz-api.herokuapp.com',
  fdci: 'https://api.fdci.se',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://splapi.herokuapp.com': 'kris',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': '170342e43e147afa',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'officialdittaz',
  'https://lolhuman.herokuapp.com': 'eafcf901640d1c599ae71519',
  'http://tobz-api.herokuapp.com': 'Tobz',
}

// Sticker WM
global.packname = 'THCA-BOT'
global.author = 'AKU GANTENG BANG'

global.wait = '_*tunggu..*_'

global.multiplier = 100 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
