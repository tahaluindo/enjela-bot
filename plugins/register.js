const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? \n${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 25) throw 'Umur terlalu tua HAHAHA'
  if (age < 5) throw 'Bayi bisa ngetik sesuai format ajg 🗿'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
◪ *「 DATA DAFTAR BERHASIL DI SIMPAN 🚀 」*
╰───────────────────╮
╭───────────────────╯
├❏ Nama : ${name} 👍
├❏ Umur : ${age}Thn 🎊
├❏ SN: ${sn} 🔑
├❏ NB: Jika Error Daftar Ulang
╰───────────────────╯
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['database']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

