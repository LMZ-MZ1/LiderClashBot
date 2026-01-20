export default {
  command: ['invitar'],
  category: 'clash',
  info: {
    desc: 'Información del clan e invitaciones',
    uso: ''
  },
  run: async (client, m) => {

    const lider = '522226671751@s.whatsapp.net' // tu JID
    const nombre = m.pushName || 'Jugador'

    const text = `
👋 Hola *${nombre}* ¿Quieres invitar a alguien al clan? 
🔗 Si necesitas un *link de invitación*, puedes pedírselo directamente al Supremo y Amadísimo líder 👑 @${lider.split('@')[0]}
Si eres veterano o colider, tu mism@ puedes generar un link de invitacion en la pestaña del clan. 
Si no sabes como hacerlo puedes decirle a la persona que quieres invitar que busque el clan por nombre o por tag.  

> 🏰 *Información del Clan*

✨ Nombre del clan:  
*ᴷᴵᴺᴳMÉXICOᴷᴵᴺᴳ*

🏷️ Tag del clan:  
*#QGVQPY0Y*

━━━━━━━━━━━━━━

📣 *Mensaje para Veteranos y Colíderes*  
Si algún *Veterano* o *Colíder* está viendo este mensaje, por favor tiren paro y envíen aquí el *link de invitación* para compartirlo.
`.trim()

    await client.sendMessage(
      m.chat,
      {
        text,
        mentions: [lider] // aquí se hace la mención real
      },
      { quoted: m }
    )
  }
}
