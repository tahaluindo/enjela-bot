function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62895369318181', 'AhmadChenDev', m)
  this.sendContact(m.chat, '62895369318181', 'Ahmad Chen Id', m)
  conn.reply(m.chat, `Nih OwnerKu Jangan dispam yah >_<`, m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['about']

handler.command = /^(owner|creator)$/i

module.exports = handler
