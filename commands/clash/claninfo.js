export default {
  command: ['claninfo'],
  category: 'clash',
  info: {
    desc: 'Información básica del clan',
    uso: '.claninfo'
  },
  run: async (client, m) => {

    const lider = '522226671751@s.whatsapp.net'

    const text = `
> 🏰 *Información del Clan*

✨ Nombre:  
*ᴷᴵᴺᴳMÉXICOᴷᴵᴺᴳ*

🏷️ Tag:  
*#QGVQPY0Y*

👑 Supremo y Amadísimo Líder del clan:  
@LegnaMetalZoa
`.trim()

    await client.sendMessage(
      m.chat,
      { text, mentions: [lider] },
      { quoted: m }
    )
  }
}
