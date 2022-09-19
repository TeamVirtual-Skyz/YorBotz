let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
let moment = require('moment-timezone')
let time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")

conn.sendButtonDoc(m.chat, 'ʜᴀɪ..🥰 ,ᴀᴋᴜ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ᴅɪʙᴇʀɪ ɴᴀᴍᴀ ᴘᴜᴛʀᴀ-ꜱᴋʏᴢ,ꜱᴀʏᴀ ᴅɪʙᴜᴀᴛ ᴏʟᴇʜ ꜱᴇꜱᴇᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇʀɴᴀᴍᴀ ᴘᴜᴛʀᴀ,ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ꜰɪᴛᴜʀ ʙᴏᴛ,ꜱɪʟᴀʜᴋᴀɴ ᴋʟɪᴋ ʙᴜᴛᴛᴏɴ ᴅɪʙᴀᴡᴀʜ\n\nɴᴏᴛᴇ: ʜᴀʀᴀᴘ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ꜱᴇᴄᴀʀᴀ ʙɪᴊᴀᴋ ᴅᴀɴ ᴊᴀɴɢᴀɴ ᴅɪꜱᴘᴀᴍ', data.namabot, 'ʟɪꜱᴛᴍᴇɴᴜ', '.m', fake, { contextInfo: {
externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    sourceUrl: data.sc,
    title: 'Jangan Dispam Ya Kak',
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
}}})
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

module.exports = handler


