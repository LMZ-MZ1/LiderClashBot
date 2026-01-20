export default {
  command: ['reglacolider'],
  category: 'clash',
  info: {
    desc: 'Reglas para miembros con rango Colíder',
    uso: ''
  },
  run: async (client, m) => {

    const lider = '522226671751@s.whatsapp.net'

    const text = `
> 👑 *Reglas para Colíderes del Clan*

⚔️ *Mantenimiento del rango*  
• Para llegar a *Colíder* ya fue necesario aportar **3000+ puntos en guerra durante 5 semanas seguidas**. De modo que se espera **participación constante en guerra**  
• Si realizas **menos de 1000 puntos semanales** durante 📅 **3 semanas seguidas**, 🔻 serás degradado a *Veterano*  
• Si esto continúa, podrás regresar a *Miembro*

━━━━━━━━━━━━━━

🚫 *Autoridad y límites*  
• Los Colíderes **NO pueden ascender ni expulsar miembros**  
• Solo se permite actuar en casos **extraordinarios**, como:
  - Insultos al clan  
  - Violaciones graves a las reglas  

• Todas las decisiones finales corresponden al líder  👑 @LegnaMetalZoa
(basado en analíticas y desempeño real)

━━━━━━━━━━━━━━

📣 *Responsabilidades activas*  
• Dar *toques* a miembros inactivos en la pestaña de Guerra  
• En la pestaña del clan hay un botón azul que dice  
🔵 *“Mensaje”*  
👉 Ahí deben enviar recordatorios para que  
todos jueguen sus guerras
`.trim()

    await client.sendMessage(
      m.chat,
      { text, mentions: [lider] },
      { quoted: m }
    )
  }
}
