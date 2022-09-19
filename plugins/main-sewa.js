let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    pepe = 'https://telegra.ph/file/8077b1f0806b68541a514.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "◈ Created by putra",
        "description": `
┌「 *Sewa bot* 」
│     
├ 1 Grup / 30 Hari
├ Rp. 10,000 Dana
├ Rp. 15,000 Pulsa indosat
│
├ 1 Premium / 30 Hari
├ Rp. 5,000 Dana
├ Rp. 10,000 Pulsa indosat
│
├ tertarik? hubungi: 
├ @17722223969   (putra-skyz)
└────
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4730029423700586"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4730029423700586",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "17722223969@s.whatsapp.net"
        },
        "footerText": "https://wa.me/c/17722223969\n\nowner number : wa.me/17722223969"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot', 'premium']
handler.tags = ['main']
handler.command = /^(sewabot|premium)$/i

module.exports = handler
