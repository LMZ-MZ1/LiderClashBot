export default {
  command: ['reminder'],
  category: 'clash',

  // 🔐 PERMISOS
  isAdmin: true,     // solo admins del grupo
  botAdmin: false,   // el bot NO necesita ser admin

  info: {
    desc: 'Envía un recordatorio de guerra del clan',
    uso: ''
  },

  run: async (client, m) => {

    if (!m.isGroup)
      return m.reply('🍒 Este comando solo puede usarse en grupos.')

    const lider = '522226671751@s.whatsapp.net'

    const text = `
⏰ *RECORDATORIO DE GUERRA*

> ⚔️ Guerra del clan (jueves a domingo)

🎯 Todos deben cumplir con sus *1000 puntos de guerra*  
⏳ No lo dejen para el último momento

⭐ *Veteranos y Colíderes*  
• Apoyen enviando recordatorios  
• Den *toques* a quienes no llevan puntos  
• Usen el botón azul *Mensaje* en el clan para enviar recordatorios

━━━━━━━━━━━━━━

👑 @${lider.split('@')[0]}
`.trim()

    await client.sendMessage(
      m.chat,
      {
        text,
        mentions: [lider] // esto genera la mención real
      },
      { quoted: m }
    )
  }
}
